import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import Cookies from "js-cookie";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [orderId, setOrderId] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const itemsPerPage = 32;
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [role, setRole] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    const { data } = await axiosInstance.get("/products");
    const sortedProducts = data.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );

    setProducts(sortedProducts);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const userID = Cookies.get("userID");
    const token = Cookies.get("token");

    if (userID && token) {
      axiosInstance
        .get(`/users/${userID}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUserInfo(response.data);
          setCart(response.data.cart || []);
          setLoading(false);
          setRole(response.data.role);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.error("Failed to fetch user info:", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (cart.length >= 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    navigate,
    role,
    setRole,
    itemsPerPage,
    cart,
    setCart,
    loading,
    setLoading,
    userInfo,
    setUserInfo,
    isLoggedIn,
    setIsLoggedIn,
    orderId,
    setOrderId,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
