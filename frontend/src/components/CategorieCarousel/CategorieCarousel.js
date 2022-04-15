import React from 'react';
import Carousel from "react-elastic-carousel";
import { dummyProducts } from '../../statics/dummy-products.js';
import ProductCard from '../ProductCard/ProductCard.jsx';
import Item from "./item.js";
import "./Style.css";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
  ];

const CategorieCarousel = () => {
  return (
  
   
        <>
          
          <div className="App">
            <Carousel breakPoints={breakPoints}>
             {
                 dummyProducts.map((product)=>(
                     <ProductCard key={product.id} product={product} />
                 ))
             }
            </Carousel>
          </div>
        </>
      );
}

export default CategorieCarousel