import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Design = () => {
  const [isSelected, setIsSelected] = useState("");

  return (
    <div className="mt-10">
      <div className="flex">
        <Link
          to={""}
          className={`border px-5 py-3 text-sm ${
            isSelected === "" ? "font-semibold" : ""
          }`}
          onClick={() => setIsSelected("")}
        >
          Your Product List
        </Link>
        <Link
          to={"addProduct"}
          className={`border px-5 py-3 text-sm ${
            isSelected === "add" ? "font-semibold" : ""
          }`}
          onClick={() => setIsSelected("add")}
        >
          Add New Product
        </Link>
      </div>

      <div className="flex flex-col gap-4 text-sm mt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Design;
