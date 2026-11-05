import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { CopyCodeController } from "./copy-code-controller";

export function SiteFrame({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><SiteHeader /><CopyCodeController /><main>{children}</main><SiteFooter /></>;
}
