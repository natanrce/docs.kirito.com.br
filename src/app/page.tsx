import { docsAdapter } from '@/lib/docs-adapter';

import { Article } from './[...slug]/views/Article';
import { Navigation } from './components/Navigation';

import MDXContent, { metadata, headings } from '@/docs/index.mdx';
import { Sidebar } from './components';

export { metadata };

export default async function Post() {
  const navigation = await docsAdapter.initialize();

  return (
    <>
      <main className="py-10 relative md:flex md:py-10 gap-x-6 mx-auto md:flex-row max-w-screen-xl px-4 md:px-0">
        <Sidebar>
          <Navigation navigation={navigation['mobile']} />
        </Sidebar>
        <Article headings={headings}>
          <MDXContent />
        </Article>
      </main>
    </>
  );
}
