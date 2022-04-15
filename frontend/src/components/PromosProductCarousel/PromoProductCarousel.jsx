import { Carousel } from "react-bootstrap";
import { dummyProducts } from "../../statics/dummy-products";
import * as S from "./PromoProductCarousel.styles";

const PromoProductCarousel = () => {
  return (
    // binaha treturn lina carousel dyal les produit 
    <Carousel className="mt-4 bg-dark">
{/* hna darna dak array lifih product idir lina wahd array jadid ach kaydir ha likaydir  */}
      {dummyProducts.map((product) => (
        <Carousel.Item key={product.id}>
          <Carousel.Caption>
            <h3>{product.brand}</h3>
          </Carousel.Caption>
          <S.Image className="d-block" src={product.image} promo="-27%" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PromoProductCarousel;
