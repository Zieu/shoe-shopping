import React from "react";

const Card = ({ model, price, gender, isFav, photo }) => {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-img-container">
          <img className="card-img" src={photo} alt={model} />
        </div>
        <div className="d-flex justify-content-between align-items-center p-2">
          <div className="card-description d-flex flex-column">
            <p className="card-model">{model}</p>
            <p className="card-gender">{gender}</p>
          </div>
          <div className="card-price">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
