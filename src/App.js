import React, { useState } from 'react';
import Products from './Components/ProductPage/Products.js';
import Header from './Components/Header/header.js';

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

    setTotalPrice(totalPriceTemp);
  }

  const _updateTotalSpendPerItem = (id, add=true) => {
    let totalSpendPerItemTemp = totalSpendPerItem;

    if (totalSpendPerItem[id] === undefined) {
      totalSpendPerItem[id] = 0;
    }

    if (add === true) {
      totalSpendPerItemTemp[id] = totalSpendPerItem[id] + parseFloat(items[id]['price']);
    } else {
      totalSpendPerItemTemp[id] = totalSpendPerItem[id] - parseFloat(items[id]['price']);
    }

    setSpendPerItem(totalSpendPerItemTemp);
  }


  return (
    <div> 
      <Header totalQuantity={totalQuantity}/>
      <Products setItems={setItems} items={items} addItem={addItem}/>
    </div>
  );
}

export default App;

// HEADER 

// Display shopping items 
  // If state.items.total === 0 return {}
  // else return <circle>item.total<circle>
  // Activate pop-up


// Your shopping display 
  // For each key in state.object 
  // Print inventory.object[id][name] ...
  // Print sum
  // Checkout button 
  // Close button

// Button component
  // Button with add and delete function

// Multi-Page
// Tests

// Scroll-down