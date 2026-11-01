"use client";

import { useEffect } from "react";

const PLATFORM_URL = "https://static.elfsight.com/platform/platform.js";
const WIDGET_CLASS = "elfsight-app-47186b70-4c2e-4d1e-9fc1-4ada8aabc106";
const UNAVAILABLE_MESSAGE =
  "Formuläret tar lite längre tid att ladda. Använd länken nedan eller ring oss så hjälper vi dig.";

export default function CampaignEffects() {
  useEffect(() => {
    const formShell = document.getElementById("form-shell");
    const widget = formShell?.querySelector<HTMLElement>(`.${WIDGET_CLASS}`);
    const mobileBar = document.getElementById("mobile-bar");

    if (!formShell || !widget) return;

    let active = true;
    let started = false;
    let loaded = false;
    let timeout: number | undefined;
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

    function loadForm() {
      if (!active || started) return;
      started = true;
      if (hasForm()) {
        ready();
        return;
      }

      timeout = window.setTimeout(unavailable, 20_000);
      // Retain the provider script across Strict Mode effects and navigation.
      // Elfsight observes added widgets itself; do not manually initialize a
      // second instance or replace the original widget's delivery integration.
      platformScript = Array.from(document.scripts).find(
        (script) => script.src === PLATFORM_URL,
      );
      const needsScript = !platformScript;
      if (!platformScript) {
        platformScript = document.createElement("script");
        platformScript.src = PLATFORM_URL;
        platformScript.async = true;
      }
      platformScript.addEventListener("error", unavailable);
      if (needsScript) document.head.appendChild(platformScript);
    }

    const ctas = document.querySelectorAll<HTMLElement>("[data-cta]");
    function handleCta(event: Event) {
      loadForm();
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
    ctas.forEach((cta) => cta.addEventListener("click", handleCta));

    function handleHashChange() {
      if (window.location.hash === "#offert") loadForm();
    }
    window.addEventListener("hashchange", handleHashChange);

    if (hasForm()) ready();

    if ("IntersectionObserver" in window) {
      formObserver = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            loadForm();
            formObserver?.disconnect();
          }
        },
        { rootMargin: "0px", threshold: 0 },
      );
      formObserver.observe(formShell);

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
    } else {
      loadForm();
    }

    handleHashChange();

    return () => {
      active = false;
      window.clearTimeout(timeout);
      mutationObserver.disconnect();
      formObserver?.disconnect();
      barObserver?.disconnect();
      platformScript?.removeEventListener("error", unavailable);
      ctas.forEach((cta) => cta.removeEventListener("click", handleCta));
      window.removeEventListener("hashchange", handleHashChange);
      if (mobileBar) {
        mobileBar.classList.toggle("is-hidden", initialBarHidden);
        mobileBar.inert = initialBarInert;
      }
    };
  }, []);

  return null;
}
