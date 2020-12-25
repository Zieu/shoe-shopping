import axios from "axios";
import React, { useState } from "react";
import ProductFormImage from "./ProductFormImage";

const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      price: price,
      images: imageUrl,
    };
    console.log(image);
    axios
      .post("http://localhost:5000/posts/post", data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex flex-column col-3">
        <h2>Form</h2>
        <label htmlFor="title">title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="price">price</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <ProductFormImage
          image={image}
          setImage={setImage}
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
        />
        <input type="submit" value="submit" />
      </div>
    </form>
  );
};

export default ProductForm;
