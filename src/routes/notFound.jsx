import React from "react";
import notFound from "../assets/img/404.jpg";
function NotFoundPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h3 style={{textAlign:'center', fontSize:"32px"}}>404 no encontrado</h3>
      <img src={notFound} alt="" />
    </div>
  );
}

export default NotFoundPage;
