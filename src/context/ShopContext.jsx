import { createContext, useEffect, useState } from "react";
import { blog_data } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import tokenMethod from "../utils/token";
import useGetProductsList from "../hooks/useGetProducts";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  // const currency = "₫";
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [isAddProduct, setIsAddProduct] = useState("");
  const navigate = useNavigate();
  const itemsPerPage = 20;
  const [user, setUser] = useState({});
  const [role, setRole] = useState("");
  const tokenData = tokenMethod.get();
  const [openModal, setOpenModal] = useState(false);
  const { data: products } = useGetProductsList();

  useEffect(() => {
    if (tokenData !== null) {
      setRole(tokenData.user.role);
    }
  }, [tokenData, tokenMethod]);

  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product.id + "" === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }

    return totalAmount;
  };

  const setProfile = () => {
    if (tokenData !== null) {
      setUser(tokenData.user);
    }
  };

  const value = {
    products,
    blog_data,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    role,
    setRole,
    itemsPerPage,
    isAddProduct,
    setIsAddProduct,
    user,
    setUser,
    openModal,
    setOpenModal,
    setProfile,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
