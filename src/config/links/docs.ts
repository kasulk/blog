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
  math: `${mozillaDocsJSReference}Global_Objects/Math/`,
  number: `${mozillaDocsJSReference}Global_Objects/Number/`,
  object: `${mozillaDocsJSReference}Global_Objects/Object/`,
  set: `${mozillaDocsJSReference}Global_Objects/Set/`,
  string: `${mozillaDocsJSReference}Global_Objects/String/`,
  operators: `${mozillaDocsJSReference}Operators/`,
  statements: `${mozillaDocsJSReference}Statements/`,
  glossary: `${mozillaDocsBase}Glossary/`,
  guide: `${mozillaDocsBase}Web/JavaScript/Guide/`,
  other: `${mozillaDocsJSReference}Global_Objects/`,
} as const;

const preDocs: DocLinks = {
  array: {
    array: "Array", // Array Constructor
    concat: "concat",
    every: "every",
    fill: "fill",
    filter: "filter",
    find: "find",
    findIndex: "findIndex",
    findLast: "findLast",
    findLastIndex: "findLastIndex",
    flat: "flat",
    flatMap: "flatMap",
    forEach: "forEach",
    includes: "includes",
    indexOf: "indexOf",
    join: "join",
    lastIndexOf: "lastIndexOf",
    map: "map",
    mapNumber: "map#using_parseint_with_map",
    pop: "pop",
    push: "push",
    reduce: "reduce",
    reverse: "reverse",
    shift: "shift",
    slice: "slice",
    some: "some",
    sort: "sort",
    splice: "splice",
    toLocaleString: "toLocaleString",
    unshift: "unshift",
  },
  math: {
    abs: "abs",
    ceil: "ceil",
    cos: "cos",
    floor: "floor",
    max: "max",
    min: "min",
    pow: "pow",
    random: "random",
    round: "round",
    sin: "sin",
    sqrt: "sqrt",
    tan: "tan",
    trunc: "trunc",
  },
  number: {
    number: "Number", // Number Constructor
    isFinite: "isFinite",
    isInteger: "isInteger",
    isNaN: "isNaN",
    isSafeInteger: "isSafeInteger",
    parseFloat: "parseFloat",
    parseInt: "parseInt",
    toFixed: "toFixed",
    toLocaleString: "toLocaleString",
    toPrecision: "toPrecision",
    toString: "toString",
  },
  object: {
    entries: "entries",
    fromEntries: "fromEntries",
    hasOwn: "hasOwn",
    keys: "keys",
    toString: "toString",
    values: "values",
  },
  set: {
    set: "Set", // Set Constructor
    entries: "entries",
    has: "has",
    keys: "keys",
    size: "size",
    values: "values",
  },
  string: {
    string: "String", // String Constructor
    charAt: "charAt",
    charCodeAt: "charCodeAt",
    concat: "concat",
    endsWith: "endsWith",
    includes: "includes",
    indexOf: "indexOf",
    lastIndexOf: "lastIndexOf",
    localeCompare: "localeCompare",
    match: "match",
    matchAll: "matchAll",
    padEnd: "padEnd",
    padStart: "padStart",
    repeat: "repeat",
    replace: "replace",
    replaceAll: "replaceAll",
    search: "search",
    slice: "slice",
    splice: "splice",
    split: "split",
    startsWith: "startWith",
    substring: "substring",
    toLocaleLowerCase: "toLocaleLowerCase",
    toLocaleUpperCase: "toLocaleUpperCase",
    toLowerCase: "toLowerCase",
    toUpperCase: "toUpperCase",
    trim: "trim",
    trimEnd: "trimEnd",
    trimStart: "trimStart",
  },
  operators: {
    deconstruct: "Destructuring_assignment",
    delete: "delete",
    logicalAnd: "Logical_AND",
    logicalOr: "Logical_OR",
    nullish: "Nullish_coalescing",
    optionalChaining: "Optional_chaining",
    remainder: "remainder",
    spread: "Spread_syntax",
    ternary: "Conditional_operator",
  },
  statements: {
    break: "break",
    continue: "continue",
    for: "for",
    forIn: "for...in",
    forOf: "for...of",
    ifElse: "if...else",
    label: "label",
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
    string: "String", // String-Home
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
