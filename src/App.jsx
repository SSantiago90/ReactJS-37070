import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./app.css";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div className="App  mx-auto">
      <NavBar />
      {/*  <ItemListContainer greeting="Hola Coder" /> */}
      <ItemDetailContainer greeting="Detalle del producto" />
    </div>
  );
}

export default App;
