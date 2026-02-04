import { useState } from "react";
import Navbar from '../components/Navbar';
import bgImage from '../assets/dpImage.png';
import img7 from '../assets/img7.png'; // Basic Sciences
import img8 from '../assets/img8.png'; // Paraclinical
import img9 from '../assets/img9.png'; // Clinical
import img10 from '../assets/img10.png'; // Centres

const Departments = () => {
  // Fix: specify the type so numbers can be keys
  const [openAccordions, setOpenAccordions] = useState<{ [key: number]: boolean }>({});

  const toggleAccordion = (index: number) => {
    setOpenAccordions({
      ...openAccordions,
      [index]: !openAccordions[index],
    });
  };

  const departmentsData = [
    {
      title: "Basic Sciences",
      image: img7,
      subDisciplines: ["Anatomy", "Medical Biochemistry", "Physiology"],
    },
    {
      title: "Paraclinical",
      image: img8,
      subDisciplines: [
        "Chemical Pathology",
        "Haematology",
        "Medical Microbiology",
        "Medical Pharmacology",
        "Pathology",
      ],
    },
    {
      title: "Clinical",
      image: img9,
      subDisciplines: [
        "Anaesthesia",
        "Child Health",
        "Community Health",
        "Medicine and Therapeutics",
        "Obstetrics and Gynaecology",
        "Psychiatry",
        "Radiology",
        "Surgery",
      ],
    },
    {
      title: "Centres",
      image: img10,
      subDisciplines: [
        "Skills & Simulation Centre",
        "Centre for Tropical and Clinical Pharmacology Therapeutics",
      ],
    },
  ];

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
                  <h1 className="text-7xl font-bold text-white">Departments</h1>
                </div>

                <div className="max-w-xl text-justify mt-36 border-white">
                  <p className="text-2xl text-white leading-relaxed">
                    Our Medical School's Departments are the vibrant hubs where expertise meets compassion, where research sparks innovation, and where every student discovers their path to making a difference in healthcare. Join us on a journey of discovery and excellence in the diverse realms of medicine!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AFTER HERO — Departments Description Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-lg md:text-xl text-black font-medium leading-relaxed">
            In its current form, the School of Medicine and Dentistry is a purely Clinical School offering two (2) programmes, namely: <br />
            Medicine (Regular and GEMP) and Dentistry. The School of Medicine and Dentistry is made up of the following departments. There are seven (7) Departments in Medicine and seven (7) Dentistry Departments with one centre, the Centre for Tropical and Clinical Pharmacology Therapeutics.
          </p>
        </div>
      </section>

      {/* DEPARTMENTS & CENTRES SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-12 text-center uppercase">
            DEPARTMENTS & CENTRES
          </h2>

          {departmentsData.map((dept, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-start mb-12 gap-8">
              
              {/* LEFT — Image */}
              <div className="lg:w-1/3">
                <img
                  src={dept.image}
                  alt={dept.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* RIGHT — Accordion */}
              <div className="lg:w-2/3">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left text-blue-700 font-bold py-4 px-6 rounded-lg flex justify-between items-center focus:outline-none border border-blue-200"
                >
                  <span className="text-xl">{dept.title}</span>
                  <span className="text-2xl">{openAccordions[index] ? "−" : "+"}</span>
                </button>

                {/* Sub-disciplines */}
                <div
                  className={`overflow-hidden transition-all duration-500`}
                  style={{
                    maxHeight: openAccordions[index] ? `${dept.subDisciplines.length * 2.5}rem` : "0",
                  }}
                >
                  <ul className="mt-4 ml-6 list-disc text-gray-700 font-medium text-lg">
                    {dept.subDisciplines.map((sub, subIndex) => (
                      <li key={subIndex} className="py-1">{sub}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>
    </div>
  );
};

export default Departments;
