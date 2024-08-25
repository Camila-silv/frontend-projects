import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MeteoraProvider } from "./context/MeteoraContext";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";

export default function App() {
  return (
    <BrowserRouter>
      <MeteoraProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
      </MeteoraProvider>
    </BrowserRouter>
  );
}

