import Navbar from '../components/Navbar';
import bgImage from '../assets/research.png';
import R1 from '../assets/R1.png'; // Maternal and Child Health
import R2 from '../assets/R2.png'; // Cancer
import R3 from '../assets/R3.png'; // Infectious Disease
import R4 from '../assets/R4.png'; // Cardiovascular
import R5 from '../assets/R5.png'; // Health Global
import R6 from '../assets/R6.png'; // Research Collaborations Map
import R7 from '../assets/R7.png'; // Research Ethics  
import R8 from '../assets/R8.png'; // Research Policy
import R9 from '../assets/R9.png'; // Research Newsletter
import R10 from '../assets/R10.png'; // Faculty Research
import R11 from '../assets/R11.png'; // Faculty Publications
import R12 from '../assets/R12.png'; // Antimicrobial Resistance
import R13 from '../assets/R13.png'; // Zero Malaria
import R14 from '../assets/R14.png'; // Occurrence of Influenza

const researchAreas = [
  { title: "Maternal and Child Health", image: R1 },
  { title: "Cancer", image: R2 },
  { title: "Infectious Diseases & Antimicrobial Resistance", image: R3 },
  { title: "Cardiovascular Diseases", image: R4 },
  { title: "Health Global", image: R5 },
];


const Research = () => {
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
              <div className="flex justify-start items-center gap-24">
                <div className="max-w-xl">
                  <h1 className="text-7xl font-bold text-white border-b-4 border-white pb-4">Research</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH CONTENT SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-6 uppercase">Research</h2>
          <p className="text-lg md:text-xl text-black leading-relaxed font-medium mb-12">
            At the University of Ghana Medical School, our research initiatives are dedicated to 
            addressing the most pressing health challenges in Sub-Saharan Africa. Our commitment 
            to impactful and innovative research drives our efforts in the following key areas:
          </p>

          {/* RESEARCH GRID */}
          <div className="grid grid-cols-3 gap-6">

            {/* TOP ROW */}
            <div className="col-span-2 relative overflow-hidden rounded-lg shadow-lg h-80 sm:h-96 group">
              <img
                src={R1}
                alt={researchAreas[0].title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-xl sm:text-2xl font-bold text-center px-4">
                  {researchAreas[0].title.toUpperCase()}
                </h3>
              </div>
            </div>

            <div className="col-span-1 relative overflow-hidden rounded-lg shadow-lg h-80 sm:h-96 group">
              <img
                src={R2}
                alt={researchAreas[1].title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-xl sm:text-2xl font-bold text-center px-4">
                  {researchAreas[1].title.toUpperCase()}
                </h3>
              </div>
            </div>

            {/* BOTTOM ROW */}
            <div className="col-span-1 relative overflow-hidden rounded-lg shadow-lg h-64 sm:h-80 group">
              <img
                src={R3}
                alt={researchAreas[2].title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-lg sm:text-xl font-bold text-center px-4">
                  {researchAreas[2].title.toUpperCase()}
                </h3>
              </div>
            </div>

            <div className="col-span-1 relative overflow-hidden rounded-lg shadow-lg h-64 sm:h-80 group">
              <img
                src={R4}
                alt={researchAreas[3].title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-lg sm:text-xl font-bold text-center px-4">
                  {researchAreas[3].title.toUpperCase()}
                </h3>
              </div>
            </div>

            <div className="col-span-1 relative overflow-hidden rounded-lg shadow-lg h-64 sm:h-80 group">
              <img
                src={R5}
                alt={researchAreas[4].title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-lg sm:text-xl font-bold text-center px-4">
                  {researchAreas[4].title.toUpperCase()}
                </h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RESEARCH COLLABORATIONS SECTION */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-6 uppercase">Research Collaborations</h2>

          <div className="overflow-hidden rounded-lg shadow-lg mb-6">
            <img
              src={R6}
              alt="Research Collaborations Map"
              className="w-full h-auto object-cover"
            />
          </div>

          <p className="text-lg md:text-xl text-black leading-relaxed font-medium mb-12">
            Collaborations of the University of Ghana Medical School in the last decade; each blue 
            dot represents a collaborating institution; hover over a blue dot to identify the institution.
          </p>

          {/* RESEARCH COLLABORATIONS CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[R7, R8, R9].map((img, idx) => {
              const titles = ["Research Ethics", "Research Policy", "Research Newsletter"];
              return (
                <div key={idx} className="relative overflow-hidden rounded-lg shadow-lg h-64 sm:h-80 group">
                  <img
                    src={img}
                    alt={titles[idx]}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-lg sm:text-xl font-bold text-center px-4">
                      {titles[idx].toUpperCase()}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DISCOVERY & INNOVATION SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-12 uppercase">
            Discovery & Innovation to Improve Human Health
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {/* R10 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg h-96 lg:h-[28rem] group">
              <img
                src={R10}
                alt="Faculty Research"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <p className="text-white text-lg sm:text-xl font-medium text-center">
                  Faculty research initiatives fostering innovations that improve human health and well-being.
                </p>
              </div>
            </div>

            {/* R11 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg h-96 lg:h-[28rem] group">
              <img
                src={R11}
                alt="Faculty Publications"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex flex-col items-start justify-center p-8">
                <h3 className="text-white text-2xl font-bold mb-4">Faculty Research Focus</h3>
                <ul className="text-white text-lg space-y-2 list-disc list-inside">
                  <li>Cancer</li>
                  <li>Cardiovascular health</li>
                  <li>Immunology</li>
                  <li>Genetics</li>
                  <li>Neuroscience</li>
                  <li>Stem cells</li>
                </ul>
              </div>
            </div>
          </div>

          {/* RECENT PUBLICATIONS */}
          <h3 className="text-3xl font-bold text-black mb-6 uppercase">Recent Publications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[R12, R13, R14].map((img, idx) => {
              const texts = [
                "Antimicrobial Resistance in Ghana from a One Health Perspective",
                "Zero Malaria: A Mirage or Reality For Populations of Sub-Saharan Africa in Health Transition",
                "Occurrence of Influenza and Bacterial infections in Cancer Patients Receiving Radiotherapy in Ghana",
              ];
              return (
                <div key={idx} className="relative overflow-hidden rounded-lg shadow-lg group flex flex-col md:flex-row items-center">
                  <img
                    src={img}
                    alt={texts[idx]}
                    className="w-full md:w-1/2 h-64 md:h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-6 md:w-1/2 flex items-center">
                    <p className="text-black text-lg font-medium">{texts[idx]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Research;
