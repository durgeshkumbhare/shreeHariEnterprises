import { stimulant } from "../data";

const BioStimulatnt = () => {
  return (
    <div className="m-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
        {stimulant.map((data) => {
          return (
            <div key={data.id} className=" -z-10 card bg-base-100 w-96 shadow-xl ">
              <figure className="px-10 pt-10">
                <img
                  src={data.img}
                  alt="img"
                  className="rounded-xl w-[11rem] h-[15rem] object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{data.model}</h2>
                <div className="card-actions text-start">
                  <button className="btn btn-primary">Learn more about the Products</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default BioStimulatnt