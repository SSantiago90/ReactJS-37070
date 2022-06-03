import logoImg from "./img/coderhouse.jpg";
import NavBar from "./components/NavBar/NavBar";
import "./app.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Button from "./components/Button";
import TailwindExample from "./components/TailwindExample";

function App() {
  // Styles inline con uso de variables
  const colorH1 = "green";
  // Creamos el objeto de estilo, usando camelCase: font-size  ❌ -> fontSize 🟢
  const stylesH1 = {
    color: colorH1,
    fontSize: "50px",
    fontWeight: "bold",
  };

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <h1 style={stylesH1}>Bienvenidos a mi app</h1>
        <img alt="logo coder" src={logoImg} />
      </header>
      <hr />
      <ItemListContainer />
      <hr />

      {/* HTML/JSX con clases de tailwind */}
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-indigo-500 text-3xl my-5 px-5">Hola Tailwind</h1>
        {/* Componente con clases de tailwind */}
        <TailwindExample />
        <hr />
      </div>

      {/* Ejemplo de componente estilizado con styled-components (🛑¡Ejemplo Avanzado!) */}
      <Button color="purple" />
    </div>
  );
}

export default App;
