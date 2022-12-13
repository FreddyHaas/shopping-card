import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Components/ProductPage/Products.js';
import Header from './Components/Header/header.js';
import Checkout from './Components/Checkout/checkout.js';
import Home from './Components/Home/Home.js';

const App = () => {
  const [items, setItems] = useState({});
  const [orderData, setOrderData] = useState({});
  const [totalSpendPerItem, setSpendPerItem] = useState({});
  const [totalPrice, setTotalPrice] = useState((0));
  const [totalQuantity, setTotalQuantity] = useState((0));
  const [popupActive, setPopupActive] = useState((false));

  const addItem = (e) => {
    const { id } = e.target;
    let orderDataTemp = orderData;
    if (orderDataTemp[id] === undefined) {
      orderDataTemp[id] = 0;
    }
    orderDataTemp[id] = orderDataTemp[id] + 1;
    setOrderData({...orderDataTemp});

    _updateTotalQuantity(true);
    _updateTotalPrice(id, true);
    _updateTotalSpendPerItem(id, true);
  } 

  const removeItem = (e) => {
    const { id } = e.target; 
    if (orderData[id] === undefined || orderData[id] === 0) {
      return
    }

    let orderDataTemp = orderData;
    orderDataTemp[id] = orderDataTemp[id] - 1; 
    setOrderData({...orderDataTemp});

    _updateTotalQuantity(false);
    _updateTotalPrice(id, false);
    _updateTotalSpendPerItem(id, false);
  }

  const _updateTotalQuantity = (add = true) => {
    let totalQuantityTemp = totalQuantity;

    if (add === true) {
      totalQuantityTemp += 1;
    } else {
      totalQuantityTemp -= 1;
    }
    
    setTotalQuantity(totalQuantityTemp);
  }

  const _updateTotalPrice = (id, add=true) => {
    let totalPriceTemp = totalPrice;

    if (add === true) {
      totalPriceTemp = totalPriceTemp + parseFloat(items[id]['price'])
    } else {
      totalPriceTemp = totalPriceTemp - parseFloat(items[id]['price'])
    }

    setTotalPrice((Math.round(totalPriceTemp*100)/100));
  }

  const _updateTotalSpendPerItem = (id, add=true) => {
    let totalSpendPerItemTemp = totalSpendPerItem;

    if (totalSpendPerItemTemp[id] === undefined) {
      totalSpendPerItemTemp[id] = 0;
    }

    totalSpendPerItemTemp[id] = parseFloat(totalSpendPerItemTemp[id]);

    if (add === true) {
      totalSpendPerItemTemp[id] = totalSpendPerItemTemp[id] + parseFloat(items[id]['price']);
    } else {
      totalSpendPerItemTemp[id] = totalSpendPerItemTemp[id] - parseFloat(items[id]['price']);
    }

    totalSpendPerItemTemp[id] = (Math.round(totalSpendPerItemTemp[id]*100)/100).toFixed(2);

    setSpendPerItem(totalSpendPerItemTemp);
  }

  const togglePopup = () => {
    if(popupActive === true) {
      setPopupActive(false);
    } else {
      setPopupActive(true);
    }
  }

  return (
    <BrowserRouter>
      <div> 
        <Header
          totalQuantity={totalQuantity}
          togglePopup={togglePopup}
        />
        <Checkout 
          popupActive={popupActive}
          togglePopup = {togglePopup}
          totalPrice={totalPrice}
          items={items}
          orderData={orderData}
          totalSpendPerItem={totalSpendPerItem}
          addItem={addItem}
          removeItem={removeItem}
        />
        <Routes>
          <Route path='/products' element={
            <Products 
            setItems={setItems}
            items={items}
            addItem={addItem}
            />}
          />
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
  </BrowserRouter>
  );
}

export default App;

// Multi-Page
// Tests

// Scroll-down