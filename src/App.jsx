import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useState, useReducer } from "react";
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./routes/home";
import CafePage from "./routes/cafe.jsx";
import MenuPage from "./routes/menu";
import ExperienciaPage from "./routes/experiencia";
import NotFoundPage from "./routes/notFound";
import Wrapper from "./components/wrapper";
import bebida1 from "./assets/img/tienda/producto_1.png";
import bebida2 from "./assets/img/tienda/producto_2.png";
import bebida3 from "./assets/img/tienda/producto_3.png";
import bebida4 from "./assets/img/tienda/te_caliente.png";
import bebida5 from "./assets/img/tienda/te_helado.png";
import bebida6 from "./assets/img/tienda/heladas.png";
import comida1 from "./assets/img/tienda/bakery.png";
import comida2 from "./assets/img/tienda/sanwich.png";
import comida3 from "./assets/img/tienda/snacks.png";
import casa1 from "./assets/img/tienda/cafe_grano.png";
import casa2 from "./assets/img/tienda/te.png";
import FormItems from "./components/form/formItems.jsx";
export const ThemeContext = createContext(null);
export const AppContext = createContext(null);
const themeLocalStorage = localStorage.getItem("theme") || "light";
const initialState = {
  bebidas: [
    { img: bebida1, title: "Cafés Calientes" },
    { img: bebida2, title: "Cafés Helados" },
    { img: bebida3, title: "Frappuccino" },
    { img: bebida4, title: "Té caliente" },
    { img: bebida5, title: "Té helado" },
    { img: bebida6, title: "Calientes" },
  ],
  comidas: [
    { img: comida1, title: "Bakery" },
    { img: comida2, title: "Sándwichs & preparados" },
    { img: comida3, title: "Snacks" },
  ],
  
  casa: [
    { img: casa1, title: "Café en grano" },
    { img: casa2, title: "Té" },
  ],
};
/*
* @param {object} state
* @param {object} action
*/
function reducer(state, action) {
  const oldState = { ...state };
  switch (action.type) {
    case "ADD_PRODUCT":
      oldState.productos.push(action.payload);
      alert("Producto agregado correctamente");
      return oldState;
    case "ADD_BEBIDA":
      oldState.bebidas.push(action.payload);
      return oldState;
    case "MODIFY_PRODUCT":
      return oldState;
    default:
      alert("No se reconoce la acción");
      return state;
  }
}

function App() {
  const [theme, setTheme] = useState(themeLocalStorage);
  const [appState, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Wrapper>
          <Router>
            {/* TODO LO QUE ESTE POR FUERA DE <ROUTES> FUNCIONA COMO LAYOUT */}
            <Header />
            <Routes>
              {/* DEFINIMOS LAS RUTAS QUE VAMOS A USAR EN ROUTES*/}
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/experiencia" element={<ExperienciaPage />} />
              <Route path="/cafe" element={<CafePage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/form" element={<FormItems />} />
            </Routes>

            {/* TODO LO QUE ESTE POR FUERA DE <ROUTES> FUNCIONA COMO LAYOUT */}
          </Router>
        </Wrapper>
      </ThemeContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
