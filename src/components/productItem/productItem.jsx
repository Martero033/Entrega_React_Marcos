import React from "react";

function ProductItem({ img, title, }) {
  return (
    <div>
      <div>
        <img src={img} alt="" />
      </div>
      <p>{title}</p>
    </div>
  );
}

export default ProductItem;
