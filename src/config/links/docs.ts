type DocLinks = {
  [section: string]: {
    [topic: string]: string;
  };
};

type BaseLinks = typeof baseLinks;
type Section = keyof typeof baseLinks;

const mozillaDocsBase = "https://developer.mozilla.org/en-US/docs/";
const mozillaDocsJSReference = `${mozillaDocsBase}Web/JavaScript/Reference/`;

const baseLinks = {
  array: `${mozillaDocsJSReference}Global_Objects/Array/`,
  string: `${mozillaDocsJSReference}Global_Objects/String/`,
  operators: `${mozillaDocsJSReference}Operators/`,
  glossary: `${mozillaDocsBase}Glossary/`,
} as const;

const preDocs: DocLinks = {
  array: {
    indexOf: "indexOf",
    map: "map",
  },
  string: {
    indexOf: "indexOf",
  },
  operators: {
    logicalOr: "Logical_OR",
  },
  glossary: {
    falsy: "Falsy",
  },
} as const;

function generateDocLinks(preDocs: DocLinks, baseLinks: BaseLinks): DocLinks {
  const docs: DocLinks = { ...preDocs };

  for (const section in docs) {
    const baseLink = baseLinks[section as Section];

    for (let topic in docs[section]) {
      docs[section][topic] = `${baseLink}${docs[section][topic]}`;
    }
  }

  return docs;
}

export const docs = generateDocLinks(preDocs, baseLinks);
