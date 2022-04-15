import React from "react";
import CategorieCarousel from "../CategorieCarousel/CategorieCarousel";


const ProductByCategories = () => {
  const categories = ["accesory"];
  return (
    <div>
    <div>
      {categories.map((categorie) => (
        <CategorieCarousel key={categorie} />
      ))}
    </div>
  );
    </div>
  );
};

export default ProductByCategories;
