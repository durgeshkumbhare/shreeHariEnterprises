import about from '../assets/images/about.jpg'

const About = () => {
  return (
    <div className="flex flex-col text-center mt-6 mx-8 font-serif">
      <h1 className="font-bold text-2xl text-gray-900">
        Shree Hari Enterprise
      </h1>
      <div className="grid md:grid-cols-2 gap-4 my-4">
        <img src={about} className=" opacity-85 rounded-md" />
        <p className="text-start">
          Shree Hari Enterprises is a trusted leader in the agricultural
          industry, specializing in the import and distribution of high-quality
          fertilizers, stimulants, and pesticides. With a commitment to
          enhancing modern farming practices, we bring innovative solutions to
          farmers, empowering them to achieve healthier crops and higher yields.
          At Shree Hari Enterprises, we partner with globally renowned
          manufacturers to ensure our products meet the highest standards of
          quality and effectiveness. Our diverse portfolio is designed to
          address the unique needs of various crops, offering solutions that
          promote sustainable growth, improve soil health, and protect plants
          from pests and diseases. We pride ourselves on providing farmers with
          products that deliver reliable results and value. Through our
          extensive network, we ensure timely availability and expert guidance,
          enabling growers to maximize their agricultural potential.
        </p>
      </div>
      <div className="text-start mt-3 mb-8 max-w-[55rem]">
        <h1 className="text-2xl font-bold mb-2">
          Our Mission, Vision and Values.
        </h1>
        <h3 className="font-bold text-lg mb-2">Our Mission</h3>
        <p className="mb-4">
          To deliver cutting-edge agricultural solutions that enhance
          productivity, sustainability, and prosperity for farmers across the
          region.
        </p>
        <h3 className="font-bold text-lg mb-2">Our Vision</h3>
        <p className="mb-4">
          To be the preferred partner for innovative and sustainable
          agricultural products, contributing to a thriving agricultural
          ecosystem.
        </p>
        <h3 className="font-bold text-lg mb-2">Why Choose Us?</h3>
        <p className="mb-4">
          <span className="font-bold">Premium Quality:</span> Sourcing
          world-class fertilizers, stimulants, and pesticides.
          <span className="block">
            {" "}
            <span className="font-bold">Expertise:</span> Providing
            knowledgeable advice to help farmers optimize their practices.
          </span>
          <span className="block">
            <span className="font-bold"> Reliability:</span>
            Ensuring consistent supply and exceptional customer service.
          </span>
          <span className="block">
            <span className="font-bold">Sustainability:</span>
            Promoting environmentally friendly solutions for modern farming.
            Partner with Shree Hari Enterprises—where agriculture meets
            excellence.
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
