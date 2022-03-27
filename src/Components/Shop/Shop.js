import React from "react";
import ProductBox from '../Card/ProductBox';
import CartArea from '../CartArea/CartArea';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Shop.css';


const Shop = () => {

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  // const [items,setItems]=useState([]);
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  const handleclick = (product) => {
    console.log(product);
    const newCart = [...carts, product];
    setCarts(newCart)
  }

  return (
    <div className="shop-container">
      <div className="products-container">
        {
          products.map(product => <ProductBox
            key={product.id}
            product={product}
            handleclick={handleclick}
          ></ProductBox>)
        }
      </div>

      {/* ------CART CONTAINER START-------  */}

      {/* <div className="cart-container">
        <CartArea carts={carts}></CartArea>
      </div> */}

      {/* ----------------------------------------- */}
      <div className="cartContainer">
        {
          carts.map(cart => <CartArea
            cart={cart}
            key={cart.id}
            handleclick={handleclick}
          ></CartArea>)
        }
      </div>

    </div>

  )

};





















// // function App() {
// //   const [products,setProducts]=useState([]);

// //   useEffect(()=>{
// //     fetch("products.json")
// //     .then(res=> res.json())
// //     .then(data=> console.log(data))
// //   },[])


//   // const handleClick=(props) =>{
//   //       console.log('first')
//   //   }
//   return (
//     <div className="App">
//       {/* {
// products.map(product=> <ProductBox key={ProductBox.id} name={product.CycleName} price={product.price}></ProductBox> )
//         // products.map(product=> <ProductBox key={ProductBox.id} product={product} handleClick={handleClick}></ProductBox> )
//       } */}

//       {/* <ProductBox></ProductBox> */}
//        {/* <Navbar></Navbar>  */}



//     </div>
//   );
// }

export default Shop;
