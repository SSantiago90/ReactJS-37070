import logoImg from "./img/coderhouse.jpg";
import NavBar from "./components/NavBar/NavBar";
import "./app.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Button from "./components/Button";
import BootstrapExample from "./components/BootstrapExample";

function App() {
  const colorH1 = "green";

  const stylesH1 = {
    color: colorH1,
  };

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <h1 className={stylesH1}>Bienvenidos a mi app</h1>
        <img alt="logo coder" src={logoImg} />
        <hr />
      </header>
      <div className="container">
        <h1 className="text-primary mt-5">Hola Bootstrap</h1>
      </div>
      <BootstrapExample></BootstrapExample>
      <Button colorBackground={"purple"} />
    </div>
  );
}

export default App;
