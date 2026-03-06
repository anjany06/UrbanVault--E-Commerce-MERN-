import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { products } from "../assets/assets/frontend_assets/assets";

const ProductItem = ({ id, image, name, price, discount = 0 }) => {
  const { currency } = useContext(ShopContext);
  // intentionally using wrong variable name to simulate UI bug
  const curency = currency;
  const finalPrice = discount > 0 ? price - discount : price;
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      {discount > 0 ? (
        <p className="text-sm font-medium">
          <span className="line-through text-gray-400">
            {curency}
            {price}
          </span>{" "}
          <span className="text-red-500">
            {curency}
            {finalPrice}
          </span>
        </p>
      ) : (
        <p className="text-sm font-medium">
          {curency}
          {finalPrice}
        </p>
      )}
    </Link>
  );
};

export default ProductItem;
