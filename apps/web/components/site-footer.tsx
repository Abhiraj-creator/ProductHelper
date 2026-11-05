import Image from "next/image";
import productHelperLogo from "../../../public/producthelper-logo-mono-light.svg";

export function SiteFooter() {
  return <footer className="shell footer"><Image className="footer-logo" src={productHelperLogo} alt="Product Helper" /><a href="https://github.com/Abhiraj-creator/ProductHelper">Open source on GitHub ↗</a></footer>;
}
