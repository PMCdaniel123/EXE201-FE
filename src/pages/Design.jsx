import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Design = () => {
  const { isAddProduct, setIsAddProduct } = useContext(ShopContext);

  return (
    <div className="pt-10 border-t">
      <div className="flex">
        <Link
          to={""}
          className={`border px-5 py-3 text-sm ${
            isAddProduct === "" ? "font-semibold" : ""
          }`}
          onClick={() => setIsAddProduct("")}
        >
          Your Product List
        </Link>
        <Link
          to={"addProduct"}
          className={`border px-5 py-3 text-sm ${
            isAddProduct === "add" ? "font-semibold" : ""
          }`}
          onClick={() => setIsAddProduct("add")}
        >
          Add New Product
        </Link>
      </div>

      <div className="flex flex-col gap-4 text-sm mt-10 items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Design;
