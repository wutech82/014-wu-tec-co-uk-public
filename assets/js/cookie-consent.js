(function () {
  const GA_ID = 'G-GWC6PDJ1P0';

  function hasConsent() {
    return localStorage.getItem('cookie_consent') === 'granted';
  }

  function setConsent(value) {
    localStorage.setItem('cookie_consent', value);
  }

  function updateConsent(granted) {
    if (typeof window.gtag !== 'function') return;
    const state = granted ? 'granted' : 'denied';
    window.gtag('consent', 'update', {
      analytics_storage: state,
      ad_storage: 'denied',
      functionality_storage: granted ? 'granted' : 'denied',
      security_storage: 'granted'
    });
    if (granted) {
      // Start GA configuration only after consent is granted
      window.gtag('config', GA_ID);
    }
  }

  function createBanner() {
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-live', 'polite');
    banner.setAttribute('aria-label', 'Cookie Consent');

    banner.innerHTML = `
      <div class="cookie-content">
        <p>We use only essential cookies by default. With your consent, we enable privacy‑respecting analytics to improve our website. You can reject non‑essential cookies.</p>
        <p class="cookie-links">Learn more in our <a href="/privacy">Privacy Policy</a>.</p>
      </div>
      <div class="cookie-actions">
        <button class="btn reject" id="cookie-reject">Reject Non‑Essential</button>
        <button class="btn primary" id="cookie-accept">Accept All</button>
      </div>
    `;

    document.body.appendChild(banner);

    document.getElementById('cookie-accept').addEventListener('click', function () {
      setConsent('granted');
      updateConsent(true);
      banner.remove();
    });

    document.getElementById('cookie-reject').addEventListener('click', function () {
      setConsent('denied');
      updateConsent(false);
      banner.remove();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (hasConsent()) {
      updateConsent(true);
    } else {
      createBanner();
    }
  });
})();
