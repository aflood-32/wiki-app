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

export interface IImage {
  file: string;
  url: string;
  caption: string;
  thumb: string;
}
