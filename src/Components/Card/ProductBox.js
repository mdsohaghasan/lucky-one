import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductBox = ({ product, handleclick }) => {
  const { name, img, price, color } = product;

  // console.log(props);
  return (
    <div className='product'>
      <img src={img} alt=""></img>
      <h2>title : {name}</h2>
      <h3>price : {price} </h3>
      <h3>color : {color}</h3>
      <button onClick={() => handleclick(product)}>Add To Cart</button>

    </div>

  );
};




















// const ProductBox = (props) => {
//   // const {handleClick}=props;
//   const {name,price}=props.product
//   console.log(props)

// // 
//   return (

//     <div className="product">


//     <div className='col-md-4 col-sm-12'>
//       <div className="card">
//   <img src="" className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">{props.name}</h5>
//     <p className="card-text">{props.price}</p>
//     <button onClick={props.handleClick} className="btn btn-primary">Add to cart <BsFillCartPlusFill/></button>
//   </div>
// </div>
// </div>
// </div>

//   );
// }

export default ProductBox;