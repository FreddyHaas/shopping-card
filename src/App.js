import React, { useState } from 'react';
import Products from './Components/Products.js';

const App = () => {
  const [items, setItems] = useState({}); // id{name, image, price}
  const [orderData, setOrderData] = useState({}); // id{quantity, priceSum} 
  const [totalPrice, setTotalPrice] = useState((0));
  const [totalQuantity, setTotalQuantity] = useState((0));
  const [popupActive, setPopupActive] = useState((false));

  return (
    <div> 
      <Products setItems={setItems} items={items}/>
    </div>
  );
}

export default App;

// SHOP LOGIC

// API

// Add quantity 
  // State[id][quantity] update by 1
  // Update sum

// Reduce quantity 
  // if state[id][quantity] === 1 -> remove item 
  // if state[id][quantity] >= 1 -> reduce by one
  // Update sum
  
// Update sum total
  // Euro total
  // Items total
  // Iterate through state object 
    // Multiply: state[id]][quantity] * item[id][price]
    // Add to Euro total
    // Add to Items total
    // sum object[id] = state[id][quantity] * item[id][price]


// HEADER 

// Display shopping items 
  // If state.items.total === 0 return {}
  // else return <circle>item.total<circle>
  // Activate pop-up


// MAIN 

// Iterate through inventory object 
  // print name, img, price
  // Add to cart button
    // Add quantity
    // 

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