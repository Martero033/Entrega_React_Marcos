import { useContext } from "react";
import HeaderButton from "./headerButton/headerButton";
import "./header.css";
import logo from "../../assets/ico/logo.svg";
import { ThemeContext } from "../../App";
const buttonList = [
  {
    name: "logo",
    link: "home",
    customCss: "",
    img: logo,
  },
  {
    name: "MENU",
    link: "menu",
    customCss: "",
    img: "",
  },
  {
    name: "CAFE",
    link: "cafe",
    customCss: "",
    img: "",
  },
  {
    name: "EXPERIENCIA",
    link: "experiencia",
    customCss: "",
    img: "",
  },
  {
    name: "ADMIN",
    link: "form",
    customCss: "header__button--admin",
    img: "",
  },
  {
    name: "Localizar tienda",
    link: "https://www.google.com.ar/maps/search/Starbucks/@-34.6556054,-58.4823916,11z?entry=ttu",
    customCss: "header__button--right",
    img: "",
  },
];
/** 
*  Header component es la barra de naevgacion de la web
*/
function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleClick = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme); 
    localStorage.setItem("theme", newTheme); 
  };

  return (
    <header>
      <nav>
        <div className="wrapper">
          {/* ToDo: Buscar nombre de forma de escribir este css */}
          <ul className="header__container">
            {buttonList.map((aButton, index) => {
              return <HeaderButton key={index} data={aButton} />;
            })}
            <button onClick={handleClick}>cambiar tema</button>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
