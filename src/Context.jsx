import React, { useContext, useState } from 'react';
import ProductContext from './ProductContext';
import Select from 'react-select';
import './Context.css'

function Context() {
  const productsData = useContext(ProductContext);
  const [products, setProducts] = useState(productsData.map(product => ({
    ...product,
    selectedQuantity: 1, // Initialize selected quantity for each product
  })));

  const optionList = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" }
  ];
// dropdown select function
  function handleSelect(data, productIndex) {
    const selectedQuantity = data.value;

    if (selectedQuantity >= 5) {
      alert("You have reached your maximum limit to order !!! Please contact our customer care to order more..");
    } else {
      const updatedProducts = [...products];
      updatedProducts[productIndex].selectedQuantity = selectedQuantity;
      setProducts(updatedProducts);
    }
  }

  function handleRemove(productIndex) {
    const updatedProducts = products.map((product, index) => {
      if (index === productIndex) {
        return {
          ...product,
          selectedQuantity: 1, // Reset selected quantity to its initial state
        };
      }
      return product;
    });

    setProducts(updatedProducts);
  }
  

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
  <div className="container">
    <h1 className='mx-auto'><i class="bi bi-cart4"></i>shopee....</h1>
  </div>
</nav>
      {products.map((product, index) => (
        <div key={index}>
          <div className='container m-5 d-flex justify-content-center'>
          <div className="card mb-3 d-flex flex-wrap justify-content-center mt-5" style={{maxWidth:"1000px"}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={product.thumbnail} className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <br />
                  <b> <p>Price:$ {product.price}</p></b>
                </div>
              </div>
              <div className="col-md-2 mt-3 pe-2">
                <span className="dropdown-container">
                  <Select
                    options={optionList}
                    value={optionList.find(option => option.value === product.selectedQuantity)}
                    onChange={(data) => handleSelect(data, index)}
                    isSearchable={true}
                  />
                  <br />
                  <h5>Total Price: $ <b>{product.selectedQuantity * product.price}</b></h5>
                  <button type="button" className="btn btn-primary btn-sm my-2" onClick={() => handleRemove(index)}>Remove</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
}

export default Context;
