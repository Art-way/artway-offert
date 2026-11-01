"use client";

import { useEffect } from "react";

const PLATFORM_URL = "https://static.elfsight.com/platform/platform.js";
const WIDGET_CLASS = "elfsight-app-47186b70-4c2e-4d1e-9fc1-4ada8aabc106";
const PRECONNECT_ORIGINS = [
  "https://static.elfsight.com",
  "https://core.service.elfsight.com",
  "https://universe-static.elfsightcdn.com",
];
const LOADING_MESSAGE = "Förbereder ditt offertformulär…";
const UNAVAILABLE_MESSAGE =
  "Formuläret tar lite längre tid att ladda. Använd länken nedan eller ring oss så hjälper vi dig.";

function preconnectToElfsight() {
  const existingOrigins = new Set(
    Array.from(
      document.querySelectorAll<HTMLLinkElement>('link[rel~="preconnect"]'),
    ).map((link) => new URL(link.href, document.baseURI).origin),
  );
  PRECONNECT_ORIGINS.forEach((origin) => {
    if (existingOrigins.has(origin)) return;
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = origin;
    document.head.appendChild(link);
    existingOrigins.add(origin);
  });
}

function watchPlatformScript(script: HTMLScriptElement) {
  if (script.dataset.artwayStatusWatch) return;
  script.dataset.artwayStatusWatch = "true";
  script.dataset.artwayElfsightState = "loading";
  // Keep the network result on the script across effect cleanup/remounts.
  // These one-shot listeners do not retain component or widget references.
  script.addEventListener(
    "load",
    () => {
      script.dataset.artwayElfsightState = "loaded";
    },
    { once: true },
  );
  script.addEventListener(
    "error",
    () => {
      script.dataset.artwayElfsightState = "error";
    },
    { once: true },
  );
}

