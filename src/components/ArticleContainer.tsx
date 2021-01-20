import React, { memo, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getArticleRequest,
  getArticleReset,
  handleGalleryMode,
} from "../store/ArticlePage";
import PageLoader from "../common/PageLoader";
import ArticleGallery from "./ArticleGallery";
import { TRootState } from "../store/rootReducer";
import { IImage } from "../common/interfaces";

const ArticleContainer: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams<{ title: string }>();
  const loading = useSelector((state: TRootState) => state.articlePage.loading);
  const content = useSelector((state: TRootState) => state.articlePage.article);
  const galleryIdx = useSelector(
    (state: TRootState) => state.articlePage.galleryIdx
  );
  const BASE_WIKI_URL = "https://en.wikipedia.org/wiki";
  const ref = useRef<HTMLButtonElement>(document.createElement("button"));

  useEffect(() => {
    dispatch(getArticleRequest(params.title));
    return () => {
      dispatch(getArticleReset());
    };
  }, [dispatch, params.title]);

  const getTextContent = (sentence: any) => {
    return (
      <p key={`${sentence.text.split(" ")[0]}_${Math.random()}`}>
        {sentence.text}
      </p>
    );
  };

  useEffect(() => {
    if (content.title) {
      document.title = `${content.title} - Wiki`;
    }
    return () => {
      document.title = "Wiki";
    };
  }, [content.title]);

  const getDepthClass = (depth: number, classPrefix: string): string => {
    switch (depth) {
      case 2:
        return `${classPrefix} ${classPrefix}_deep`;
      case 1:
        return `${classPrefix} ${classPrefix}_sub`;
      default:
        return `${classPrefix}`;
    }
  };

  const checkScrollPosition = (): void => {
    if (window.pageYOffset > window.innerHeight) {
      ref.current.classList.add("active");
    } else {
      ref.current.classList.remove("active");
    }
  };

  const galleryData = useMemo((): IImage[] => {
    return content.sections
      ?.filter((el: any) => el.images)
      .flatMap((el: any) => el.images);
  }, [content.sections]);

  const getImageIndex = (file: string): number => {
    return galleryData.findIndex((image: IImage) => image.file === file);
  };

  useEffect(() => {
    if (ref.current) {
      window.addEventListener("scroll", checkScrollPosition);
    }
    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  if (loading) {
    return <PageLoader />;
  }
  return (
    <>
      <div className="article-block">
        <div className="article-block__row">
          <div className="article-block__col article-block__col_bg">
            <div className="article-block__contents">
              <h3>Contents</h3>
              <ul>
                {content.sections?.slice(1).map((section: any) => {
                  return (
                    <li
                      key={section.title.split(" ").reverse().join("_")}
                      className={getDepthClass(section.depth, "heading-item")}
                    >
                      <a href={`#${section.title}`}>{section.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="article-block__col">
            <article>
              <h1 className="article-block__main-title">{content.title}</h1>
              {content.sections?.map((section: any) => {
                return (
                  <section
                    key={section.title.split(" ").join("_")}
                    className={getDepthClass(
                      section.depth,
                      "article-block__section"
                    )}
                  >
                    <h5 id={section.title}>{section.title}</h5>
                    <div className="article-block__info-block">
                      {section.images &&
                        section.images.map((image: IImage) => (
                          <div className="article-block__image-container">
                            <div
                              onClick={() =>
                                dispatch(
                                  handleGalleryMode(getImageIndex(image.file))
                                )
                              }
                              className="article-block__image-holder"
                            >
                              <img src={image.thumb} alt={image.file} />
                            </div>
                            <p>{image.caption}</p>
                          </div>
                        ))}
                      {section.paragraphs?.map((paragraph: any) => {
                        return paragraph.sentences.map((item: any) =>
                          getTextContent(item)
                        );
                      })}
                    </div>
                  </section>
                );
              })}
            </article>
            <section className="article-block__related">
              <p className="label-title">Categories:</p>
              <div className="article-block__related-holder">
                {content.categories?.map((category: any) => (
                  <a
                    key={category}
                    target="_blank"
                    rel="noopener noreferer"
                    className="common-link"
                    href={`${BASE_WIKI_URL}/Category:${category}`}
                  >
                    {category}
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          type="button"
          ref={ref}
          onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
          className="up-btn"
        />
      </div>
      <ArticleGallery
        images={galleryData}
        active={galleryIdx !== null}
        title={content.title}
      />
    </>
  );
};

export default memo(ArticleContainer);
