import logoImg from "./img/coderhouse.jpg";
import NavBar from "./components/NavBar/NavBar";
import "./app.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Button from "./components/Button";
import TailwindExample from "./components/TailwindExample";

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
      <ItemListContainer />
      <TailwindExample />
      {/*  <h1 class="decoration-zinc-400 text-3xl font-bold underline">
        Hello world!
      </h1> */}
      <Button colorBackground={"purple"} />
    </div>
  );
}

export default App;
