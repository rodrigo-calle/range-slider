import { useState } from 'react';
import './App.css';

function App() {
  const [price, setPrice] = useState(0.0)

  const formatingPrice = () => {
    if(price.toString().includes('.')){
      return price
    }
    else{
      return `${price}.00`
    }
  }

  return (
    <div className="wrapper">
    <div className="amount">
      <sup>$</sup>
      <span className="dollars">{formatingPrice()}</span>
    </div>
    <input value={price} type="range" id="priceRange" min="0.0" max="100" step="0.01" onChange={(e)=> setPrice(e.target.value)} />
    <br />
    <button>Buy Now</button>
    <script src="app.js"></script>
  </div>
  );
}

export default App;
