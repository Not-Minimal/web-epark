import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';

function App() {


  const user = {
    nombre: "Saul",
    edad: 24,
    color: "Azul"
  }

  const saludarFn = name => {
    console.log("Hola " + name);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Saludar userInfo={user} saludarFn={saludarFn} />
      </header>
    </div>
  );
}

export default App;
