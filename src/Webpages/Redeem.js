import React from 'react';
import img1 from "./Images/T-Shirt.png" 
import img2 from "./Images/Bag.png" 
import img3 from "./Images/Huddy.png" 
import img4 from "./Images/Lbag.png" 
import img5 from "./Images/shoe.png" 

function Container() {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      margin: '0', 
      padding: '0', 
      backgroundColor: '0 0 10px rgba(0, 0, 0, 0.1)',
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '10px auto', 
        padding: '20px', 
         
        borderRadius: '10px',
        
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' 
      }}>
        {/* Repeat the above structure for other products */}

        <div style={{ 
          textAlign: 'center', 
          marginBottom: '40px' 
        }}>
          <h2 style={{ 
            marginTop: '0', 
            color: 'white' 
          }}>Bag</h2>
          <img src={img2} alt="Bag" style={{ 
            display: 'block', 
            margin: '0 auto', 
            maxWidth: '40%', 
            height: '400px', 
            border: '2px solid #ddd', 
            borderRadius: '10px' 
          }} />
          <button style={{ 
            display: 'block', 
            margin: '20px auto', 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontSize: '23px',
            transition: 'background-color 0.3s' 
          }}>Buy Now 100 LearnCoins</button>
        </div>

        <div style={{ 
          textAlign: 'center', 
          marginBottom: '40px' 
        }}>
          <h2 style={{ 
            marginTop: '0', 
            color: 'white' 
          }}>Hoodie</h2>
          <img src={img3} alt="Huddy" style={{ 
            display: 'block', 
            margin: '0 auto', 
            maxWidth: '50%', 
            height: 'auto', 
            border: '2px solid #ddd', 
            borderRadius: '10px' 
          }} />
          <button style={{ 
            display: 'block', 
            margin: '20px auto', 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer', 
            fontSize: '23px',
            transition: 'background-color 0.3s' 
          }}>Buy Now 250 LearnCoins</button>
        </div>

        <div style={{ 
          textAlign: 'center', 
          marginBottom: '40px' 
        }}>
          <h2 style={{ 
            marginTop: '0', 
            color: 'white' 
          }}>Laptop Bag</h2>
          <img src={img4} alt="Laptop Bag" style={{ 
            display: 'block', 
            margin: '0 auto', 
            maxWidth: '50%', 
            height: 'auto', 
            border: '2px solid #ddd', 
            borderRadius: '10px' 
          }} />
          <button style={{ 
            display: 'block', 
            margin: '20px auto', 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer', 
            fontSize: '23px',
            transition: 'background-color 0.3s' 
          }}>Buy Now 350 LearnCoins</button>
        </div>

        <div style={{ 
          textAlign: 'center', 
          marginBottom: '40px' 
        }}>
          <h2 style={{ 
            marginTop: '0', 
            color: 'white' 
          }}>Nike Shoes</h2>
          <img src={img5} alt="Nike Shoes" style={{ 
            display: 'block', 
            margin: '0 auto', 
            maxWidth: '50%', 
            height: 'auto', 
            border: '2px solid #ddd', 
            borderRadius: '10px' 
          }} />
          <button style={{ 
            display: 'block', 
            margin: '20px auto', 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer', 
            fontSize: '23px',
            transition: 'background-color 0.3s' 
          }}>Buy Now 500 LearnCoins</button>
        </div>
      </div>
    </div>

    
  );
}

export default Container;
