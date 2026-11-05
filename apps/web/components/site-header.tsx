"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import productHelperLogo from "../../../public/producthelper-logo-mono-light.svg";

const navigation = [["Docs", "/docs"], ["Examples", "/examples"], ["Roadmap", "/roadmap"]] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="shell nav"><Link className="brand" href="/" aria-label="Product Helper home"><Image src={productHelperLogo} alt="Product Helper" priority /></Link><button className="menu-button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>Menu</button><nav className={open ? "links open" : "links"} id="site-navigation" aria-label="Main navigation">{navigation.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<a className="github" href="https://github.com/Abhiraj-creator/ProductHelper">GitHub ↗</a><ThemeToggle /></nav></div></header>;
}
