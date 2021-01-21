/* eslint-disable @typescript-eslint/ban-types */

export interface IDocument {
  data: object;
  options: object;
  title: string;
  pageID: string;
  wikidata: string;
  domain: string;
  namespace: string;
  language: string;
  url: string | null;
  isRedirect: boolean;
  redirectTo: IDocument;
  redirectsTo: IDocument;
  redirect: IDocument;
  redirects: Document;
  isDisambiguation: boolean;
  isDisambig: boolean;
  categories: string[];
  category: string;
  sections: ISection[];
  section: ISection;
  paragraphs: IParagraph[];
  paragraph: IParagraph;
  sentences: ISentence[];
  sentence: ISentence;
  images: IImage[];
  image: IImage;
  links: object[];
  link: object;
  interwiki: object[];
  lists: IList[];
  tables: ITable[];
  table: ITable;
  templates: object[];
  references: IReference[];
  reference: IReference;
  citations: IReference[];
  citation: IReference;
  coordinates: object[];
  coordinate: object;
  infobox: IInfobox;
  infoboxes: IInfobox[];
  text: string;
  json: object;
  debug: IDocument;
}

export interface ISection {
  doc: IDocument;
  _title: string;
  data: object;
  depth: number;
  title: string;
  index: null | number;
  indentation: number;
  sentences: ISentence | ISentence[];
  paragraphs: IParagraph[];
  paragraph: IParagraph;
  links: object | object[];
  tables: ITable | ITable[];
  templates: object | object[];
  infoboxes: IInfobox | IInfobox[];
  coordinates: object | object[];
  lists: IList | IList[];
  interwiki: object | object[];
  images: IImage[];
  references: IReference | IReference[];
  citations: IReference | IReference[];
  remove: IDocument;
  nextSibling: ISection | null;
  next: ISection | null;
  lastSibling: ISection | null;
  last: ISection | null;
  previousSibling: ISection | null;
  previous: ISection | null;
  children: ISection | ISection[];
  sections: ISection | ISection[];
  parent: null | ISection;
  text: string;
  json: object;
}

export interface IInfobox {
  _type: string;
  type: string;
  template: string;
  links: object | object[];
  image: IImage | null;
  images: IImage | null;
  get: object | null;
  keyValue: object;
  data: object;
  text: string;
  json: object;
}

export interface ITable {
  data: object;
  links: object | object[];
  keyValue: object;
  keyvalue: object;
  keyval: object;
  text: string;
  json: object;
}

export interface IReference {
  data: object;
  title: string;
  links: object | object[];
  text: string;
  json: object;
}

export interface IParagraph {
  data: object;
  sentences: ISentence[];
  references: IReference | IReference[];
  citations: IReference | IReference[];
  lists: IList | IList[];
  images: IImage | IImage[];
  links: object;
  interwiki: object | object[];
  text: string;
  json: object;
}

export interface IImage {
  data: object;
  file: string;
  alt: string;
  caption: string;
  links: object[];
  url: string;
  src: string;
  thumbnail: string;
  thumb: string;
  format: string;
  text: string;
  json: object;
}

export interface IList {
  data: object;
  lines: object;
  links: object;
  interwiki: object | object[];
  text: string;
  json: object;
}

export interface ISentence {
  data: object;
  links: object;
  interwiki: object | object[];
  bolds: string | string[];
  bold: string | string[];
  italics: string | string[];
  italic: string | string[];
  text: string;
  plaintext: string;
  json: object;
}
