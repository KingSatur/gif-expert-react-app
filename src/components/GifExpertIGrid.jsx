import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
import PropTypes from "prop-types";

export const GifExpertGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h1>{category}</h1>
      {isLoading && <h2>Loading...</h2>}
      <div className="card-grid">
        {images?.map((image) => {
          return <GifGridItem key={image?.id} {...image} />;
        })}
      </div>
    </>
  );
};

GifExpertGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
