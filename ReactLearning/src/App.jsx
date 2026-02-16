import React from "react";
import './App.css';
import Product from './Product';
import { useState } from "react";

function App() {

//useState = bir hooks (verileri yonetmek icin kullanilir.)
const [name, setname] = useState('Omer');
const [name1, setname1] = useState ('Ali');
const [name2, setname2] = useState ('Veli');
const [name3, setname3] = useState ('Ayse');


  return (
    <div>
      {name}
      <hr />
      <button onClick={() => setname('Ahmet')}>Change Name</button>
      <Product name="T-shirt" price={20} />
      <Product name="Jeans" price={40} />
      <Product name="Sneakers" price={60} />
    </div>
  );
}

export default App;
