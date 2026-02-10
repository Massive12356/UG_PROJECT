import Navbar from '../components/Navbar';
import bgImage from '../assets/group-of-five-african-college-students-spending-time-together-on-campus-at-university-yard-black-afro-friends-studying-education-theme-photo.png';
import accomodation from '../assets/accomodation.png';
import transport from '../assets/transport.png';
import market from '../assets/market.png';
import { useState } from 'react';


const CampusLife = () => {

  const [activeTab, setActiveTab] = useState<'accomodation' | 'transportation' | 'market'>('accomodation');
    
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
                  <h1 className="text-7xl font-bold text-white border-b-4 border-white pb-4">Campus Life</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TAB NAVIGATION SECTION */}
      <section className="bg-white pt-20 pb-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-8 text-lg font-medium">
            <button 
              onClick={() => setActiveTab('accomodation')}
              className={activeTab === 'accomodation' 
                ? 'text-black border-b-2 border-black pb-3 font-bold' 
                : 'text-gray-500 hover:text-[#0e1861] pb-3 transition-colors'}
            >
              Accomodation
            </button>

            <button 
              onClick={() => setActiveTab('transportation')}
              className={activeTab === 'transportation' 
                ? 'text-black border-b-2 border-black pb-3 font-bold' 
                : 'text-gray-500 hover:text-[#0e1861] pb-3 transition-colors'}
            >
              Transportation
            </button>

            <button 
              onClick={() => setActiveTab('market')}
              className={activeTab === 'market' 
                ? 'text-black border-b-2 border-black pb-3 font-bold' 
                : 'text-gray-500 hover:text-[#0e1861] pb-3 transition-colors'}
            >
              Market & Food
            </button>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
        <section className="bg-white pt-8 pb-20">
            <div className="max-w-6xl mx-auto px-6">

            {/* ACCOMODATION SECTION */}
            {activeTab === 'accomodation' && (
                <>
                    <h2 className="text-4xl font-bold text-black mb-5">
                        Accomodation
                    </h2>

                    <div className="mt-6 space-y-6">
                        <img src={accomodation} alt="Hostels" className='w-full max-h-[450px] object-cover'/>

                        <div className="text-gray-800 text-base leading-relaxed space-y-4">
                            <p>
                                The University of Ghana, situated in Accra and esteemed for its 
                                academic excellence, provides its students with a range of 
                                accommodation choices. Students can choose between residence 
                                and 
                                non-residence options when applying for accommodation. 
                            </p>

                            <p>
                                University of Ghana Medical School operates an on-campus 
                                accommodation system for its hostels, allowing students to secure 
                                residence throughout their years of study. However, 
                                accommodation is 
                                allocated on a first-come, first-served basis, underscoring the need 
                                for 
                                promptness during the application process at the University of 
                                Ghana. 
                            </p>

                            <p>
                                The list of On-Campus Medical School Hostels are as follows:
                            </p>
                            <ul className="list-disc pl-5 space-y-4">
                                <li>B-Block (Address: GQP8+QW6)</li>
                                <li>R-Block (Address: GQP8+QW6)</li>
                                <li>Medical Students Hostel BQ (Address: GQQ8+67F)</li>
                                <li>Korle-Bu International Students Hostel (Address: GQW6+HQ2, Staff Road, Off Slater Avenue, Accra)</li>
                                <li>College of Health Sciences Hostel (Block-D. Address: GQP8+VCR, Accra)</li>
                                <li>Manels Hostel (Address: 39 Kwasheman St, Accra. 0243787907)</li>
                                <li>Chaplaincy Hostel (Address: Ama Badua Rd, Accra)</li>
                                <li>Anagkazo Medical Hostel (Address: GQMF+8QQ, Accra, 0240486384)</li>
                                <li>Crystal Hostel (Address: HPRW+VP8, Accra, 0277439745)</li>
                                <li>Mother’s Hostel</li>
                            </ul>  
                            
                        </div>
                    </div>
                </>
            )}


            {/* TRANSPORTATION SECTION */}
            {activeTab === 'transportation' && (
                <>
                    <h2 className="text-4xl font-bold text-black mb-5">
                        Transportation
                    </h2>

                    <div className="mt-6 space-y-6 ">
                        <img src={transport} alt="Transportation Vehicles" className='w-full max-h-[450px] object-cover'/>

                        <div className="text-gray-800 text-base leading-relaxed space-y-4">
                            <p>
                                At the University of Ghana Medical School, we understand 
                                that access to reliable transportation is essential for student 
                                success. That's why we're proud to offer this valuable service 
                                as part of our holistic approach to medical education. As part 
                                of our commitment to providing a supportive learning 
                                environment, we are proud to offer a dedicated transport 
                                service exclusively for our students. 
                            </p>

                            <p>
                                Navigating the bustling campus and bustling city can be 
                                daunting, especially for busy medical students balancing 
                                rigorous coursework and clinical rotations. That's why our 
                                transport service is here to ensure that students can travel 
                                safely and efficiently to and from campus, clinical placements, 
                                and other essential destinations. 
                            </p>
                            
                            <p>
                                Equipped with modern vehicles and operated by experienced 
                                drivers, our transport service provides reliable and convenient 
                                transportation options tailored to the needs of medical 
                                students. Whether you're commuting to early morning classes or late-night clinical rotations, our transport service is here to support you.
                            </p>
                        </div>
                    </div>
                </>
            )}

            {/* MARKET SECTION */}
            {activeTab === 'market' && (
                <>
                    <h2 className="text-4xl font-bold text-black mb-5">
                        Market and Food
                    </h2>

                    <div className="mt-6 space-y-6">
                        <img src={market} alt="Market" className='w-full max-h-[450px] object-cover'/>

                        <div className="text-gray-800 text-base leading-relaxed space-y-4">
                            <p>
                                Discover a range of options including comfortable and inviting 
                                lodging, an environmentally friendly event venue, a tennis court, 
                                and a restaurant serving delicious meals. The prices are highly 
                                affordable, and the staff is exceptionally friendly. This 
                                establishment is renowned for its authentic Ghanaian and 
                                continental cuisine. 
                            </p>

                            <p>
                                Enjoy a pleasant dining experience amidst beautiful scenery. The 
                                venue is well-suited for events accommodating up to 100 
                                guests. It offers a serene atmosphere, perfect for hosting your 
                                event. With ample parking and a spacious compound available 
                                for weddings and other activities, it provides everything you 
                                need for a memorable occasion.
                            </p>

                            <p>
                                The list of other popular restaurants are as follows:
                            </p>
                            <ul className="list-disc pl-5 space-y-4">
                                <li>Hoo-Gah Café & Restaurant (0267304546)</li>
                                <li>Korle – Bu Dining (Address: Located in Nursing & Midwifery Training College, Korle bu. 0553495809)</li>
                                <li>AfroBizz Cuisine (Address: Slater Ave, Accra. 0244998845)</li>
                                <li>Kailey’s Eatery (Address: GA 323-6469 House Number A22/1, Accra. 0556721531)</li>
                            </ul>  
                            
                        </div>
                    </div>
                </>
            )}

            </div>
        </section>

    </div>
  );
};

export default CampusLife;
