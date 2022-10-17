import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import { productData, productData2 } from './Components/Products/data';
import Feature from "./Components/Features";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Frozen Treats' data={productData} />
      <Feature />
      <Products heading='Dehydrated Treats' data={productData2} />
      <Footer />
    </Router>
  );
}

export default App;
