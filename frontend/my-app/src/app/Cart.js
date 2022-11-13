import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectToken, selectLogged } from './loginSlice'
import { Link,useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectMyCart, addItemToCart, deleteCart, removeItemFromCart } from './CartSlice'
import { addOrderAsync } from './orderSlice';


const Cart = () => {
  //constants and use selector 

  const notify = () => toast.success("order complete");
  let loggedIn = useSelector(selectLogged);
  const myCart = useSelector(selectMyCart);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const [totall, settotall] = useState(0)

// count total price of the cart
  const sumTotal =() =>{
    let i =0;
    let totprice =0;
    while (i<myCart.length){
      if(myCart[i].total>0){
        totprice +=myCart[i].total;
        i++;
        settotall(totprice)
      }
      else{
        i++;
      }
    }
  
  }
  //update display when sumTotal chanfe and myCart length change
  useEffect(() => {
    sumTotal();
    

  }, [myCart.length,myCart])
  
//Display to user
  return (
// if loggdin = True proceed to following , shorthand if 
    <div align="center">
      {loggedIn &&<div>
      {/* creating a table for the cart display  */}     
      <table style={{border:"1px solid black",fontFamily:"arial",borderCollapse: "collapse",width:"70%",height:"60%",margin:"20px"}}>
  <tr>
    <th>Product </th>
    <th>Price</th>
    <th>Amount</th>
  </tr>
  
  {myCart && myCart.map(prod => (<tr>
    <td>{prod.desc}</td>
    <td>{prod.price} &nbsp;&nbsp; ₪</td>
    <td><Button onClick={() => dispatch(addItemToCart({ _id: prod._id, desc: prod.desc, price: prod.price, amount: 1 ,total: 1}))}> + </Button>
    &nbsp; {prod.amount} &nbsp;
    <Button onClick={() => dispatch(addItemToCart({ _id: prod._id, desc: prod.desc, price: prod.price, amount: -1, total: 1 }))}> - </Button>
    </td>
    <td><Button variant="contained" color="error" onClick={() => dispatch(removeItemFromCart(prod._id))}>Delete &nbsp;&nbsp; <i className="fas fa-trash-can"></i></Button></td>
    </tr> ))}
</table>

<h3 align="center">Total amount:{totall}₪</h3>

      
        <div>
        <Button variant="contained" color="success" onClick={() =>{;notify();dispatch(addOrderAsync({ myCart, token }));dispatch(deleteCart());
        setTimeout(function() {window.location.replace('/home');}, 2000)}}>Make order</Button>
        </div>
        <ToastContainer  position="top-center" autoClose={1000} />
        {/* if no token give a link to log in */}
       
       {!token &&
        <div>You need to <Link to="/login">login</Link> first</div>
      }
      </div>}
    </div>
  )
}

export default Cart