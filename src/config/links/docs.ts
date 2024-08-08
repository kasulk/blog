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
  number: `${mozillaDocsJSReference}Global_Objects/Number/`,
  object: `${mozillaDocsJSReference}Global_Objects/Object/`,
  set: `${mozillaDocsJSReference}Global_Objects/Set/`,
  string: `${mozillaDocsJSReference}Global_Objects/String/`,
  operators: `${mozillaDocsJSReference}Operators/`,
  statements: `${mozillaDocsJSReference}Statements/`,
  glossary: `${mozillaDocsBase}Glossary/`,
  guide: `${mozillaDocsBase}JavaScript/Guide/`,
  other: `${mozillaDocsJSReference}Global_Objects/`,
} as const;

const preDocs: DocLinks = {
  array: {
    array: "Array", // Array Constructor
    fill: "fill",
    indexOf: "indexOf",
    join: "join",
    map: "map",
    mapNumber: "map#using_parseint_with_map",
    reduce: "reduce",
    shift: "shift",
    slice: "slice",
    sort: "sort",
    splice: "splice",
  },
  number: {
    number: "Number", // Number Constructor
    toString: "toString",
  },
  object: {
    entries: "entries",
  },
  set: {},
  string: {
    indexOf: "indexOf",
    lastIndexOf: "lastIndexOf",
    localeCompare: "localeCompare",
    padEnd: "padEnd",
    padStart: "padStart",
    replace: "replace",
    replaceAll: "replaceAll",
    reverse: "reverse",
    slice: "slice",
    splice: "splice",
    split: "split",
  },
  operators: {
    deconstruct: "Destructuring_assignment",
    logicalOr: "Logical_OR",
    spread: "Spread_syntax",
    ternary: "Conditional_operator",
  },
  statements: {
    break: "break",
    continue: "continue",
    for: "for",
    forIn: "for...in",
    forOf: "for...of",
    return: "return",
    switch: "switch",
    var: "var",
    while: "while",
  },
  glossary: {
    falsy: "Falsy",
  },
  guide: {
    regex: "Regular_Expressions",
  },
  other: {
    array: "Array", // Array-Home
    eval: "eval",
    number: "Number", // Number-Home
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
