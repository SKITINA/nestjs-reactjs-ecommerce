import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getProductsByCategory, listProducts } from "../features/productSlice";

const CategoryScreen = () => {
  const [seachParams,setSeachParams]=useSearchParams();
  const category=seachParams.get("cat");

  const products = useSelector(state=>state.products)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProductsByCategory(category));
  },[])
  return (
  
    <Container>
      <h1 className='mt-2'>{category}</h1>
      <Row>
        
      </Row>
    </Container>
  )
};

export default CategoryScreen;
