(() => {
  'use strict';
  const formShell = document.getElementById('form-shell');
  const widget = formShell.querySelector('[class^="elfsight-app-"]');
  const panel = document.getElementById('offert');
  const mobileBar = document.getElementById('mobile-bar');
  let started = false;
  let loaded = false;
  let timeout;
  const ready = () => {
    if (loaded) return;
    loaded = true;
    clearTimeout(timeout);
    formShell.classList.add('is-ready');
    formShell.classList.remove('has-error');
    formShell.setAttribute('aria-busy', 'false');
    observer.disconnect();
  };
  const hasForm = () => !!widget.querySelector('form, input, iframe, [role="textbox"]');
  const observer = new MutationObserver(() => { if (hasForm()) ready(); });
  observer.observe(widget, { childList: true, subtree: true });
  const unavailable = () => {
    if (loaded) return;
    formShell.classList.add('has-error');
    formShell.setAttribute('aria-busy', 'false');
    document.querySelector('#form-loading p').textContent = 'Formuläret tar lite längre tid att ladda. Använd länken nedan eller ring oss så hjälper vi dig.';
  };
  function loadForm() {
    if (started) return;
    started = true;
    timeout = setTimeout(unavailable, 20000);
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.onerror = unavailable;
    document.head.append(script);
  }
  document.querySelectorAll('[data-cta]').forEach(link => {
    link.addEventListener('click', () => {
      loadForm();
      // CTA clicks are intent signals, never completed-lead conversion events.
      if (Array.isArray(window.dataLayer)) window.dataLayer.push({event: 'artway_quote_cta', cta_location: link.dataset.cta});
    });
  });
  if ('IntersectionObserver' in window) {
    const formObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        loadForm();
        formObserver.disconnect();
      }
    }, {rootMargin: '0px', threshold: 0});
    formObserver.observe(formShell);
    const barObserver = new IntersectionObserver(entries => {
      const entry = entries[0];
      mobileBar.classList.toggle('is-hidden', entry.isIntersecting);
      mobileBar.inert = entry.isIntersecting;
    }, {rootMargin: '-30px 0px -50px 0px', threshold: 0});
    barObserver.observe(formShell);
  } else loadForm();
  if (location.hash === '#offert') loadForm();
})();
