import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Image, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating/Rating";

const ProductScreen = () => {
    const [qty, setQty] = useState(1)
  const { productId } = useParams();
  const product = useSelector((state) => state.products.find((product) => product.id === parseInt(productId)));

  return (
    <Container className="mt-5">
      <Link className="btn btn-light my-3" to='/'>Go Back</Link >
      <div className="row gap-5" >
        <div className="col">
          <Image src={product.image} alt={product.name} className="w-100" />
        </div>
        <div className="col row gap-2">
            <div className="col">
                <h1>{product.name}</h1>
                <hr/>
                <Rating rating={product.rating} color="rgb(249,232,37)" />
                <hr />
                <p>Price: ${product.price}</p>
                <hr />
                <p>Description: {product.description}</p>
            </div>
            <div className="col">
            <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item className="d-grid gap-2">
                    <LinkContainer to={`/cart/${productId}?qty=${qty}`}>
                    <Button className="bg-dark"
                      size="lg"
                      type='button'
                      disabled={product.countInStock === 0}
                    >
                      Add To Cart
                    </Button>
                    </LinkContainer>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductScreen;
