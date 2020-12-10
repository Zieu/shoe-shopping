import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const CardContainer = ({ title, data }) => {
  return (
    <div className="col-12">
      <div className="cards">
        <div className="d-flex justify-content-between align-items-end mb-3">
          <h2 className="cards-title">{title}</h2>
          <button className="button button--white nav-link">See all</button>
        </div>
        <div className="card-container row">
          {data.map((product, index) => (
            <Link to={`:${product.model}`} className="col-4" key={index}>
              <Card
                model={product.model}
                price={product.price}
                gender={product.gender}
                isFav={product.isFav}
                photo={product.photo}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
