import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <LazyLoadImage
    alt={alt}
    effect="blur"
    src={src}
    wrapperClassName="lazy-holder"
  />
);

export default LazyImage;
