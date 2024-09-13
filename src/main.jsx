import "./index.css";
import App from "./App.jsx";
import ShopContextProvider from "./context/ShopContext.jsx";
import store from "./store/store.js";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./constants/storage.js";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ShopContextProvider>
          <App />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </ShopContextProvider>
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);
