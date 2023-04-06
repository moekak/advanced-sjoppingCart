import React, {useContext} from 'react'
import { ShopContext } from '../../context/ShopCart'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cart.css'

const Cart = () => {
    const { selected, item, cartItem, addToCart, remove} =useContext(ShopContext);
  return (
    <div className="cart-container">
        <div className="cart-details">
            <div className="title">
                <h1>Shopping Cart</h1>
            </div>
            <div className="cartItems">
            <Table striped>
                <thead>
                    <tr>
                        <th>PRODUCTS DETAILS</th>
                        <th>QUANTITY</th>
                        <th>PRICE</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                        {cartItem.map((cartitem) =>{
                            console.log(cartitem.quantity);
                            if(cartitem.quantity !==0){
                                return(
                                    item.map((item) =>{
                                    if(cartitem.id === item.id){
                                        return(
                                            <>
                                            
                                                <tr>
                                                    <td className='cart_img_detail'>
                                                        <img className='cart-img' src={item.img} alt="" />
                                                        <p>{item.title}</p>
                                                    </td>
                                                    <td>
                                                        <div className="form">
                                                            <button onClick={() => addToCart(item.id)}>+</button>
                                                            <input type="text" value={cartitem.quantity} />
                                                            <button onClick={() => remove(item.id)}>-</button>
                                                        </div>
                                                    </td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                
                                            </>
                                           
                                        )
                                    }
                                    
                                    })
                                )
                            }
                         })}
                        
                       
                    
                    
                </tbody>
             </Table>
            
             
            </div>
        </div>
        <div className="summary">

        </div>
    </div>
  )
}

export default Cart