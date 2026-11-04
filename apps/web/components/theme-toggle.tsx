"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const enabled = localStorage.getItem("theme") === "dark";
    setDark(enabled);
    document.documentElement.dataset.theme = enabled ? "dark" : "light";
  }, []);
  function toggle() {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.dataset.theme = next ? "dark" : "light";
  }
  return <button className="theme-toggle" type="button" onClick={toggle} aria-label={dark ? "Use light theme" : "Use dark theme"}>{dark ? "Light" : "Dark"}</button>;
}
