import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import Pagination from "../components/Pagination";
import { assets } from "../assets/assets";

const Collection = () => {
  const { products, search, showSearch, itemsPerPage } =
    useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.product_name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.sub_category)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProducts = () => {
    let filterProductsCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProductsCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(filterProductsCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProducts();
  }, [sortType, products]);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filterProducts.length / itemsPerPage);

  const currentProducts = filterProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 md:px-10 px-6 border-t border-gray-400">
      <div className="min-w-48 lg:min-w-60 mt-[2px]">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-base md:text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS{" "}
          <img
            src={assets.dropdown_icon}
            alt=""
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
          />
        </p>

        <div
          className={`border border-gray-400 pl-5 py-3 mt-6 sm:block bg-white bg-opacity-40 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-4 text-sm font-light text-gray-800">
            <p className="flex gap-2 items-center">
              <input
                type="checkbox"
                value={"All"}
                className={`w-4 h-4 appearance-none cursor-pointer rounded border border-gray-400 transition-colors 
                  ${
                    category.includes("All")
                      ? "bg-gradient-to-br from-[#4A5942] to-[#9d905a]"
                      : "bg-white"
                  }`}
                onClick={toggleCategory}
              />{" "}
              General
            </p>
            <p className="flex gap-2 items-center">
              <input
                type="checkbox"
                value={"Men"}
                className={`w-4 h-4 appearance-none cursor-pointer rounded border border-gray-400 transition-colors 
                  ${
                    category.includes("Men")
                      ? "bg-gradient-to-br from-[#4A5942] to-[#9d905a]"
                      : "bg-white"
                  }`}
                onClick={toggleCategory}
              />{" "}
              Men
            </p>
            <p className="flex gap-2 items-center">
              <input
                type="checkbox"
                value={"Women"}
                className={`w-4 h-4 appearance-none cursor-pointer rounded border border-gray-400 transition-colors 
                  ${
                    category.includes("Women")
                      ? "bg-gradient-to-br from-[#4A5942] to-[#9d905a]"
                      : "bg-white"
                  }`}
                onClick={toggleCategory}
              />{" "}
              Women
            </p>
            <p className="flex gap-2 items-center">
              <input
                type="checkbox"
                value={"Kids"}
                className={`w-4 h-4 appearance-none cursor-pointer rounded border border-gray-400 transition-colors 
                  ${
                    category.includes("Kids")
                      ? "bg-gradient-to-br from-[#4A5942] to-[#9d905a]"
                      : "bg-white"
                  }`}
                onClick={toggleCategory}
              />{" "}
              Kids
            </p>
          </div>
        </div>

        <div
          className={`border border-gray-400 pl-5 py-3 my-5 sm:block bg-white bg-opacity-40 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-4 text-sm font-light text-gray-800">
            <p className="flex gap-2 items-center">
              <input
                type="checkbox"
                value={"Topwear"}
                className={`w-4 h-4 appearance-none cursor-pointer rounded border border-gray-400 transition-colors 
                  ${
                    subCategory.includes("Topwear")
                      ? "bg-gradient-to-br from-[#4A5942] to-[#9d905a]"
                      : "bg-white"
                  }`}
                onClick={toggleSubCategory}
              />{" "}
              Top Wear
            </p>
            <p className="flex gap-2 items-center">
              <input
                type="checkbox"
                value={"Bottomwear"}
                className={`w-4 h-4 appearance-none cursor-pointer rounded border border-gray-400 transition-colors 
                  ${
                    subCategory.includes("Bottomwear")
                      ? "bg-gradient-to-br from-[#4A5942] to-[#9d905a]"
                      : "bg-white"
                  }`}
                onClick={toggleSubCategory}
              />{" "}
              Bottom Wear
            </p>
            <p className="flex gap-2 items-center">
              <input
                type="checkbox"
                value={"Springwear"}
                className={`w-4 h-4 appearance-none cursor-pointer rounded border border-gray-400 transition-colors 
                  ${
                    subCategory.includes("Springwear")
                      ? "bg-gradient-to-br from-[#4A5942] to-[#9d905a]"
                      : "bg-white"
                  }`}
                onClick={toggleSubCategory}
              />{" "}
              Spring
            </p>
            <p className="flex gap-2 items-center">
              <input
                type="checkbox"
                value={"Summerwear"}
                className={`w-4 h-4 appearance-none cursor-pointer rounded border border-gray-400 transition-colors 
                  ${
                    subCategory.includes("Summerwear")
                      ? "bg-gradient-to-br from-[#4A5942] to-[#9d905a]"
                      : "bg-white"
                  }`}
                onClick={toggleSubCategory}
              />{" "}
              Summer
            </p>
            <p className="flex gap-2 items-center">
              <input
                type="checkbox"
                value={"Autumnwear"}
                className={`w-4 h-4 appearance-none cursor-pointer rounded border border-gray-400 transition-colors 
                  ${
                    subCategory.includes("Autumnwear")
                      ? "bg-gradient-to-br from-[#4A5942] to-[#9d905a]"
                      : "bg-white"
                  }`}
                onClick={toggleSubCategory}
              />{" "}
              Autumn
            </p>
            <p className="flex gap-2 items-center">
              <input
                type="checkbox"
                value={"Winterwear"}
                className={`w-4 h-4 appearance-none cursor-pointer rounded border border-gray-400 transition-colors 
                  ${
                    subCategory.includes("Winterwear")
                      ? "bg-gradient-to-br from-[#4A5942] to-[#9d905a]"
                      : "bg-white"
                  }`}
                onClick={toggleSubCategory}
              />{" "}
              Winter
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between text-xl lg:text-2xl mb-4 w-full">
          <div className="flex md:flex-row flex-col items-center justify-between gap-4 w-full">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border border-gray-400 text-sm p-3 bg-white bg-opacity-40 outline-none max-sm:w-full"
            >
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6 mb-10">
          {currentProducts.length > 0 ? (
            currentProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item.id}
                image={item.images}
                name={item.product_name}
                price={item.price}
                sale={item.sale}
              />
            ))
          ) : (
            <p>No clothes were found.</p>
          )}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Collection;
