declare module '*.mdx' {
  let MDXComponent: (props: unknown) => JSX.Element;
  let headings: Heading[];
  let metadata: Metadata;

  export { MDXComponent as default, metadata, headings };
}
