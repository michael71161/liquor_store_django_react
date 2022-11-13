import React, { useEffect, useState } from "react";
import { getProductsAsync, selectProducts} from './productSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from './loginSlice';
import { selectToken } from './loginSlice';
import Button from '@mui/material/Button';
import {Card} from "react-bootstrap";
import { selectLogged } from './loginSlice'
import { Link, useParams } from 'react-router-dom';
import { sendCart,clearAr } from "./CartSlice";
import {addItemToCart,selectMyCart } from "./CartSlice";


//Display of all products with cards


const Products = () => {
  let params = useParams();
  let id = params.id;
  let loggedIn = useSelector(selectLogged);
  const products = useSelector(selectProducts);
  const userName = useSelector(selectUserName);
  const myCart = useSelector(selectMyCart);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  // const amount = useSelector(selectamount);
  //run every change in the length of myCart

  useEffect(() => {
    dispatch(getProductsAsync(token));
  }, []);

  useEffect(() => {
  }, [myCart.length, ])


  return (
    // if there is something in the cart display a link to cart with a massage , next div is our card for products display
    <div className="container">
      {myCart.length>0 && <h5> <i>You have items in your cart ,go to cart to see them  &nbsp;&nbsp;</i> <Link to="/cart"> <i className="fas fa-cart-shopping"></i>Cart</Link></h5>}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-2">
       {!loggedIn && <div  style={{margin:"50px"}}align="center">Please <Link to="/login">log in</Link> to purchase items</div>}
       <br></br>

       {loggedIn && products.map( prod=> <div>{" "}
       <Card style={{ width:'20rem'}}>
      <Card.Img  width="310px" height="370px" variant="top" src={`http://127.0.0.1:8000/media/${prod.image}`} />
        <Card.Body>
          <Card.Title><h5>{prod.desc}</h5> </Card.Title>
          <Card.Text >
          <h3><i>{prod.price}₪</i></h3>        
          </Card.Text>
          <Card.Text >
          </Card.Text>
        </Card.Body>
        <Button variant="contained"  onClick={() => dispatch(addItemToCart({ _id: prod.id, desc: prod.desc, amount: 1,price:prod.price,total: prod.price }))}>
        Add to Cart &nbsp;&nbsp; <i className="fas fa-cart-plus"></i>
        </Button>  
        </Card>
        </div>)}
    </div>
     </div>
  )
}

export default Products
