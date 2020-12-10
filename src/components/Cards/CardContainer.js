import React from "react";
import Card from "./Card";
const CardContainer = ({ title, data }) => {
  return (
    <div className="col-12">
      <div className="cards">
        <div className="d-flex justify-content-between align-items-end mb-3">
          <h2 className="cards-title">{title}</h2>
          <button className="button button--white">Se all</button>
        </div>
        <div className="card-container row">
          {data.map((product, index) => (
            <Card
              model={product.model}
              price={product.price}
              gender={product.gender}
              isFav={product.isFav}
              photo={product.photo}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
