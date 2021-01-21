const key = "wiki_history";
export const limit = 4;

export const getLocalHistory = (): Array<string> => {
  const history = localStorage.getItem(key);
  return history ? JSON.parse(<string>localStorage.getItem(key)) : [];
};

export const saveLocalHistory = (title: string): void => {
  const history = getLocalHistory();
  if (!history.length) {
    localStorage.setItem(key, JSON.stringify([title]));
  } else if (history.length >= limit) {
    localStorage.setItem(key, JSON.stringify([title, ...history.slice(0, 5)]));
  } else {
    localStorage.setItem(key, JSON.stringify([title, ...history]));
  }
};
