import { docsAdapter } from '@/lib/docs-adapter';

import { Article } from './views/Article';
import { Navigation } from '../components/Navigation';

import { Sidebar } from '../components';

type Props = {
  params: {
    slug: string[];
  };
};

export async function generateStaticParams() {
  return [...docsAdapter.routes.keys()];
}

export async function generateMetadata({ params }: Props) {
  const { metadata } = await import(`src/docs/${params.slug.join('/')}.mdx`);
  return metadata;
}

export default async function Post({ params }: Props) {
  const navigation = await docsAdapter.initialize();

  const { default: MDXContent, headings } = await docsAdapter.importMDX(
    params.slug.join('/')
  );

  return (
    <>
      <main className="py-10 relative md:flex md:py-10 gap-x-6 mx-auto md:flex-row max-w-screen-xl px-4 md:px-0">
        <Sidebar>
          <Navigation navigation={navigation[params.slug[0]]} />
        </Sidebar>
        <Article headings={headings}>
          <MDXContent />
        </Article>
      </main>
    </>
  );
}
