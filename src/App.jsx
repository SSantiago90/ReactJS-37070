import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./app.css";

function App() {
  return (
    <div className="App  mx-auto">
      <NavBar />
      <ItemListContainer greeting="Hola Coder" />
    </div>
  );
}

export default App;
