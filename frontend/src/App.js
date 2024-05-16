import React, { useState } from 'react';
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
  const encenderApagar = () => {
    // setStateCar(!stateCar);
    setStateCar(prevValue => !prevValue)
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>El coche esta: {stateCar ? "Encendido" : "Apagado "}</h3>
        <button onClick={encenderApagar}>Encencender / Apagar</button>
        {/* <Saludar userInfo={user} saludarFn={saludarFn} /> */}
      </header>
    </div>
  );
}

export default App;
