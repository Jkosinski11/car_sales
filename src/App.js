import './App.css';
import { useEffect } from 'react';
import fordBronco from './ford_bronco.jpeg'

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

    const handlePost = async (e) => {
    e.preventDefault();
    const productData = window.dataLayer.find(item => item.event === 'product_view')
    const response = await fetch("https://httpbin.org/post", {
      
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify({
        product_name: productData.product_name,
        product_price: productData.product_price,
        currency : productData.currency
       }),
    });
      const data = await response.json();
      if (response.status === 200) {
        console.log("200 OK — request succeeded:", data.json);
      }
      else if(response.status === 400){
        console.error("400 Bad Request");
      }
      else if(response.status === 404){
        console.error("404 End point does not exist");
      }
      else if (response.status === 500) {
        console.error("500 Internal Server Error");
      } 
      else if (response.status === 503) {
        console.error("503 Service Unavailable");
      }
      else{
        console.error("unhandled beavior");
      }
  }
     
  return (
        
    <div className="App" >
      <img src= {fordBronco} alt='Ford Bronco'/>
      <h1 id = 'car'>Ford Bronco</h1>
      <span id= 'car-cost' style= {{fontSize:'24px'}}>$20500</span>
      <button id="Post_api" style={{ display: 'block', padding: '20px 35px', margin: '10px auto', background: 'red', color: 'white', fontSize: '16px'}} type='button' onClick={handlePost}>Post</button>
    </div>
  );
}

export default App;

