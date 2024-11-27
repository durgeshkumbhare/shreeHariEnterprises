import { FaRegCopyright } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-100 font-sans">
      <div className="  text-black tracking-wider p-4 grid md:grid-cols-3 gap-4">
        <div>
          <h1 className="flex flex-col text-3xl  font-bold">
            Shree Hari Enterprise
          </h1>
          <h3>
            Pesticide L.No. <span>LCID1020220692 NGP</span>
          </h3>
          <h3>
            Fertiliser L.No. <span>LCRFD120220638 NGP</span>
          </h3>
          <p className="mt-5 text-lg font-serif text-gray-800">
            Company Address :
            <span className="text-black">
              Plot No. 142, Ratan Nagar, Gadgebaba Layout, Nagpur-440024
            </span>
          </p>
        </div>
        <div>
          <h1 className="text-lg  mb-4">Contact Us</h1>
          <p className="font-serif hover:text-gray-600">
            <span className="font-bold">Email: </span>
            shreeharienterprises@gmail.com
          </p>
          <p className=" hover:text-gray-600">
            <span className="font-bold">Mobile NO. : </span>7517043603
          </p>
        </div>
        <div>
          <h1 className="text-lg font-serif mb-2 ">Company</h1>
          <Link href="/about" className="block font-serif hover:text-gray-600">
            About us
          </Link>
        </div>
      </div>
      <div className="text-center flex border-t-2 border-b-2 border-black mt-6 mx-4 py-2 mb-2 text-black">
        <FaRegCopyright className="text-black mt-[5px] mr-2" />
        <p className="capitalize ">
          2023 all rights are reserved. | Design by
          <span> ICEICO Technologies pvt ltd.</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
