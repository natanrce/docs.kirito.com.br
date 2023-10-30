import { visit } from 'unist-util-visit';
import { valueToEstree } from 'estree-util-value-to-estree';

export default function rehypeToc() {
  return (ast) => {
    const headings = [];

    visit(ast, 'element', (node) => {
      if (node.tagName && node.tagName.match(/^h[1-3]$/)) {
        headings.push({
          id: node.properties.id,
          title: node.children[0].value,
          level: parseInt(node.tagName.slice(1))
        });
      }
    });

    ast.children.unshift({
      type: 'mdxjsEsm',
      value: '',
      data: {
        estree: {
          type: 'Program',
          sourceType: 'module',
          body: [
            {
              type: 'ExportNamedDeclaration',
              specifiers: [],
              declaration: {
                type: 'VariableDeclaration',
                kind: 'const',
                declarations: [
                  {
                    type: 'VariableDeclarator',
                    id: { type: 'Identifier', name: 'headings' },
                    init: valueToEstree(headings)
                  }
                ]
              }
            }
          ]
        }
      }
    });
  };
}
