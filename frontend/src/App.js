import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import Saludar from './components/Saludar';

function App() {


  // const user = {
  //   nombre: "Saul",
  //   edad: 24,
  //   color: "Azul"
  // };

  // const saludarFn = (nombre, edad) => {
  //   console.log("Hola " + nombre + " tiene " + edad + " años");
  //   console.log(`Hola ${nombre} tiene ${edad} años`);
  // };
  const [stateCar, setStateCar] = useState(false); // [valor, funcion
  const [contar, setContar] = useState(0);

  useEffect(() => {
    console.log("Total: " + contar);
  }, [contar]);

  const encenderApagar = () => {
    setStateCar(!stateCar);
    setContar(contar + 1);
    // setStateCar(prevValue => !prevValue)
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>El coche esta: {stateCar ? "Encendido" : "Apagado "}</h3>
        <h4>Clicks: {contar}</h4>
        <button onClick={encenderApagar}>Encencender / Apagar</button>
        {/* <Saludar userInfo={user} saludarFn={saludarFn} /> */}
      </header>
    </div>
  );
}

export default App;
