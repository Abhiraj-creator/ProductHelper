"use client";

import { useEffect } from "react";

export function CopyCodeController() {
  useEffect(() => {
    const copy = async (event: MouseEvent) => {
      const button = (event.target as Element).closest<HTMLButtonElement>(".code-copy");
      if (!button) return;
      const text = button.closest(".code-block")?.querySelector("pre")?.innerText;
      if (!text) return;
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = "Copied";
        button.setAttribute("aria-label", "Code copied");
        window.setTimeout(() => {
          button.textContent = "Copy";
          button.setAttribute("aria-label", "Copy code");
        }, 1600);
      } catch {
        button.textContent = "Copy failed";
      }
    };
    document.addEventListener("click", copy);
    return () => document.removeEventListener("click", copy);
  }, []);
  return null;
}
