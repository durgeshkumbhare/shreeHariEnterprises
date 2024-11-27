import React from "react";
import fertisil1060 from "../assets/images/fertisilhydra1060.jpg";
import fertisil2828 from "../assets/images/fertisilhydra2828.jpg";
import fertisi4847l from "../assets/images/fertisilhydra4847.jpg";
import fertisil946 from "../assets/images/fertisilhydra946.jpg";
import novaSolub from "../assets/images/novSolub21.webp";
import basfoliar from "../assets/images/basfoliar-0-40-37-sp_0.png.webp";
import cabmax from "../assets/images/caBMax.webp";
import azfrasco from "../assets/images/tradecorp-AZ-fresco-1.jpg";
import fertilionCombi from "../assets/images/fetrilon-combi2-alu-bag-1kg.png.webp";
import Zing from "../assets/images/Basfoliar-Zing.png.webp";
import nutri946 from "../assets/images/0-9-46.png.jpg";
import phylgree200 from "../assets/images/Phylgreen-200.png.webp";
import intake from "../assets/images/intake.jpeg";
import humistartWG from "../assets/images/Humitsar-WG.png.jpg";
import basfoliarBORO from "../assets/images/Basfoliar boro sl.png.webp";
import basfoliarSL from "../assets/images/basfoliar-cabmg-sl_rev1.png.webp";
import basfoliaralgae from "../assets/images/basfoliar-algae-2-sl-etk-10l.png.jpg";
import basfoliarkelp from "../assets/images/basfoliarKelpOSl.jpg";
import { Link } from "react-router-dom";

const Carsouel2 = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl my-4 font-bold">Our Products</h1>
        <Link to='fertiliser' className="btn btn-primary">Learn More</Link>
      </div>
      <div className="carousel rounded-box gap-4 border shadow-md p-4">
        <div className="carousel-item ">
          <img src={fertisil2828} className="object-cover w-[15rem]" />
        </div>
        <div className="carousel-item ">
          <img src={fertisil1060} className="object-cover w-[15rem]" />
        </div>
        <div className="carousel-item ">
          <img src={fertisi4847l} className="object-cover w-[15rem]" />
        </div>
        <div className="carousel-item ">
          <img src={Zing} className="object-cover w-[15rem]" />
        </div>
        <div className="carousel-item ">
          <img src={basfoliarBORO} className="object-cover w-[15rem]" />
        </div>
        <div className="carousel-item ">
          <img src={basfoliarkelp} className="object-cover w-[15rem]" />
        </div>
        <div className="carousel-item ">
          <img src={cabmax} className="object-cover w-[15rem]" />
        </div>
        <div className="carousel-item ">
          <img src={phylgree200} className="object-cover w-[15rem]" />
        </div>
        <div className="carousel-item ">
          <img src={humistartWG} className="object-cover w-[15rem]" />
        </div>
      </div>
      {/* <div className="flex gap-3 mx-auto my-4">
      <Link to='/fertiliser' className="btn btn-primary">Go to Fertilizer page</Link>
      <Link to='/biostimulant' className="btn btn-primary">Go to Bio-Stimulant page</Link>
      <Link to='/biopesticide' className="btn btn-primary">Go to Bio-Pesticides page</Link>
      </div> */}
    </div>
  );
};

export default Carsouel2;
