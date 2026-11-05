import type { MDXComponents } from "mdx/types";
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: ({ children, ...props }) => <div className="code-block"><pre {...props}>{children}</pre><button className="code-copy" type="button" aria-label="Copy code">Copy</button></div>,
  };
}
