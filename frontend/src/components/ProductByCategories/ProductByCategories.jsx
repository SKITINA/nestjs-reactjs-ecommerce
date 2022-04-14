import React from "react";
import CategorieCarousel from "../CategorieCarousel";

const ProductByCategories = () => {
  const categories = ["accesory"];
  return (
    <div>
      {categories.map((categorie) => (
        <CategorieCarousel key={categorie} />
      ))}
    </div>
  );
};

export default ProductByCategories;
