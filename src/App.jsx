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
import { ToastContainer } from "react-toastify";
import { FloatButton } from "antd";
import ScrollToTop from "./components/ScrollToTop";
import DesignerOrders from "./components/DesignerOrders";
import PrivateRoute from "./layouts/PrivateRoute";
import OrdersSuccessful from "./pages/OrdersSuccessful";
import OrderDetails from "./pages/OrderDetails";
import NewBlogs from "./pages/NewBlogs";
import MyBlogs from "./pages/MyBlogs";
import DesignerInfo from "./pages/DesignerInfo";
import PremiumRegister from "./pages/PremiumRegister";
import PremiumRegisterSuccessful from "./pages/PremiumRegisterSuccessful";
import OrdersLoading from "./pages/OrdersLoading";
import PremiumLoading from "./pages/PremiumLoading";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-gradient-to-br from-[#4A5942] to-[#9d905a]">
      <div
        className="relative inset-0 bg-fixed bg-center"
        style={{
          backgroundImage: "url('/frontend_assets/vertical_bg.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 mix-blend-plus-darker bg-white opacity-[0.85]"></div>
        <div className="relative w-full z-10">
          <ToastContainer />
          <ScrollToTop />
          <Navbar />
          <SearchBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route
              path="/designer-info/:designerId"
              element={<DesignerInfo />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/place-order"
              element={
                <PrivateRoute>
                  <PlaceOrder />
                </PrivateRoute>
              }
            />
            <Route
              path="/premium-register"
              element={
                <PrivateRoute>
                  <PremiumRegister />
                </PrivateRoute>
              }
            />
            <Route
              path="/premium-loading"
              element={
                <PrivateRoute>
                  <PremiumLoading />
                </PrivateRoute>
              }
            />
            <Route
              path="/premium-register-successful"
              element={
                <PrivateRoute>
                  <PremiumRegisterSuccessful />
                </PrivateRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <PrivateRoute>
                  <Orders />
                </PrivateRoute>
              }
            />
            <Route
              path="/orders/:orderId"
              element={
                <PrivateRoute>
                  <OrderDetails />
                </PrivateRoute>
              }
            />
            <Route
              path="/orders-loading"
              element={
                <PrivateRoute>
                  <OrdersLoading />
                </PrivateRoute>
              }
            />
            <Route
              path="/orders-sucessful"
              element={
                <PrivateRoute>
                  <OrdersSuccessful />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="/sunblog" element={<SunBlog />} />
            <Route
              path="/sunblog/new"
              element={
                <PrivateRoute>
                  <NewBlogs />
                </PrivateRoute>
              }
            />
            <Route
              path="/myblog"
              element={
                <PrivateRoute>
                  <MyBlogs />
                </PrivateRoute>
              }
            />
            <Route path="/sunblog/:blogId" element={<Blog />} />
            <Route
              path="/design"
              element={
                <PrivateRoute>
                  <Design />
                </PrivateRoute>
              }
            >
              <Route
                index
                path=""
                element={
                  <PrivateRoute>
                    <ListProduct />
                  </PrivateRoute>
                }
              />
              <Route
                path="add-product"
                element={
                  <PrivateRoute>
                    <AddProduct />
                  </PrivateRoute>
                }
              />
              <Route
                path="designer-orders"
                element={
                  <PrivateRoute>
                    <DesignerOrders />
                  </PrivateRoute>
                }
              />
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
