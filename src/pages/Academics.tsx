import Navbar from "../components/Navbar";
import bgImage from "../assets/acaBgImage.png";
import image1 from "../assets/Image1.png";
import img2 from '../assets/img2.png'; // MB ChB Graduate Entry image
import img3 from '../assets/img3.png'; // MB ChB Transnational image
import img4 from '../assets/img4.png'; // MPhil / PhD image
import img5 from '../assets/img5.png'; // Medical Electives image

// For courses without images, we'll reuse an existing image
const defaultImg = image1;

const courses = [
  { title: "MB ChB Regular Programme", image: defaultImg },
  { title: "MB ChB Graduate Entry", image: img2 },
  { title: "MB ChB Transnational", image: img3 },
  { title: "MPhil / PhD", image: img4 },
  { title: "Medical Electives", image: img5 },
  { title: "Research Mentorship", image: defaultImg },
  { title: "Residency", image: defaultImg },
  { title: "Short Courses", image: defaultImg },
  { title: "TeleHealth", image: defaultImg },
];

const Academics = () => {
  return (
    <div className="relative w-full">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-[#0e1861]/60"></div>
        </div>

        <div className="relative z-10 min-h-screen flex flex-col">
          <Navbar />

          <div className="flex-1 flex items-center">
            <div className="max-w-7xl mx-auto w-full px-6">
              <div className="flex justify-between items-center gap-24">
                
                <div className="max-w-xl">
                  <h1 className="text-7xl font-bold text-white">Academics</h1>
                </div>

                <div className="max-w-xl text-justify mt-36 border-b-4 border-white">
                  <p className="text-2xl text-white leading-relaxed">
                    We offer excellent programs<br />
                    to fulfill the mission of the medical<br />
                    school to generate proficient medical<br />
                    practitioners capable of addressing<br />
                    the health needs of both the nation<br />
                    and the global community.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 font-medium text-justify">
            
            {/* LEFT — Text */}
            <div className="lg:w-1/2">
              <p className="text-lg text-black leading-relaxed">
                We are a Top Medical School located in the vibrant Korle Bu community.
                We educate and train the next generation of doctors, life scientists, and
                health professionals. Our mission is to improve the health, wealth and
                well-being of people locally and globally.
              </p>

              <p className="text-lg text-black leading-relaxed mt-6">
                We collaborate with healthcare institutions, business, and the third
                sector in a spirit of open innovation and have established ourselves
                as a world-class place to learn, research, and innovate.
              </p>

              <p className="text-lg text-black leading-relaxed mt-6">
                Our community of students, researchers, and partners draw on and
                benefit from the expertise of our international educators, building
                on research excellence ranked among the best in Africa.
              </p>
            </div>

            {/* RIGHT — Image */}
            <div className="lg:w-1/2">
              <img
                src={image1}
                alt="Medical School"
                className="w-full h-[400px] md:h-[600px] lg:h-[580px] object-cover rounded-lg shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>
{/* ADMISSIONS SECTION */}
<section className="bg-gray-100 py-20">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-black mb-12 text-center uppercase">Admissions</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course, index) => (
        <a
          key={index}
          href="#"
          className="relative block rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
        >
          {/* Image */}
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-64 md:h-72 lg:h-80 object-cover" // taller image
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 bg-opacity-30 opacity-0 hover:opacity-100 transition duration-300"></div>

          {/* Course title */}
          <div className="absolute bottom-0 w-full bg-[#04329B] py-5 text-center"> {/* more padding */}
            <h3 className="text-white font-bold text-lg uppercase relative inline-block">
              {course.title}
              <span className="block h-1 w-0 bg-white mt-1 transition-all duration-300 hover:w-full"></span>
            </h3>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>



    </div>
  );
};

export default Academics;
