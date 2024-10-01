import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = ({ items }) => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  const getTotalAmount = () => {
    return items?.reduce((acc, item) => {
      return acc + Number(item.quantity) * Number(item.product.price);
    }, 0);
  };

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>

      <div className="flex flex-col gap-4 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {getTotalAmount()}.00
          </p>
        </div>
        <hr className="bg-gray-400" />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency}
            {delivery_fee}.00
          </p>
        </div>
        <hr className="bg-gray-400" />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}
            {getTotalAmount() === 0 ? 0 : getTotalAmount() + delivery_fee}.00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
