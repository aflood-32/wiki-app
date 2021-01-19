const BASE_API_PATH = 'https://en.wikipedia.org/w/api.php';


export const searchRequest = async (term: string) => {
  try {
    const res = await fetch(`${BASE_API_PATH}?origin=*&action=query&list=search&srsearch=${term}&format=json`);
    const data = await res.json();
    console.log(data);
    return data.query ? data.query.search : [];
  } catch (e) {
    console.error('error', e);
    return e;
  }
};

export const getArticleRequest = async (title: string = 'Pet_door') => {
  try {
    const res = await fetch(`${BASE_API_PATH}?origin=*&action=parse&page=${title}&prop=text&formatversion=2&format=json`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (e) {
    console.error('error', e);
    return e;
  }
};

getArticleRequest();
