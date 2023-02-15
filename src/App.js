import { useEffect, useState } from "react";
import Product from "./product";
import foxImg from "./assets/howling-red-OU2vFQCwCD0-unsplash.jpg"
import { redirect } from "react-router-dom";


function App() {

  const [products,setProducts] = useState([])
  const [payment,setPayment] = useState(false)
  
  useEffect(()=> {
    fetch("/products").then(resp=>resp.json()).then(setProducts)
  },[])


  const productItems = products.map( product => <Product key={product.id} name={product.name} quantity={product.quantity} price = {product.price}/> )

  function stripePayment() {
    fetch("/stripe").then(resp=>resp.json()).then(({url})=>setPayment(url))
    console.log(payment)
  }

  // console.log(payment)


  return (
    <div className="App">
      <nav>
        <div className="left-nav">
          <div className="logo-containter">
            <img width={200} height={200} src="https://www.freepnglogos.com/uploads/fox-head-art-logo-png-13.png"/>
            <h4> Foxy Wildlife Preservation </h4>
          </div>
        </div>
        <div className="right-nav">
          <a href = "#About">About</a>
          <a href = "#People">Who</a>
          <a href = "#Donate">Donate</a>
          <a href = "#Support">Volunteer</a>
        </div>
      </nav>
      <header>
        <div id = "header-image-cover">
          <img src= {foxImg}/>
          <div className="img-text-container">
            <h1>Save the fox</h1>
            <h2>From cruel poachers</h2>
            <div className="img-button-container">
              <button onClick={stripePayment}>Donate</button>
              <button>Support</button>
            </div>
          </div>
        </div>
      </header>
      {
            payment && <a rel="noreferrer" href={payment}>Stripe</a>
          }
      {productItems}
          
    </div>
  );
}

export default App;
