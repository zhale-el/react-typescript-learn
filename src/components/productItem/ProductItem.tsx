import React from "react";
import productImg from "../../assets/image/product.svg";
const ProductItem = () => {
  return (
    <div className="w-80 border shadow-lg rounded p-6">
      <img src={productImg} alt="" style={{ width: "100%", height: "150px" }} />
      <div className="flex justify-between flex-row-reverse text-sm mb-5 pt-4">
        <h3>عنوان محصول</h3>
        <span>قیمت :۳۶۹ تومان</span>
      </div>
      <div>
        <p className="line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          amet nulla perspiciatis perferendis, non ducimus officia culpa aut.
          Corporis, architecto!
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
