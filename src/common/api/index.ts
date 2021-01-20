import wtf from "wtf_wikipedia";
import { IArticle } from "../interfaces";

const BASE_API_PATH = "https://en.wikipedia.org/w/api.php";

export const searchRequest = async (term: string): Promise<IArticle[] | []> => {
  try {
    const res = await fetch(
      // eslint-disable-next-line max-len
      `${BASE_API_PATH}?origin=*&action=query&format=json&prop=pageimages%7Cpageterms&generator=prefixsearch&formatversion=2&piprop=thumbnail&pithumbsize=150&pilimit=10&wbptterms=description&gpssearch=${term}`
    );
    const data = await res.json();
    return data.query ? data.query.pages : [];
  } catch (e) {
    return e;
  }
};

export const fetchArticleRequest = async (
  title: string
  // TODO ASK COMRAD MENTOR ABOUT THIS MOMENT
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
): Promise<wtf.Document.json> => {
  try {
    const res: wtf.Document | null = await wtf.fetch(title, "en");
    if (res !== null) {
      return res.json();
    }
    throw new Error("Error");
  } catch (e) {
    return e;
  }
};
