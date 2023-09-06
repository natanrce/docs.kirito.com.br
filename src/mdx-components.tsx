import type { MDXComponents } from 'mdx/types';
import { Anchor, Fence } from './app/components';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children }) => <Anchor href={href}>{children}</Anchor>,
    code: (props) => <Fence {...props} />,
    ...components
  };
}
