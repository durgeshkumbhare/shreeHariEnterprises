import Carasouel from "../components/Carasouel";
import Carsouel2 from "../components/Carsouel2";
import fertBuyimg from "../assets/images/fertbuyImg.webp";
import lushGreenField from "../assets/images/lush-green-field-stockcake.jpg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <Carasouel />
      <div className="m-6 pb-4 border-b-2"><Carsouel2 /></div>
      <div className="grid md:grid-cols-2 py-8 gap-8 font-serif mx-6 border-b-2">
        <div className=" ">
          <img src={fertBuyimg} alt="" className="rounded-md" />
        </div>
          
        <div className="">
          <p className="mb-4">
            the perfect blend of nutrients tailored to your crops needs. We
            trade in high-quality fertilizers that are designed to enrich the
            soil and ensure robust, healthy growth for your plants. From small
            gardens to expansive fields, we’ve got you covered.
          </p>
          <span className="block mb-2">🌱 Tailored for Every Crop </span>
          <span className="block mb-2">🌱 Eco-Friendly and Sustainable </span>
          <span className="block mb-2">
            🌱 Proven Results You Can Trust Explore Now
          </span>
          <Link to="/biostimulant" className="btn btn-primary mt-4">
            Buy Now
          </Link>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 pb-8 border-b-2 mb-4 gap-8 font-serif mt-8 mx-6 ">
        <div className="mx-auto">
          {/* <Carsouel2 /> */}
          <h2 className="text-2xl text-black font-bold mb-4">Why Choose Us</h2>
          <span className="block mb-2">
            <span className="font-bold">High-Quality Ingredients:</span> Sourced
            sustainably for maximum impact.
          </span>
          <span className="block mb-2">
            <span className="font-bold">Eco-Friendly Practices:</span> Helping
            you grow while protecting the planet.
          </span>
          <span className="block mb-2">
            <span className="font-bold">Proven Results:</span> Trusted by
            farmers and gardeners in India.
          </span>
          <div className="mt-6">
            <h2 className="text-2xl text-black font-bold mb-4">How It Works</h2>
            <span className="block mb-2">
              <span className="font-bold">Prepare the Soil </span>– Test and
              enrich your land.
            </span>
            <span className="block mb-2">
              <span className="font-bold">Apply the Fertilizer </span>– Follow
              easy instructions for the best results.
            </span>
            <span className="block mb-2">
              <span className="font-bold">Harvest the Rewards</span> – Enjoy a
              healthier, abundant yield.
            </span>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl text-black font-bold mb-4">
              Fertilizer Benefits
            </h2>
            <span className="block mb-2">
              Enriches the soil with essential nutrients.
            </span>
            <span className="block mb-2">
              Promotes faster growth and higher yields.
            </span>
            <span className="block mb-2">
              Reduces crop vulnerability to pests and diseases.
            </span>
          </div>
        </div>

        <div className=" ">
          <img src={lushGreenField} alt="" className="rounded-md" />
        </div>
      </div>
      <div className="max-w-[50rem] text-center mx-auto my-6 ">
        <div className="mx-6">
          {" "}
          <p>
            At <span className="font-bold">Shree Hari Enterprises</span>, we
            believe that every farmer and gardener deserves the tools to
            succeed. That’s why we offer a comprehensive range of fertilizers,
            pesticides, and bio-stimulants, designed to enhance soil health,
            protect your crops, and maximize your yields sustainably.
          </p>
          <p className="mt-4">
            Whether you’re a small-scale gardener or a large-scale farmer, our
            products are tailored to meet your unique needs while safeguarding
            the environment. With{" "}
            <span className="font-bold">Shree Hari Enterprises</span>, growing
            healthy, abundant crops has never been easier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
