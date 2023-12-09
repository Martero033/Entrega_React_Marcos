import React from "react";

function Wrapper({ children }) {
  return <div style={{ maxWidth: "1000px", margin: "0 auto" }}>{children}</div>;
}

export default Wrapper;
