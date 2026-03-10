/**
 * Data Layer module - GTM-compatible event tracking
 * Provides a reusable interface for sending analytics events via window.dataLayer
 */

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

/**
 * Initialize window.dataLayer if not already present
 */
export function initDataLayer(): void {
  window.dataLayer = window.dataLayer || [];
}

/**
 * Push a custom event to the data layer
 * @param event - Event name
 * @param data - Additional event data
 */
export function trackEvent(event: string, data: Record<string, unknown> = {}): void {
  initDataLayer();
  window.dataLayer.push({
    event,
    page: window.location.pathname,
    timestamp: new Date().toISOString(),
    ...data,
  });
}

/**
 * Set up automatic tracking for buttons, links and forms
 */
function setupAutoTracking(): void {
  // Track button and link clicks in a single listener
  document.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    const button = target.closest('button');
    if (button) {
      const data: Record<string, unknown> = {
        element_text: button.innerText.trim(),
      };
      if (button.id) data.element_id = button.id;
      if (button.className) data.element_class = button.className;
      trackEvent('button_click', data);
      return;
    }

    const link = target.closest('a');
    if (link) {
      const data: Record<string, unknown> = {
        element_text: link.innerText.trim(),
        href: link.href,
      };
      if (link.id) data.element_id = link.id;
      trackEvent('link_click', data);
    }
  });

  // Track form submissions
  document.addEventListener('submit', (e: SubmitEvent) => {
    const form = e.target as HTMLFormElement;
    const data: Record<string, unknown> = {};
    if (form.id) data.form_id = form.id;
    const name = form.getAttribute('name');
    if (name) data.form_name = name;
    if (form.action) data.form_action = form.action;
    trackEvent('form_submit', data);
  });
}

// Auto-initialize when loaded in the browser
if (typeof window !== 'undefined') {
  initDataLayer();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupAutoTracking);
  } else {
    setupAutoTracking();
  }
}
