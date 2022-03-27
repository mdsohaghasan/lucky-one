import React from "react";
import './CartArea.css';

const CartArea = (props) => {
    const { name, img } = props.cart;
    const addToCart = () => {
    }

    return (
        <div className='cart-section'>
            <h1>Add to cart successful</h1>
            <img src={img} alt=""></img>
            <h3>{name}</h3>
            <button onClick={addToCart} className="trashButton">trash</button>
        </div>
    )
}

// ------------------------
// const CartArea = ({ carts }) => {
//     let total = 0;
//     for (const product of carts) {
//         total = total + product.price;
//     }

//     return (
//         <div>
//             <h2>Order summery</h2>
//             <h3>Cart Details :  {carts.length} </h3>
//             <h4>total price : ${total}</h4>
//         </div>
//     )
// };


export default CartArea;



















