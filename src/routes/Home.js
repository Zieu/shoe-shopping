import React from "react";
import Hero from "components/Hero/Hero";
import CardContainer from "components/Cards/CardContainer";
import { productsData } from "./productsData";
const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <div className="row mt-5 pt-4">
          <CardContainer title="Sneakers" data={productsData} />
        </div>
        <div className="row">
          <CardContainer title="Boots" data={productsData} />
        </div>
        <div className="row">
          <CardContainer title="Sandals" data={productsData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
