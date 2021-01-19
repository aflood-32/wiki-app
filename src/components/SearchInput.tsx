import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as MicroIcon } from '../assets/icons/radio-microphone.svg';
import { ReactComponent as KeyboardIcon } from '../assets/icons/keyboard.svg';
import { debounce } from '../common/utils/helpers';
import { searchArticlesRequest } from '../store/MainPage';
import { IArticle } from '../common/interfaces';

const SearchInput = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state: any) => state.mainPage.articles);
  const loading = useSelector((state: any) => state.mainPage.loading);
  const [term, setTerm] = useState<string>('');

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTerm(value);
    dispatch(searchArticlesRequest(term));
    debounce(() => {
    }, 500);
  };

  const navigateTo = (path: string) => {
    console.log(path);
  };

  return (
    <div className="search__block">
      <div className="search__header">
        <div className="search__lang-toggler">
          english
        </div>
      </div>
      <div className="search__holder">
        <div className="search__input-holder">
          <input type="text" onChange={(e) => handleChange(e)} placeholder="Search" />
          <div className="search__btns">
            <button className="btn btn_icon" type="button"><MicroIcon fill="#999999" /></button>
            <button className="btn btn_icon" type="button"><KeyboardIcon fill="#999999" /></button>
          </div>
        </div>
        <div className={term.length > 0 ? 'search__content active' : 'search__content'}>
          <ul>
            {
              // eslint-disable-next-line no-nested-ternary
              loading ? <li><span>loading</span></li> : articles.length > 0 ? articles.map((item: IArticle) => (
                <li key={item.pageid}>
                  <button type="button" onClick={() => navigateTo(item.title)}>{item.title}</button>
                </li>
              ))
                : <li><span>Not found</span></li>
            }
          </ul>
        </div>
      </div>
      <p className="main-page-text">Type what you are looking for...</p>
    </div>
  );
};

export default SearchInput;
