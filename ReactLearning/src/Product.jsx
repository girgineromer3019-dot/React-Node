import React from "react";

function Product({ name, price }) {
  return (
    <>
      <h2>Product</h2>
      <div>
        <div>Name: {name}</div>
        <div>Price: ${price}</div>
    </div>
    </>
  );
}

export default Product;