import { Link, Outlet, useLocation } from "react-router-dom";

const Design = () => {
  const pathName = useLocation().pathname;

  return (
    <div className="pt-10 border-t border-gray-400 px-6 md:px-10">
      <div className="flex md:flex-row flex-col max-sm:gap-4 items-center">
        <Link
          to={""}
          className={`border border-gray-400 md:px-5 md:py-3 p-2 text-base ${
            pathName === "/design"
              ? "font-bold text-[#9d905a]"
              : ""
          }`}
        >
          My Products List
        </Link>
        <Link
          to={"add-product"}
          className={`border border-gray-400 md:px-5 md:py-3 p-2 text-base ${
            pathName === "/design/add-product"
              ? "font-bold text-[#9d905a]"
              : ""
          }`}
        >
          Add New Product
        </Link>
        <Link
          to={"designer-orders"}
          className={`border border-gray-400 md:px-5 md:py-3 p-2 text-base ${
            pathName === "/design/designer-orders"
              ? "font-bold text-[#9d905a]"
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
