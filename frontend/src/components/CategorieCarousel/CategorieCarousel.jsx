import { dummyProducts } from "../../statics/dummy-products";
import ProductCard from "../ProductCard";

const CategorieCarousel = () => {
  return (
    <div className="d-flex justify-content-between mt-5">
      {dummyProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CategorieCarousel;
