import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getProductsByCategory } from "../features/productSlice";
import ProductCard from "../components/ProductCard";

const CategoryScreen = () => {
  const [seachParams, setSeachParams] = useSearchParams();
  const category = seachParams.get("cat");

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsByCategory(category));
  }, []);
  return (
    <Container>
      <h1 className="mt-2">{category}</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryScreen;
