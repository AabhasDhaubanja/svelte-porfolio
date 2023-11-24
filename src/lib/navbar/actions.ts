export function trapFocus(node: HTMLElement) {
  const elements = node.querySelectorAll<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  );

  const previous = document.activeElement as HTMLElement;

  function focusable() {
    return elements ? Array.from(elements) : [];
  }

  const focusables = focusable();

  const firstElement = focusables.at(0);
  const lastElement = focusables.at(-1);

  firstElement?.focus();

  const closeButton = document.getElementById("navbar-close");

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Tab") {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    }

    if (e.key === "Escape") {
      closeButton?.click();
      previous?.focus();
    }
  }

  node.addEventListener("keydown", handleKeyDown);

  return {
    destroy() {
      node.removeEventListener("keydown", handleKeyDown);
    },
  };
}