export default function CampaignEffects() {
  useEffect(() => {
    const formShell = document.getElementById("form-shell");
    const widget = formShell?.querySelector<HTMLElement>(`.${WIDGET_CLASS}`);
    const mobileBar = document.getElementById("mobile-bar");

    if (!formShell || !widget) return;

    let active = true;
    let started = false;
    let loaded = false;
    let retriedScript = false;
    let timeout: number | undefined;
    let firstFrame: number | undefined;
    let secondFrame: number | undefined;
    let platformScript: HTMLScriptElement | undefined;
    let formObserver: IntersectionObserver | undefined;
    let barObserver: IntersectionObserver | undefined;
    const initialBarHidden =
      mobileBar?.classList.contains("is-hidden") ?? false;
    const initialBarInert = mobileBar?.inert ?? false;

    const hasForm = () =>
      widget.querySelector('form, input, iframe, [role="textbox"]') !== null;

    function ready() {
      if (!active || loaded) return;
      loaded = true;
      window.clearTimeout(timeout);
      formShell!.classList.add("is-ready");
      formShell!.classList.remove("has-error");
      formShell!.setAttribute("aria-busy", "false");
      mutationObserver.disconnect();
    }

    function unavailable() {
      if (!active || loaded) return;
      formShell!.classList.add("has-error");
      formShell!.setAttribute("aria-busy", "false");
      const loadingMessage = formShell!.querySelector("#form-loading p");
      if (loadingMessage) loadingMessage.textContent = UNAVAILABLE_MESSAGE;
    }

    const mutationObserver = new MutationObserver(() => {
      if (hasForm()) ready();
    });
    mutationObserver.observe(widget, { childList: true, subtree: true });

    function loadForm(allowRetry = false) {
      if (!active || loaded) return;
      if (hasForm()) {
        ready();
        return;
      }

      // Retain the provider script across Strict Mode effects and navigation.
      // Elfsight observes added widgets itself; do not manually initialize a
      // second instance or replace the original widget's delivery integration.
      const existingScript = Array.from(document.scripts).find(
        (script) => script.src === PLATFORM_URL,
      );
      const scriptFailed =
        existingScript?.dataset.artwayElfsightState === "error";
      if (started && !scriptFailed) return;
      if (scriptFailed && (!allowRetry || retriedScript)) {
        unavailable();
        return;
      }

      platformScript?.removeEventListener("error", unavailable);
      window.clearTimeout(timeout);
      platformScript = existingScript;
      if (scriptFailed) {
        // One fresh request on subsequent user intent after a network failure.
        // A slow but loaded platform is not restarted or initialized twice.
        retriedScript = true;
        platformScript?.remove();
        platformScript = undefined;
      }

      started = true;
      preconnectToElfsight();
      formShell!.classList.remove("has-error");
      formShell!.setAttribute("aria-busy", "true");
      const loadingMessage = formShell!.querySelector("#form-loading p");
      if (loadingMessage) loadingMessage.textContent = LOADING_MESSAGE;
      timeout = window.setTimeout(unavailable, 20_000);

      const needsScript = !platformScript;
      if (!platformScript) {
        platformScript = document.createElement("script");
        platformScript.src = PLATFORM_URL;
        platformScript.async = true;
      }
      watchPlatformScript(platformScript);
      platformScript.addEventListener("error", unavailable);
      if (needsScript) document.head.appendChild(platformScript);
    }

    const ctas = document.querySelectorAll<HTMLElement>("[data-cta]");
    function warmForm() {
      loadForm(true);
    }
    function handleCta(event: Event) {
      loadForm(true);
      const cta = event.currentTarget as HTMLElement;
      const dataLayer = (window as Window & { dataLayer?: unknown }).dataLayer;
      // A CTA click expresses intent; it is never a completed-lead event.
      if (Array.isArray(dataLayer)) {
        dataLayer.push({
          event: "artway_quote_cta",
          cta_location: cta.dataset.cta,
        });
      }
    }
    ctas.forEach((cta) => {
      cta.addEventListener("pointerenter", warmForm);
      cta.addEventListener("focus", warmForm);
      cta.addEventListener("click", handleCta);
    });

    function handleHashChange() {
      if (window.location.hash === "#offert") loadForm(true);
    }
    window.addEventListener("hashchange", handleHashChange);

    if (hasForm()) ready();

    if ("IntersectionObserver" in window) {
      if (mobileBar) {
        barObserver = new IntersectionObserver(
          ([entry]) => {
            if (!active || !entry) return;
            mobileBar.classList.toggle("is-hidden", entry.isIntersecting);
            mobileBar.inert = entry.isIntersecting;
          },
          { rootMargin: "-30px 0px -50px 0px", threshold: 0 },
        );
        barObserver.observe(formShell);
      }
    }

    // Let the initial content paint before warming connections or starting
    // automatic near-viewport loading. Direct visitor intent remains immediate.
    firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        if (!active) return;
        preconnectToElfsight();
        if ("IntersectionObserver" in window) {
          formObserver = new IntersectionObserver(
            (entries) => {
              if (entries.some((entry) => entry.isIntersecting)) {
                loadForm();
                formObserver?.disconnect();
              }
            },
            { rootMargin: "120px 0px", threshold: 0 },
          );
          formObserver.observe(formShell!);
        } else {
          loadForm();
        }
      });
    });

    handleHashChange();

    return () => {
      active = false;
      window.clearTimeout(timeout);
      if (firstFrame !== undefined) window.cancelAnimationFrame(firstFrame);
      if (secondFrame !== undefined) window.cancelAnimationFrame(secondFrame);
      mutationObserver.disconnect();
      formObserver?.disconnect();
      barObserver?.disconnect();
      platformScript?.removeEventListener("error", unavailable);
      ctas.forEach((cta) => {
        cta.removeEventListener("pointerenter", warmForm);
        cta.removeEventListener("focus", warmForm);
        cta.removeEventListener("click", handleCta);
      });
      window.removeEventListener("hashchange", handleHashChange);
      if (mobileBar) {
        mobileBar.classList.toggle("is-hidden", initialBarHidden);
        mobileBar.inert = initialBarInert;
      }
    };
  }, []);

  return null;
}
