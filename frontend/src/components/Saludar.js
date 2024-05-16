import React from 'react';

export default function Saludar(props) {
  console.log(props.name);

  return (
    <div>
      <h2> Hola {props.name}, como estas?</h2>
    </div>
  )
}
