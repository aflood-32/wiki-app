import wtf from "wtf_wikipedia";
import { IArticle } from "../interfaces";

const BASE_API_PATH = "https://en.wikipedia.org/w/api.php";

export const searchRequest = async (term: string): Promise<IArticle[] | []> => {
  const res = await fetch(
    // eslint-disable-next-line max-len
    `${BASE_API_PATH}?origin=*&action=query&format=json&prop=pageimages%7Cpageterms&generator=prefixsearch&formatversion=2&piprop=thumbnail&pithumbsize=150&pilimit=10&wbptterms=description&gpssearch=${term}`
  );
  const data = await res.json();
  return data.query ? data.query.pages : [];
};

export const fetchArticleRequest = async (
  title: string
): Promise<unknown | []> => {
  const res = await wtf.fetch(title, "en");
  if (res !== null) {
    return res.json();
    // throw new Error("Error");
  }
  return [];
  // throw new Error("Error");
};
