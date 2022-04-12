import React from "react";
import CategorieCarousel from "../CategorieCarousel";

const ProductByCategories = () => {
  const categories = ["accessoires"];
  return (
    <div>
      {categories.map((categorie) => (
        <CategorieCarousel key={categorie} />
      ))}
    </div>
  );
};

export default ProductByCategories;
