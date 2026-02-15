import React from "react";
import './App.css';
import Product from './Product';

function App() {
  return (
    <div>
      <Product name="T-shirt" price={20} />
      <Product name="Jeans" price={40} />
      <Product name="Sneakers" price={60} />
    </div>
  );
}

export default App;
