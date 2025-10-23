// Debounced auto-scroll guard and precise container scrolling utilities

export function beginAutoScrollGuard(container) {
  if (typeof window === 'undefined' || !container) return;
  window.__menuAutoScrolling = true;

  let debounceTimer;
  const onScroll = () => {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      window.__menuAutoScrolling = false;
      container.removeEventListener('scroll', onScroll);
    }, 180); // clear when scrolling is idle for 180ms
  };

  // ensure any momentum scroll is captured
  container.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

export function scrollHeaderIntoContainer(containerId, headerSelector, behavior = 'smooth') {
  const container = document.getElementById(containerId);
  const header = document.querySelector(headerSelector);
  if (!container || !header) return false;

  const containerTop = container.getBoundingClientRect().top;
  const headerTop = header.getBoundingClientRect().top;
  const offsetTop = headerTop - containerTop + container.scrollTop;
  beginAutoScrollGuard(container);
  container.scrollTo({ top: offsetTop, behavior });
  return true;
}

export function scrollSectionIntoContainer(containerId, slug, behavior = 'smooth') {
  const container = document.getElementById(containerId);
  if (!container) return false;
  // prefer non-sticky sentinel just above the section
  const sentinel = document.querySelector(`#${slug} > [data-sentinel='true']`);
  if (sentinel) {
    const containerTop = container.getBoundingClientRect().top;
    const top = sentinel.getBoundingClientRect().top;
    const offsetTop = top - containerTop + container.scrollTop;
    beginAutoScrollGuard(container);
    container.scrollTo({ top: offsetTop, behavior });
    return true;
  }
  // fallback to header
  return scrollHeaderIntoContainer(containerId, `#${slug} > h2`, behavior);
}


