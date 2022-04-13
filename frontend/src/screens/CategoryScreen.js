import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getProductsByCategory } from "../features/productSlice";
import ProductCard from "../components/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const CategoryScreen = () => {
  const [seachParams, setSeachParams] = useSearchParams();
  const category = seachParams.get("cat");

  const products = useSelector((state) => state.products);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsByCategory(category));
  }, []);
  return (
    <Container>
      <h1 className="mt-2">{category}</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <ProductCard product={product} />
            <FontAwesomeIcon icon={faFacebook} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryScreen;
