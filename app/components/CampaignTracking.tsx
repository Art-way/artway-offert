"use client";

import { useEffect } from "react";

const GTM_ID = "GTM-MSNGZK28";
const GTM_URL = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
const META_ID = "1510463336340826";
const META_URL = "https://connect.facebook.net/en_US/fbevents.js";

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
  metaConsentGranted?: boolean;
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

function startTracking() {
  const trackingWindow = window as TrackingWindow;
  const state = (trackingWindow.__artwayCampaignTracking ??= {
    defaultsSet: false,
    consent: "granted",
    gtmStarted: false,
    metaConsentGranted: false,
    metaInitialized: false,
    metaPageViewTracked: false,
  });
  const dataLayer = (trackingWindow.dataLayer ??= []);
  const gtag = (trackingWindow.gtag ??= function () {
    dataLayer.push(arguments);
  });
  const grantedConsent = {
    ad_storage: "granted",
    analytics_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  };

  // Queue defaults before starting the single Google loader. No stored
  // preference or interaction gates tracking on this campaign page.
  if (!state.defaultsSet) {
    state.defaultsSet = true;
    gtag("consent", "default", grantedConsent);
  }
  if (state.consent !== "granted") {
    state.consent = "granted";
    gtag("consent", "update", grantedConsent);
  }
  if (!state.gtmStarted) {
    state.gtmStarted = true;
    if (!hasGtmScript()) {
      dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
      const script = document.createElement("script");
      script.async = true;
      script.src = GTM_URL;
      document.head.appendChild(script);
    }
  }

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
  if (!state.metaConsentGranted) {
    state.metaConsentGranted = true;
    fbq("consent", "grant");
  }
  if (!state.metaInitialized) {
    state.metaInitialized = true;
    fbq("init", META_ID);
  }
  if (!state.metaPageViewTracked) {
    state.metaPageViewTracked = true;
    // Record a page visit only. CTA clicks and form interactions are not leads;
    // the original thank-you flow remains responsible for actual conversions.
    fbq("track", "PageView");
  }
  if (!Array.from(document.scripts).some((script) => script.src === META_URL)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = META_URL;
    document.head.appendChild(script);
  }
}

export default function CampaignTracking() {
  useEffect(() => {
    startTracking();
    // Retain the shared provider scripts and initialization markers across
    // Strict Mode cleanup/remounts; removing them could duplicate page visits.
  }, []);

  return null;
}
