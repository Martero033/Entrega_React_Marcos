import React from "react";
import Banner from "../components/banner/banner";
import banner1 from "../assets/img/banner_1.png";
import banner2 from "../assets/img/banner_2.png";
function HomePage() {

  return (
    <div>
      <Banner
        img={banner1}
        title={"¡La magia llegó a nuestras tiendas! "}
        description={
          "Sentí el cariño de esta temporada con tus favoritos y llena de sabor cada momento."
        }
        backgroundColor={"#e83e8c"}
        color={"#fff"}
        height={"450"}
      />
      <br />
      <Banner
        img={banner2}
        title={"Unite a algo más grande"}
        description={"Revisa las oportunidades que tenemos para vos"}
        backgroundColor={"#d4e9e2"}
        color={"#00754a"}
        height={"350"}
        isFlipped={true}
        haveButton={true}
      />
    </div>
  );
}

export default HomePage;
