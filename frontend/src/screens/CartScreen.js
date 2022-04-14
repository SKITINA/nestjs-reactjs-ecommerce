import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Form, Image, ListGroup, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams, useSearchParams } from "react-router-dom"
import { addToCart } from "../features/cartSlice"
import {dummyProducts} from '../statics/dummy-products'

const CartScreen = () => {
    const {productId} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const cartItems = useSelector(state=>state.cart.items)
    const qty = parseInt(searchParams.get("qty")) || 1;
    const dispatch = useDispatch();
    useEffect(() => {
      if (productId) {
        dispatch(addToCart({id:parseInt(productId), qty}));
      }
    }, [])
    
    return (
        <Container>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          
            <ListGroup variant='flush'>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.name}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/products/${item.id}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as='select'
                        value={item.qty}
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type='button'
                        variant='light'
                      >
                        <FontAwesomeIcon icon={faTrash}/>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                  items
                </h2>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                >
                  Proceed To Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      </Container>
    )
  }
  
  export default CartScreen