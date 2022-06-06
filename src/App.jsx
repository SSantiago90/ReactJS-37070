import NavBar from "./components/NavBar/NavBar";
import "./app.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greet="Hola Coder" />
    </div>
  );
}

export default App;
