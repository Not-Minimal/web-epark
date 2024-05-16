import React from 'react';

export default function Saludar(props) {
  console.log(props.userInfo);

  return (
    <div>
      <h2> Hola {props.userInfo.nombre}, tienes {props.userInfo.edad} años y color fav {props.userInfo.color}</h2>
    </div>
  )
}
