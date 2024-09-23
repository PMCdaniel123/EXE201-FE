import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Design from "./pages/Design";
import Profile from "./pages/Profile";
import SunBlog from "./pages/SunBlog";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import AddProduct from "./components/AddProduct";
import ListProduct from "./components/ListProduct";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FloatButton } from "antd";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-gradient-to-br from-[#4A5942] to-[#9d905a]">
      <div
        className="relative inset-0 bg-fixed bg-center"
        style={{
          backgroundImage: "url('src/assets/frontend_assets/vertical_bg.jpg')",
        }}
      >
        <div className="absolute inset-0 mix-blend-plus-darker bg-white opacity-80"></div>
        <div className="relative w-full px-10 z-10">
          <ToastContainer />
          <ScrollToTop />
          <Navbar />
          <SearchBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/sunblog" element={<SunBlog />} />
            <Route path="/sunblog/:blogId" element={<Blog />} />
            <Route path="/design" element={<Design />}>
              <Route index path="" element={<ListProduct />} />
              <Route path="addProduct" element={<AddProduct />} />
            </Route>
          </Routes>
          <Footer />
          <FloatButton.BackTop />
        </div>
      </div>
    </div>
  );
};

export default App;
