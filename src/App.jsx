import logoImg from "./img/coderhouse.jpg";
import NavBar from "./components/NavBar/NavBar";
// Importamos ItemListContainer y lo renderizamos
import "./app.css";

function App() {
  const stylesH1 = {
    color: "lightblue",
  };
  //Los componentes siempre con mayus Inicial
  // dentro de NavBar importamos y mostramos CartWidget
  
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <h1 style={stylesH1}>Bienvenidos a mi app</h1>
        <img alt="logo coder" src={logoImg} />
        <hr />
        {/*  <ItemListContaier prop /> */}
      </header>
    </div>
  );
}

export default App;
