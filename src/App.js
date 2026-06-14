import './App.css';
import { useEffect } from 'react';

function App() {
  
    useEffect(() => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'product_view',
        product_name: 'Ford Bronco',
        product_price: '20500',
        currency: 'USD',
      });
    }, []); //Fires based on page load and static products means that update should not happen
  return (
        
    <div className="App">
      <img src= '/ford_bronco.jpeg' alt='Ford Bronco'/>
      <h1 id = 'car'>Ford Bronco</h1>
      <span id= 'car-cost'>$20500</span>
    </div>
  );
}

export default App;

