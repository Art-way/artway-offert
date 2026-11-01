"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "artway-campaign-consent-v1";
const GTM_ID = "GTM-MSNGZK28";
const GTM_URL = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
const META_ID = "1510463336340826";
const META_URL = "https://connect.facebook.net/en_US/fbevents.js";

type Choice = "accepted" | "declined";
type Gtag = (...args: unknown[]) => void;
type Fbq = Gtag & {
  callMethod?: Gtag;
  queue?: unknown[][];
  push?: Fbq;
  loaded?: boolean;
  version?: string;
};
type TrackingState = {
  defaultsSet: boolean;
  consent: "granted" | "denied";
  gtmStarted: boolean;
  metaInitialized: boolean;
  metaPageViewTracked: boolean;
};
type TrackingWindow = Window & {
  dataLayer?: unknown[];
  gtag?: Gtag;
  fbq?: Fbq;
  _fbq?: Fbq;
  __artwayCampaignTracking?: TrackingState;
};

function trackingContext() {
  const trackingWindow = window as TrackingWindow;
  const state = (trackingWindow.__artwayCampaignTracking ??= {
    defaultsSet: false,
    consent: "denied",
    gtmStarted: false,
    metaInitialized: false,
    metaPageViewTracked: false,
  });
  const dataLayer = (trackingWindow.dataLayer ??= []);
  const gtag = (trackingWindow.gtag ??= function () {
    dataLayer.push(arguments);
  });
  if (!state.defaultsSet) {
    state.defaultsSet = true;
    gtag("consent", "default", {
      ad_storage: "denied",
      analytics_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }
  return { trackingWindow, state, dataLayer, gtag };
}

function hasGtmScript() {
  return Array.from(document.scripts).some((script) => {
    if (!script.src) return false;
    const url = new URL(script.src, document.baseURI);
    return (
      url.origin === "https://www.googletagmanager.com" &&
      url.pathname === "/gtm.js" &&
      url.searchParams.get("id") === GTM_ID
    );
  });
}

function loadGoogle(state: TrackingState, dataLayer: unknown[]) {
  if (state.gtmStarted) return;
  state.gtmStarted = true;
  if (hasGtmScript()) return;
  dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const script = document.createElement("script");
  script.async = true;
  script.src = GTM_URL;
  document.head.appendChild(script);
}

function loadMeta(trackingWindow: TrackingWindow, state: TrackingState) {
  let fbq = trackingWindow.fbq;
  if (!fbq) {
    const stub: Fbq = (...args) => {
      if (stub.callMethod) stub.callMethod(...args);
      else stub.queue!.push(args);
    };
    stub.queue = [];
    stub.push = stub;
    stub.loaded = true;
    stub.version = "2.0";
    trackingWindow.fbq = stub;
    trackingWindow._fbq ??= stub;
    fbq = stub;
  }
  fbq("consent", "grant");
  if (!state.metaInitialized) {
    state.metaInitialized = true;
    fbq("init", META_ID);
  }
  if (!state.metaPageViewTracked) {
    state.metaPageViewTracked = true;
    // This page records a visit only. The original thank-you flow owns leads.
    fbq("track", "PageView");
  }
  if (!Array.from(document.scripts).some((script) => script.src === META_URL)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = META_URL;
    document.head.appendChild(script);
  }
}

function applyChoice(choice: Choice | null) {
  const { trackingWindow, state, dataLayer, gtag } = trackingContext();
  const consent = choice === "accepted" ? "granted" : "denied";
  if (state.consent !== consent) {
    state.consent = consent;
    gtag("consent", "update", {
      ad_storage: consent,
      analytics_storage: consent,
      ad_user_data: consent,
      ad_personalization: consent,
    });
  }
  if (consent === "granted") {
    // The granted update is queued before the single Google loader starts.
    loadGoogle(state, dataLayer);
    loadMeta(trackingWindow, state);
  } else {
    // Already loaded libraries stay in place and receive the revoked consent.
    // No new script or conversion event is sent on decline or revocation.
    trackingWindow.fbq?.("consent", "revoke");
  }
}

function parseChoice(value: string | null): Choice | null {
  if (!value) return null;
  try {
    const stored: unknown = JSON.parse(value);
    if (
      typeof stored === "object" &&
      stored !== null &&
      "version" in stored &&
      stored.version === 1 &&
      "choice" in stored &&
      (stored.choice === "accepted" || stored.choice === "declined")
    ) {
      return stored.choice;
    }
  } catch {
    // A missing, unavailable or outdated preference means no tracking consent.
  }
  return null;
}

function savedChoice(): Choice | null {
  try {
    return parseChoice(window.localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
}

export default function CampaignConsent() {
  const [open, setOpen] = useState(false);
  const returnFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const choice = savedChoice();
    applyChoice(choice);
    setOpen(choice === null);

    function openSettings(event: Event) {
      if (event.type === "click") {
        const target = event.target;
        const trigger =
          target instanceof Element
            ? target.closest<HTMLElement>("[data-cookie-settings]")
            : null;
        if (!trigger) return;
        event.preventDefault();
        returnFocus.current = trigger;
      } else {
        returnFocus.current =
          document.activeElement instanceof HTMLElement
            ? document.activeElement
            : null;
      }
      setOpen(true);
    }
    function syncChoice(event: StorageEvent) {
      if (event.key !== STORAGE_KEY && event.key !== null) return;
      const choice = parseChoice(event.newValue);
      applyChoice(choice);
      setOpen(choice === null);
    }
    document.addEventListener("click", openSettings);
    window.addEventListener("artway:cookie-settings", openSettings);
    window.addEventListener("storage", syncChoice);
    return () => {
      document.removeEventListener("click", openSettings);
      window.removeEventListener("artway:cookie-settings", openSettings);
      window.removeEventListener("storage", syncChoice);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      if (returnFocus.current?.isConnected) returnFocus.current.focus();
      returnFocus.current = null;
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  function choose(choice: Choice) {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          version: 1,
          choice,
          updatedAt: new Date().toISOString(),
        }),
      );
    } catch {
      // Honor this session's explicit choice even if storage is unavailable.
    }
    applyChoice(choice);
    setOpen(false);
    if (returnFocus.current?.isConnected) returnFocus.current.focus();
    returnFocus.current = null;
  }

  // Identical server and first client output; preferences are read after mount.
  if (!open) return null;

  return (
    <section
      className="cookie-panel"
      role="region"
      aria-label="Cookieinställningar"
      aria-describedby="cookie-description"
    >
      <div>
        <h2>Du väljer dina cookies</h2>
        <p id="cookie-description">
          Med ditt tillstånd använder vi Google och Meta för statistik och
          marknadsföring. Formuläret fungerar även om du avstår.
        </p>
        <p>
          <a
            href="https://artway.se/integritetspolicy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Läs om personuppgifter
          </a>
          .
        </p>
      </div>
      <div className="cookie-actions">
        <button
          className="cookie-button"
          type="button"
          onClick={() => choose("declined")}
        >
          Avstå
        </button>
        <button
          className="cookie-button cookie-accept"
          type="button"
          onClick={() => choose("accepted")}
        >
          Tillåt
        </button>
      </div>
    </section>
  );
}
