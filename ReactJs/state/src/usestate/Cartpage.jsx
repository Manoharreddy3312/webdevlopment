

const Cartpage = ({ items, onIncrement, onDecrement, onRemove }) => {
  return (
    <div className="cart-page">
      <h2 style={{ 
        fontWeight: 'bold',
        fontSize: '30px',
        color: 'blue',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        Shopping Cart</h2>
      {items.length === 0 ? (
        <p style={{ 
          fontSize: '18px',
          color: 'red',
          textAlign: 'center'
        }}>
          Your cart is empty.
        </p>
      ) : (
        items.map((item) => (
          <div key={item.id} className="cart-item">
            <span className="item-name">{item.name}</span>
            <div className="controls">
              <button onClick={() => onDecrement(item.id)}>-</button>
              <span className="qty">{item.quantity}</span>
              <button onClick={() => onIncrement(item.id)}>+</button>
            </div>
            <span className="item-total-price">₹{item.price * item.quantity}</span>
          
            <button className="remove-btn" onClick={() => onRemove(item.id)} style={{
                backgroundColor:'red',
                color:'black',
                outline:'none',
                border:'none',
                padding:'12px 12px',
                borderRadius:'5px',
                cursor:'pointer',
                marginLeft:'10px',
                marginTop:'10px',
                width:'100px',
                height:'30px',
                alignItems:'center',
                display:'flex',
                justifyContent:'center',
                fontSize:'19px',

            }}>Remove</button>
          
          
          </div>
       
        ))
    )}
    </div>
  );
};

export default Cartpage;