import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Link to={`/products/${product.id}`}>
        <Card.Img variant="top" src={product.image} className="h-100" />
      </Link>
      <Card.Body>
        <Link to={`/products/${product.id}`}>
          <Card.Title className="text-dark">{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} color="rgb(249, 232, 37)" />
        <Card.Text className="h2">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
