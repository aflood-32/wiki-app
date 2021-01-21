/* eslint-disable @typescript-eslint/ban-types */

export interface IDocument {
  data: object;
  options: object;
  title(str?: string): string;
  pageID(str?: string | number): string;
  wikidata(str?: string | number): string;
  domain(str?: string | number): string;
  namespace(str?: string | number): string;
  language(str?: string): string;
  url(): string | null;
  isRedirect(): boolean;
  redirectTo(): IDocument;
  redirectsTo(): IDocument;
  redirect(): IDocument;
  redirects(): Document;
  isDisambiguation(): boolean;
  isDisambig(): boolean;
  categories(): string[];
  categories(clue: number): string[];
  category(clue: number): string;
  sections(): ISection[];
  sections(clue: number | string): ISection;
  section(clue: number | string): ISection;
  paragraphs(): IParagraph[];
  paragraphs(n: number): IParagraph;
  paragraph(n: number | undefined): IParagraph;
  sentences(): ISentence[];
  sentences(n: number): ISentence;
  sentence(n: number): ISentence;
  images(): IImage[];
  images(clue: number): IImage;
  image(clue: number): IImage;
  links(clue?: string): object[];
  links(clue: number): object;
  link(clue: number): object;
  interwiki(clue?: string): object[];
  interwiki(clue: number): object;
  lists(clue?: string): IList[];
  lists(clue: number): IList;
  tables(clue?: string): ITable[];
  tables(clue: number): ITable;
  table(clue: number): ITable;
  templates(clue?: string): object[];
  templates(clue: number): object;
  references(clue?: string): IReference[];
  references(clue: number): IReference;
  reference(clue: number): IReference;
  citations(clue?: string): IReference[];
  citations(clue: number): IReference;
  citation(clue: number): IReference;
  coordinates(clue?: string): object[];
  coordinates(clue: number): object;
  coordinate(clue: number): object;
  infoboxes(clue: number): IInfobox;
  infobox(clue: number): IInfobox;
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  infoboxes(): IInfobox[];
  text(options?: object): string;
  json(options?: object): object;
  debug(): IDocument;
}

export interface ISection {
  doc: IDocument;
  _title: string;
  data: object;
  depth: number;
  title(): string;
  index(): null | number;
  indentation(): number;
  sentences(): ISentence[];
  sentences(n: number): ISentence;
  paragraphs(): IParagraph[];
  paragraph(n?: number): IParagraph;
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  paragraphs(n: number): IParagraph;
  links(n?: string): object[];
  links(n: number): object;
  tables(): ITable[];
  tables(n: number): ITable;
  templates(clue?: string): object[];
  templates(clue: number): object;
  infoboxes(): IInfobox[];
  infoboxes(clue: number): IInfobox;
  coordinates(): object[];
  coordinates(clue: number): object;
  lists(): IList[];
  lists(clue: number): IList;
  interwiki(): object[];
  interwiki(num: number): object;
  images(): IImage[];
  images(clue: number): IImage;
  references(): IReference[];
  references(clue: number): IReference;
  citations(clue: number): IReference;
  citations(): IReference[];
  remove(): IDocument;
  nextSibling(): ISection | null;
  next(): ISection | null;
  lastSibling(): ISection | null;
  last(): ISection | null;
  previousSibling(): ISection | null;
  previous(): ISection | null;
  children(n?: string): ISection[];
  children(n: number): ISection;
  sections(n?: string): ISection[];
  sections(n: number): ISection;
  parent(): null | ISection;
  text(options?: object): string;
  json(options?: object): object;
}

export interface IInfobox {
  _type: string;
  type(): string;
  template(): string;
  links(n: number): object;
  links(n?: string): object[];
  image(): IImage | null;
  images(): IImage | null;
  get(key: string): object | null;
  keyValue(): object;
  data(): object;
  text(): string;
  json(options?: object): object;
}

export interface ITable {
  data: object;
  links(n: number): object;
  links(n?: string): object[];
  keyValue(options: object): object;
  keyvalue(options: object): object;
  keyval(options: object): object;
  text(): string;
  json(options?: object): object;
}

export interface IReference {
  data: object;
  title(): string;
  links(n: number): object;
  links(n?: string): object[];
  text(): string;
  json(options?: object): object;
}

export interface IParagraph {
  data: object;
  sentences(num: number): ISentence;
  sentences(): ISentence[];
  references(num: number): IReference;
  references(): IReference[];
  citations(num: number): IReference;
  citations(): IReference[];
  lists(num: number): IList;
  lists(): IList[];
  images(num: number): IImage;
  images(): IImage[];
  links(n: number): object;
  links(n?: string): object;
  interwiki(num: number): object;
  interwiki(): object[];
  text(options?: object): string;
  json(options?: object): object;
}

export interface IImage {
  data: object;
  file(): string;
  alt(): string;
  caption(): string;
  links(): object[];
  url(): string;
  src(): string;
  thumbnail(size: number): string;
  thumb(size: number): string;
  format(): string;
  text(): string;
  json(options?: object): object;
}

export interface IList {
  data: object;
  lines(): object;
  links(n: number): object;
  links(n?: string): object;
  interwiki(num: number): object;
  interwiki(): object[];
  text(options?: object): string;
  json(options?: object): object;
}

export interface ISentence {
  data: object;
  links(n: number): object;
  links(n?: string): object;
  interwiki(num: number): object;
  interwiki(): object[];
  bolds(n: number): string;
  bolds(): string[];
  bold(n: number): string;
  bold(): string[];
  italics(n: number): string;
  italics(): string[];
  italic(n: number): string;
  italic(): string[];
  text(str?: string): string;
  plaintext(str?: string): string;
  json(options?: object): object;
}
