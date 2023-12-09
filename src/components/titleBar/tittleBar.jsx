import "./tittleBar.css";
import { useContext } from "react";
import { ThemeContext } from "../../App";
function TittleBar({ text }) {
  const { theme } = useContext(ThemeContext);
  return <div className={`title-bar-${theme}`}>{text}</div>;
}

export default TittleBar;
