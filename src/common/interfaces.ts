export interface IArticle {
  ns: number;
  pageid: number;
  terms: {
    description: Array<string>;
  };
  thumbnail: {
    height: number;
    source: string;
    width: number;
  };
  title: string;
}
