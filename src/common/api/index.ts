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

export const fetchArticleRequest = async (title: string) => {
  try {
    // const res = await fetch(
    //   `${BASE_API_PATH}?origin=*&action=parse&page=${title}&prop=wikitext&formatversion=2&format=json`
    // );
    // const data = await res.json();
    // console.log(data);
    // return data.parse;
    const res = await wtf.fetch(title, "en");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const data = await res.json();

    const images = await wtf(title).images(0);
    console.log(images);

    return data;
  } catch (e) {
    console.error("error", e);
    return e;
  }
};
