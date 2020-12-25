import React from "react";

const ProductFormImage = ({ image, setImage, imageUrl, setImageUrl }) => {
  const handleChange = (e) => {
    setImage(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div>
      <input type="file" onChange={handleChange} />
      {imageUrl && <img src={imageUrl} width="400" alt={image.name} />}
    </div>
  );
};

export default ProductFormImage;
