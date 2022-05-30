import logoImg from "./img/coderhouse.jpg";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const stylesH1 = {
    color: "blue",
  };

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <h1 style={stylesH1}>Bienvenidos a mi app</h1>
        <img alt="logo coder" src={logoImg} />
        <br />
        <hr />
        <p className="nav-main">Hola Coderhouse</p>
      </header>
    </div>
  );
}

export default App;
