import Navbar from '../components/Navbar';
import bgImage from '../assets/multinational-group-doctors-interns-standing-together 1.png';
import introImage from '../assets/close-up-african-american-hand-holding-stethoscope 1.png';
import who1 from '../assets/front-view-medical-control-covid19-concept (1) 1.png';
import who2 from '../assets/Group.png';
import who3 from '../assets/doctor-ophthalmologist-s-office 1.png';
import { Link } from 'react-router-dom';
import dean from '../assets/Mask Group 8 1.png'
import CampusLifeSection from '../components/CampusLife';
import GovernanceSection from '../components/Governance';
import LeadershipCards from '../components/Leadership';
import AttractionsSection from '../components/Attractions';
import GallerySection from '../components/Gallery';
import AccreditationSection from '../components/Accreditation';


const AboutUs = () => {
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
                <div className="max-w-2xl">
                  <h1 className="text-7xl font-bold text-white border-b-4 border-white pb-4">About Us</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT INTRO SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* TEXT */}
            <div>
              <h2 className="text-4xl font-bold text-black mb-4">
                A Leading Medical Education Institution in Africa
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed">
                The University of Ghana Medical School (UGMS) stands as a beacon of
                excellence in medical education, research, and clinical practice
                across Africa. With a rich history spanning decades, UGMS has
                consistently produced skilled and compassionate healthcare
                professionals who have made significant contributions to the medical
                field both locally and internationally. Our state-of-the-art
                facilities and dedicated faculty ensure the highest standards of
                training and innovation.
              </p>
            </div>

            {/* IMAGE */}
            <div>
              <img
                src={introImage}
                alt="Medical practice"
                className="w-full h-auto object-cover rounded-sm"
              />
            </div>

          </div>
        </div>
      </section>

      {/* VISION MISSION VALUES */}
      <section className="bg-white pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* VISION */}
            <div className="bg-emerald-500 text-white p-8 flex flex-col items-center justify-center transition-transform duration-300 md:hover:-translate-y-1 md:hover:shadow-lg md:cursor-pointer">
              <h3 className="text-4xl font-bold mb-4">Vision</h3>
              <p className="text-lg leading-relaxed text-center">
                To become a leading global institution of excellence in medical education, research, and health service delivery, creating a positive impact on the health systems of Ghana and the international community.
              </p>
            </div>

            {/* MISSION */}
            <div className="bg-blue-900 text-white p-8 flex flex-col items-center justify-center transition-transform duration-300 md:hover:-translate-y-1 md:hover:shadow-lg md:cursor-pointer">
              <h3 className="text-4xl font-bold mb-4">Mission</h3>
              <p className="text-lg leading-relaxed text-center">
                To produce highly qualified and competent medical doctors and medical scientists with excellent leadership skills to provide promotive, preventive, and curative health services for the nation and global community through world-class teaching, research, and knowledge dissemination.
              </p>
            </div>

            {/* CORE VALUES */}
            <div className="border border-gray-300 p-8 relative overflow-hidden flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <h3 className="text-4xl font-bold mb-10">Core Values</h3>

              <div className="relative flex flex-col items-center space-y-1 text-white font-bold text-lg">
                <span
                  className="bg-blue-800 px-6 py-2 rotate-[-6deg] w-4/5 shadow-md translate-x-[-12px] text-center transition-transform duration-300 ease-out md:hover:-rotate-2 md:hover:scale-105 active:scale-95"
                >
                  Excellence
                </span>

                <span
                  className="bg-green-600 px-6 py-2 rotate-[3deg] w-4/5 text-center shadow-md translate-x-[8px] transition-transform duration-300 ease-out md:hover:-rotate-2 md:hover:scale-105 active:scale-95"
                >
                  Compassion
                </span>

                <span
                  className="bg-yellow-500 text-black px-6 py-2 rotate-[-4deg] w-4/5 text-center shadow-md translate-x-[-6px] transition-transform duration-300 ease-out md:hover:-rotate-2 md:hover:scale-105 active:scale-95"
                >
                  Integrity
                </span>

                <span
                  className="bg-gray-800 px-6 py-2 rotate-[2deg] w-4/5 text-center shadow-md translate-x-[6px] transition-transform duration-300 ease-out md:hover:-rotate-2 md:hover:scale-105 active:scale-95"
                >
                  Collaboration
                </span>

                <span
                  className="bg-blue-400 px-6 py-2 rotate-[-3deg] w-full text-center shadow-md translate-x-[-10px] transition-transform duration-300 ease-out md:hover:-rotate-2 md:hover:scale-105 active:scale-95"
                >
                  Social Responsibility
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME ADDRESS OF THE DEAN */}
      <section className="bg-white py-15">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* TEXT */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-4">
                Welcome Address of Dean
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                It is my pleasure to welcome all our stakeholders to the 2021/22
                academic year. As some of you may know, we reverted to University of
                Ghana Medical School (UGMS) and University of Ghana Dental School from
                the School of Medicine and Dentistry on 1st August 2019 after
                University Council ratified the decision from the Collegiate Review
                Committee set up by the then Vice-Chancellor.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                It’s been two years trying to set our priorities right and working to
                maintain our brand. Then came the COVID-19 March 2020, a major
                disruptor. The School has had some challenges brought on by the
                pandemic but in addition to the challenge learnt very useful lessons.
                We have instituted virtual and blended teaching and learning with the
                use of more simulation by our clinical students. We are continuing to
                work hard with alumni and benevolent organizations to acquire more
                simulation equipment.
              </p>

              <Link to="#" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors duration-300">
                Read More
              </Link>
            </div>

            {/* IMAGE */}
            <div>
              <img
                src={dean}
                alt="Dean of UGMS"
                className="w-full h-auto md:h-125 object-cover"
              />
            </div>

          </div>

        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-black mb-12">
            Who We Are
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div
              className="border border-gray-300 bg-white overflow-hidden
                        transition-all duration-300 ease-out
                        md:hover:-translate-y-2 md:hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={who1}
                  alt="Student-centered learning environment"
                  className="w-full h-56 object-cover
                            transition-transform duration-300 ease-out
                            md:hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">
                  Student-centered learning environment
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We prioritize students by offering personalized mentorship, small class
                  sizes, and innovative teaching methods. Our curriculum is continuously
                  updated to reflect medical advancements, ensuring comprehensive education.
                  We support students through academic resources, extracurricular activities,
                  and services that foster both academic and personal growth.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="border border-gray-300 bg-white overflow-hidden
                        transition-all duration-300 ease-out
                        md:hover:-translate-y-2 md:hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={who2}
                  alt="Commitment to Community Health"
                  className="w-full h-56 object-cover
                            transition-transform duration-300 ease-out
                            md:hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">
                  Commitment to Community Health
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Our commitment to community health drives our outreach programs, health
                  campaigns, and partnerships with local providers. We focus on public health
                  awareness, preventive care, and quality healthcare access, fostering social
                  responsibility among students to improve health outcomes and reduce
                  disparities.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div
              className="border border-gray-300 bg-white overflow-hidden
                        transition-all duration-300 ease-out
                        md:hover:-translate-y-2 md:hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={who3}
                  alt="Innovative and Inspiring Faculty"
                  className="w-full h-56 object-cover
                            transition-transform duration-300 ease-out
                            md:hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">
                  Innovative and Inspiring Faculty
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Our faculty comprises leading educators and researchers dedicated to
                  excellence in medical education. They employ innovative teaching methods,
                  conduct groundbreaking research, and provide mentorship that inspires
                  students to excel. Their expertise and passion create a dynamic learning
                  environment that prepares students for successful medical careers.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CampusLifeSection />
      <GovernanceSection />
      <LeadershipCards />
      <AttractionsSection />
      <GallerySection />
      <AccreditationSection />

    </div>
  );
};

export default AboutUs;