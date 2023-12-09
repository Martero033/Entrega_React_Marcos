import React, { useContext } from "react";
import TittleBar from "../components/titleBar/tittleBar";
import { AppContext } from "../App";
import ProductItem from "../components/productItem/productItem";
function MenuPage() {
  const { appState } = useContext(AppContext);
  console.log("Estamos en el menu", appState.productos);
  return (
    <div>
      <TittleBar text={"Menu"}></TittleBar>

      <h2>Bebidas</h2>
      <hr />
      {appState.bebidas.map((producto) => {
        return (
          <ProductItem img={producto.img} title={producto.title}></ProductItem>
        );
      })}
      <h2>Comidas</h2>
      <hr />
      {appState.comidas.map((producto) => {
        return (
          <ProductItem img={producto.img} title={producto.title}></ProductItem>
        );
      })}

      <h2>En Casa</h2>
      <hr />
      {appState.casa.map((producto) => {
        return (
          <ProductItem img={producto.img} title={producto.title}></ProductItem>
        );
      })}
      
    </div>
  );
}

export default MenuPage;
