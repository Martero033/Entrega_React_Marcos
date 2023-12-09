import "./banner.css";

/**
*
* @param {boolean} isFlipped - Modifica como se ve el banner, invertido o no
* @param {text} backgroundColor - Modifica el color de fondo
*/
export default function Banner({
  img,
  title,
  description,
  backgroundColor,
  color,
  height,
  isFlipped = false,
  haveButton = false,
}) {
  return (
    <div
      className={`banner__container ${
        isFlipped ? "banner__container--flipped" : ""
      }`}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        height: `${height}px`,
      }}
    >
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="banner__img-container"
      />
      <div className="banner__text">
        <h2>{title}</h2>
        <p>{description}</p>
        {haveButton && (
          <button
            style={{ borderColor: color, color: color }}
            className="banner__button"
          >
            Ver más
          </button>
        )}
      </div>
    </div>
  );
}
