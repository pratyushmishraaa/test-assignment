import React from "react";
import "./Card.css";


const Card = ({ image, title, description,price }) => {
  return (
    
    <div className="main">
    <div className="card">
      <img src={image} alt="card image" />
      <div className="card-content">
        <h3>{title}</h3>
        <h4>{price}</h4>
        <p> S  M  L</p> 
        {/* hii      */}
      </div>
      <p className="discount">-25%</p>
      <span class="icons material-symbols-outlined">grade 3.8</span>

      <span class=" icons-1 material-symbols-outlined">
favorite
</span>

      <div className="circles">
      <div className="circle" style={{ backgroundColor: "grey" }}></div>
        <div className="circle" style={{ backgroundColor: "red" }}></div>
        <div className="circle" style={{ backgroundColor: "blue" }}></div>
      </div>
      <p className="buy-button">BUY +</p>
      
    </div>
    <button className="btn">#Monhappy 20% off</button>
    </div>
  );
};

export default Card;