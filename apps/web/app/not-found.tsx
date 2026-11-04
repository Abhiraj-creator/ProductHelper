import Link from "next/link";

export default function NotFound() {
  return <section className="shell page"><p className="eyebrow">404</p><h1>That page is not in this plan.</h1><Link className="button" href="/">Return home</Link></section>;
}
