import React from 'react'
import { useParams } from 'react-router-dom'
import { stimulant } from '../data';

const BioStimulantSingleProduct = () => {
    const { productId } = useParams();
  const product = stimulant.find((product) => product.id == productId);
  const { img, model, description, reccomendedCrops, packaging } = product;
  return (
    <div className="m-8">
      <h1 className="font-bold text-2xl">{model}</h1>
      <div className="grid md:grid-cols-2 max-w-[60rem] mx-auto mt-8 gap-4">
        <img src={img} className="object-cover " />
        <div>
          <h4 className="text-lg mb-2 font-bold">{model}</h4>
          <p className="mb-2">{description}</p>
          <p className="mb-2">
            <span className="font-bold mb-4">Reccomended Crops:</span>{" "}
            {reccomendedCrops}
          </p>
          <p>
            <span className="font-bold ">Packaging:</span>
            {packaging}
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold mt-6 mb-4">For Pricing and More Information</h2>
        <p className="mb-2">
          We’d love to assist you with all your fertilizer needs! For
          personalized pricing and detailed product information, please reach
          out to us:
        </p>
        <p className="mb-2"><span className="font-bold">Phone: </span>7517043603</p>
        <p className="mb-2"><span className="font-bold">Email:</span> shreeharienterprises457@gmail.com</p>
        <p className="mb-2"><span className="font-bold">WhatsApp:</span> 7517043603</p>
        <p>Alternatively, you can send us a direct message, and our team will get back to you promptly. Let’s help your fields flourish!</p>
      </div>
    </div>
  );
}

export default BioStimulantSingleProduct