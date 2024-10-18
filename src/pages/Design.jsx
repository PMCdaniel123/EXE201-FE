import { Link, Outlet, useLocation } from "react-router-dom";

const Design = () => {
  const pathName = useLocation().pathname;

  return (
    <div className="pt-10 border-t border-gray-400 px-10">
      <div className="flex">
        <Link
          to={""}
          className={`border border-gray-400 px-5 py-3 text-sm ${
            pathName === "/design" ? "font-semibold text-base" : ""
          }`}
        >
          My Products List
        </Link>
        <Link
          to={"add-product"}
          className={`border border-gray-400 px-5 py-3 text-sm ${
            pathName === "/design/add-product" ? "font-semibold text-base" : ""
          }`}
        >
          Add New Product
        </Link>
        <Link
          to={"designer-orders"}
          className={`border border-gray-400 px-5 py-3 text-sm ${
            pathName === "/design/designer-orders"
              ? "font-semibold text-base"
              : ""
          }`}
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
