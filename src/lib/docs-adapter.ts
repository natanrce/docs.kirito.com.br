import { promise as globPromise } from 'glob-promise';
import { AVALIABLE_WIKI } from './wiki';
import { notFound } from 'next/navigation';

type NavigationItem = {
  name: string;
  href: string;
};

export interface Heading {
  level: number;
  id: string;
  title: string;
}

export type Navigation = {
  name: string;
  children: NavigationItem[];
};

class DocsAdapter {
  routes = new Map<string, string>();

  async initialize() {
    const pathnames = await this.getStaticMDXPathname();
    return this.transformFiles(pathnames);
  }

  public async importMDX(route: string) {
    try {
      const pathname = this.routes.get(`/${route}`);
      return await import(`src/docs/${pathname}`);
    } catch {
      notFound();
    }
  }

  private transformFiles(pathnames: string[]) {
    const transformedStructure = {};

    Object.values(AVALIABLE_WIKI).forEach((item) => {
      transformedStructure[item.toLowerCase()] = [];
    });

    const capitalize = (str: string) => {
      return str
        .split('-')
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join(' ');
    };

    pathnames.forEach((filePath) => {
      const [category, section, subSection] = filePath
        .split('/')
        .map((item) => item.replace(/\.mdx$/, ''))
        .filter((item) => item !== 'index');

      const route = `/${category}/${section}/${subSection}`;

      const capSection = capitalize(section);
      const capSubSection = capitalize(subSection);

      const sectionIndex = transformedStructure[category]?.findIndex((item) => {
        return item.name === capSection;
      });

      if (!transformedStructure[category][sectionIndex]) {
        transformedStructure[category].push({
          name: capSection,
          children: [
            {
              name: capSubSection,
              href: route
            }
          ]
        });
      } else {
        transformedStructure[category][sectionIndex] = {
          ...transformedStructure[category][sectionIndex],
          children: [
            ...transformedStructure[category][sectionIndex].children,
            {
              name: capSubSection,
              href: route
            }
          ]
        };
      }

      this.routes.set(route, filePath);
    });

    return transformedStructure;
  }

  async getStaticMDXPathname() {
    return await globPromise('**/*.mdx', {
      cwd: './src/docs',
      ignore: ['**/index.mdx']
    });
  }
}

export const docsAdapter = new DocsAdapter();
