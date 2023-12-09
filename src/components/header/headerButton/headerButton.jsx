import React from "react";
import "./headerButton.css";
import { NavLink } from "react-router-dom";
/**
 *  HeaderButton es el boton de la barra de navegacion
 *  @param {Object} data - Contiene los datos del boton
 *  @param {string} data.name - Nombre del boton
 *  @param {string} data.link - Link del boton
 *  @param {string} data.customCss - Clase de css para el boton
 *  @param {string} data.img - Imagen del boton
 * @return {JSX.Element} - Retorna el boton de la barra de navegacion segun los datos recibidos y tiene tres estados distintos, logo, boton y localizar tienda
 */
function HeaderButton({ data: { name, link, customCss, img } }) {
  if (name === "Localizar tienda") {
    return (
      <li className={`header__button ${customCss}`}>
        <a target="_blank" href={link}>
          {name}
        </a>
      </li>
    );
  }
  if (img) {
    return (
      <li className={`header__button ${customCss}`}>
        <NavLink to={link}>
          <img src={img} alt={name} />
        </NavLink>
      </li>
    );
  }
  return (
    <li className={`header__button header__button--link ${customCss}`}>
      <NavLink to={link}>{name}</NavLink>
    </li>
  );
}

export default HeaderButton;
