// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// // import { ProductProvider } from './Context'
// // import Cart from './Cart'
// import Context from './Context'

// function App() {

//   return (
//   //   <ProductProvider>
//   //   <div className="App">
//   //     <h1>Shopping Cart</h1>
//   //     <Cart/>
//   //   </div>
//   // </ProductProvider>
//   <Context></Context>
//   )
// }

// export default App
import React from 'react';
import Context from './Context';
import ProductProvider from './ProductProvider';

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <Context />
      </div>
    </ProductProvider>
  );
}

export default App;

