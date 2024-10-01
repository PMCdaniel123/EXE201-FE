import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Design = () => {
  const { isAddProduct, setIsAddProduct } = useContext(ShopContext);

  return (
    <div className="pt-10 border-t border-gray-400">
      <div className="flex">
        <Link
          to={""}
          className={`border border-gray-400 px-5 py-3 text-sm ${
            isAddProduct === "" ? "font-semibold text-base" : ""
          }`}
          onClick={() => setIsAddProduct("")}
        >
          My Products List
        </Link>
        <Link
          to={"addProduct"}
          className={`border border-gray-400 px-5 py-3 text-sm ${
            isAddProduct === "add" ? "font-semibold text-base" : ""
          }`}
          onClick={() => setIsAddProduct("add")}
        >
          Add New Product
        </Link>
        <Link
          to={"designer-orders"}
          className={`border border-gray-400 px-5 py-3 text-sm ${
            isAddProduct === "orders" ? "font-semibold text-base" : ""
          }`}
          onClick={() => setIsAddProduct("orders")}
        >
          View Designer Orders
        </Link>
      </div>

      <div className="flex flex-col gap-4 text-sm mt-10 items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Design;
