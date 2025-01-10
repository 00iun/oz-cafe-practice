import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { MeunProvider } from "./context/menuContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MeunProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </MeunProvider>
  </BrowserRouter>
);
