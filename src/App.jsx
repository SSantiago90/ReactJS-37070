import logoImg from "./img/coderhouse.jpg";
import NavBar from "./components/NavBar/NavBar";
import "./app.css";

function App() {
  const stylesH1 = {
    color: "lightblue",
  };

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <h1 style={stylesH1}>Bienvenidos a mi app</h1>
        <img alt="logo coder" src={logoImg} />
        <hr />
        <p>Hola Coderhouse</p>
      </header>
    </div>
  );
}

export default App;
