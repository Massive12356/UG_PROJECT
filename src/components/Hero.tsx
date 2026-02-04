import { Link } from "react-router-dom";
import HeroImage from "../assets/HeroImage.png";
import IdentityNav from "./IdentityNav";

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      <IdentityNav />

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-[#0e18614d]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            University of Ghana <br />
            Medical School
          </h1>

          <p className="text-xl md:text-2xl text-white mb-8">
            Training the next generation of healthcare professionals to serve
            Ghana and the world
          </p>

          <Link to="#" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors duration-300">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
