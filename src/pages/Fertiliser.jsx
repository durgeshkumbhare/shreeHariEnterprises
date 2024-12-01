import React from 'react'
import { fertliser } from "../data";
import { Link } from 'react-router-dom';

const Fertiliser = () => {
  return (
    <div className="m-8 ">
       <h1 className="text-2xl font-bold mb-4">Fertiliser</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {fertliser.map((data) => {
        return (
          <div key={data.id} className=" card bg-base-100 md:w-96 shadow-xl ">
            <figure className="px-10 pt-10">
              <img
                src={data.img}
                alt="img"
                className="rounded-xl  w-[11rem] h-[15rem] object-cover "
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{data.model}</h2>
              <div className="card-actions text-start">
                <Link to={`/fertiliser/${data.id}`} className="btn btn-primary">Product Details</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default Fertiliser