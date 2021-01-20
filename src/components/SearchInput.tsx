import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ReactComponent as MicroIcon } from "../assets/icons/radio-microphone.svg";
import { ReactComponent as KeyboardIcon } from "../assets/icons/keyboard.svg";
import { searchArticlesRequest } from "../store/MainPage";
import { IArticle } from "../common/interfaces";
import { TRootState } from "../store/rootReducer";

const SearchInput: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const articles = useSelector((state: TRootState) => state.mainPage.articles);
  const loading = useSelector((state: TRootState) => state.mainPage.loading);
  const [term, setTerm] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setTerm(value);
    dispatch(searchArticlesRequest(term.trim().toLowerCase()));
  };

  const formatTitle = (title: string): string => {
    return title.split(" ").join("_");
  };

  return (
    <div className="search__block">
      <div className="search__header">
        <div className="search__lang-toggler">english</div>
      </div>
      <div className="search__holder">
        <div className="search__input-holder">
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            placeholder="Search"
          />
          <div className="search__btns">
            <button className="btn btn_icon" type="button">
              <MicroIcon fill="#999999" />
            </button>
            <button className="btn btn_icon" type="button">
              <KeyboardIcon fill="#999999" />
            </button>
          </div>
        </div>
        <div
          className={
            term.length > 0 ? "search__content active" : "search__content"
          }
        >
          <ul>
            {loading ? (
              <li>
                <span>loading</span>
              </li>
            ) : articles.length > 0 ? (
              articles.map((item: IArticle) => (
                <li key={item.pageid}>
                  <button
                    type="button"
                    onClick={() =>
                      history.push(`/article/${formatTitle(item.title)}`)
                    }
                  >
                    <img
                      src={
                        item.thumbnail
                          ? item.thumbnail.source
                          : "https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg"
                      }
                      alt={`search_${item.pageid}`}
                    />
                    <p>
                      {item.title}
                      <span>{item.terms?.description.join(" ")}</span>
                    </p>
                  </button>
                </li>
              ))
            ) : (
              <li>
                <span>Not found</span>
              </li>
            )}
          </ul>
        </div>
      </div>
      <p className="main-page-text">Type what you are looking for...</p>
    </div>
  );
};

export default SearchInput;
