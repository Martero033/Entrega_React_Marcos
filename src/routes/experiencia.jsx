import React from "react";
import Banner from "../components/banner/banner";
import banner3 from "../assets/img/banner_3.png";
import banner4 from "../assets/img/banner_4.png";
import banner5 from "../assets/img/banner_5.png";
import TittleBar from "../components/titleBar/tittleBar";
function ExperienciaPage() {
  
  return (
    <div>
      
      <TittleBar text={"Experiencia Starbucks"} ></TittleBar> 
      
      <br />
      <Banner
        img={banner3}
        title={"In Store"}
        description={
          "En nuestras tiendas te esperan nuestros baristas capacitados para ofrecerte una bebida muy especial. El ambiente cálido y los detalles de nuestros productos elaborados artesanalmente hacen que la experiencia sea única e inigualable."
        }
        backgroundColor={"#f2f0eb"}
        color={"#000000de"}
        isFlipped={true}
        height={"300"}
      />
      <br />
      <br />
      <Banner
        img={banner4}
        title={"Drive Thru"}
        description={
          "Retirá tu bebida favorita y viví la Experiencia Starbucks sin bajarte del auto.          "
        }
        backgroundColor={"#f2f0eb"}
        color={"#000000de"}
        height={"300"}
        isFlipped={false}
      />
      <br />
      <br />
      <Banner
        img={banner5}
        title={"Delivery"}
        description={
          "Los clientes pueden pedir sus bebidas y productos favoritos donde sea que estén con operadores logísticos al servicio como Pedidos Ya."
        }
        backgroundColor={"#f2f0eb"}
        color={"#000000de"}
        height={"300"}
        isFlipped={false}
        haveButton={true}
      />
    </div>
  );
}

export default ExperienciaPage;
