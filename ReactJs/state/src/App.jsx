import  { useState } from 'react' 
import Cartpage from './usestate/Cartpage' 
import Addtocart from './usestate/Addtocart'
import './app.css'

function App() {

  const [cartItems, setCartItems] = useState([]);

  const product = { 
    id: 1, 
    name: "Classic Sneakers", 
    price: 1500, 
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" 
  };

  const addToCart = (item) => {
    const exists = cartItems.find((x) => x.id === item.id);
    if (exists) {   
      incrementQty(item.id);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };
  
  const incrementQty = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };


  const decrementQty = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="main"> 
      <h1 style={{ 
        fontWeight: 'bold',
        fontSize: '30px',
        color: 'white',
        marginBottom: '20px',
        textAlign: 'center',
       margin: '20px 20px 20px 20px',
        padding: '10px 10px 10px 10px',
        borderRadius: '10px',
        border: '1px solid black',
        backgroundColor: 'orange',

      }}>
        Shopping Cart Store Page</h1>
      <div className="content-wrapper">
        <Addtocart product={product} onAdd={addToCart} />
        <Cartpage 
          items={cartItems} 
          onIncrement={incrementQty} 
          onDecrement={decrementQty} 
          onRemove={removeItem}
        />
      </div>
    </div>
  )
}

export default App
