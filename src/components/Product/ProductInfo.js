import React from "react";

const ProductInfo = () => {
  return (
    <div className="product-wrapper">
      <img src="" alt="" className="product-img" />
      <div className="product-description">
        <div className="product-top-links">
          <span className="product-top-gender product-gender">Men's shoe</span>
          <div className="product-top-buttons">
            <div className="product-cart"></div>
            <div className="product-fav"></div>
          </div>
        </div>
        <div className="product-bottom-info">
          <div className="product-model-wrapper">
            <h2 className="product-model">{"model"}</h2>
            <div className="product-icons">
              <img src="" alt="icon" className="product-icon" />
              <img src="" alt="icon" className="product-icon" />
              <img src="" alt="icon" className="product-icon" />
            </div>
          </div>
          <div className="product-price-wrapper">
            <p className="product-price">{"price"}</p>
            <p className="product-in-stock">{"in stock"}</p>
          </div>
          <div className="product-paragraph">
            JSONPlaceholder is a free online REST API that you can use whenever
            you ata. It can be in a README on GitHub, for a demo on need some
            fake data. It can be in a README on GitHub, for a demo on
            CodeSandbox, in code examples on Stack Overflow, ...or simply to
            test things locally. data. It can be in a README on GitHub, for a
            demo on CodeSandbox, in code examples on Stack Overflow, ...or
            simply to test things to test thingslocally.JSONPlaceholder is a
            free online REST API that you can use whenever you ata. It can be in
            a README on GitHub, for a demo on need s, for a demo on CodeSandbox,
            in code examples on Stack Overflow, ...or simply to test things
            locally.
          </div>
          <div className="product-buttons">
            <button className="product-button">Add to cart</button>
            <button className="product-button">Add to favourites</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
