import "./app.css";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Contact from "./pages/Contact";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CartContextProvider } from "./context/CartContext";
import CartView from "./components/CartView/CartView";

function App() {
  return (
    <div className="App mx-auto">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Nuestro catálogo" />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer greeting="Categorías" />}
            />
            <Route
              path="/plant/:itemId"
              element={<ItemDetailContainer greeting="Detalle del producto" />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartView />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
