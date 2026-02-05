import Navbar from '../components/Navbar';
import bgImage from '../assets/dpImage.png';
import P1 from '../assets/dan_ofori_provost 1.png'; 
import P2 from '../assets/female-doctor-writing-clipboard 1.png';
import P3 from '../assets/black-nurse-man-getting-ready-work.png';
import P4 from '../assets/img4.png';
import P5 from '../assets/young-african-american-doctor-white-uniform-isolated-white-background-standing-with-arms-pocked-looking-professional-highly-competent-field-medical-specialization 1.png';
import P6 from '../assets/portrait-african-american-man 1.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ResearchAccordion from '../components/ResearchAccordion';
import R1 from '../assets/iStock-1269922792 2.png';
import R2 from '../assets/neuro-photo 1.png';


const NewsEvents = () => {
  const [activeTab, setActiveTab] = useState<'people' | 'general' | 'research'>('people');

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
                  <h1 className="text-7xl font-bold text-white">News and Events</h1>
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
              onClick={() => setActiveTab('research')}
              className={activeTab === 'research' 
                ? 'text-black border-b-2 border-black pb-3 font-bold' 
                : 'text-gray-500 hover:text-[#0e1861] pb-3 transition-colors'}
            >
              Research
            </button>

            <button 
              onClick={() => setActiveTab('general')}
              className={activeTab === 'general' 
                ? 'text-black border-b-2 border-black pb-3 font-bold' 
                : 'text-gray-500 hover:text-[#0e1861] pb-3 transition-colors'}
            >
              General
            </button>

            <button 
              onClick={() => setActiveTab('people')}
              className={activeTab === 'people' 
                ? 'text-black border-b-2 border-black pb-3 font-bold' 
                : 'text-gray-500 hover:text-[#0e1861] pb-3 transition-colors'}
            >
              People
            </button>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bg-white pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* TITLE & SEARCH */}
          {activeTab === 'people' && (
            <>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
                <div>
                  <h2 className="text-4xl font-bold text-black mb-2">People</h2>
                  <p className="text-lg text-gray-600 max-w-2xl">
                    News and stories of people in the University of Ghana Medical School.
                  </p>
                </div>

                <div className="mt-4 md:mt-0">
                  <input
                    type="text"
                    placeholder="Search News"
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0e1861]"
                  />
                </div>
              </div>
            </>
          )}

          {/* PEOPLE CONTENT */}
          {activeTab === 'people' && (
            <>
              {/* FEATURED STORY */}
              <div className="mb-14">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <img
                      src={P1}
                      alt="Featured Person"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-black mb-2">
                      Celebrating Excellence: University of Ghana Medical School Honors
                      Renowned Physician for a Lifetime of Service to Medical Education
                    </h3>
                    <p className="text-gray-700 text-base">
                      Prof has been honored for his outstanding work in bringing an end to
                      the COVID-19 pandemic.
                    </p>
                  </div>
                </div>
              </div>

              {/* OTHER STORIES */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>
                  <img
                    src={P2}
                    alt="Student Spotlight"
                    className="w-full h-68 object-cover mb-4"
                  />
                  <h4 className="font-bold text-lg text-black">
                    Student Spotlight: Richard Appiah Receives National Scholarship for
                    Outstanding Contributions to Healthcare Advocacy
                  </h4>
                </div>

                <div>
                  <img
                    src={P3}
                    alt="Alumni Achievement"
                    className="w-full h-68 object-cover mb-4"
                  />
                  <h4 className="font-bold text-lg text-black">
                    Alumni Achievements: Emeritus Sarpong Emmanuel, Class of 2018,
                    Recognized as Emerging Leader in Pediatric Medicine
                  </h4>
                </div>

                <div>
                  <img
                    src={P4}
                    alt="Compassionate Care"
                    className="w-full h-68 object-cover mb-4"
                  />
                  <h4 className="font-bold text-lg text-black">
                    Compassionate Care in Action: University of Ghana Professor Awarded
                    for Humanitarian Efforts in Global Health Crisis
                  </h4>
                </div>

                <div>
                  <img
                    src={P5}
                    alt="Student Spotlight"
                    className="w-full h-68 object-cover mb-4"
                  />
                  <h4 className="font-bold text-lg text-black">
                    Student Spotlight: Richard Appiah Receives National Scholarship for
                    Outstanding Contributions to Healthcare Advocacy
                  </h4>
                </div>

                <div>
                  <img
                    src={P3}
                    alt="Alumni Achievement"
                    className="w-full h-68 object-cover mb-4"
                  />
                  <h4 className="font-bold text-lg text-black">
                    Alumni Achievements: Emeritus Sarpong Emmanuel, Class of 2018,
                    Recognized as Emerging Leader in Pediatric Medicine
                  </h4>
                </div>

                <div>
                  <img
                    src={P6}
                    alt="Compassionate Care"
                    className="w-full h-68 object-cover mb-4"
                  />
                  <h4 className="font-bold text-lg text-black">
                    Compassionate Care in Action: University of Ghana Professor Awarded
                    for Humanitarian Efforts in Global Health Crisis
                  </h4>
                </div>

              </div>

              <div className='w-full flex justify-center mt-8'>
                <Link to="#" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors duration-300">
                  More Stories
                </Link>
              </div>
            </>
          )}


          {/* GENERAL SECTION */}
          {activeTab === 'general' && (
            <>
              <h2 className="text-4xl font-bold text-black mb-10">
                General
              </h2>

              <p className='mb-100'>This is a mock up section</p>
            </>
          )}

          {/* RESEARCH SECTION */}
          {activeTab === 'research' && (
            <>
              <h2 className="text-4xl font-bold text-black mb-5">
                Research
              </h2>

              <ResearchAccordion
                title="Antimicrobial Resistance in Ghana from a One Health Perspective"
                image={R1}
              >
                <p>
                  Antimicrobial resistance (AMR) is a significant and growing threat to global
                  health, with far-reaching implications for human, animal, and environmental
                  health. In Ghana, AMR poses a critical challenge, as the country grapples with
                  increasing resistance of pathogens to commonly used antibiotics.
                  Understanding and addressing AMR from a One Health perspective—a holistic
                  approach that recognizes the interconnectedness of human, animal, and
                  environmental health—is essential to effectively combat this complex issue.
                </p>

                <h4 className="font-bold text-lg">The One Health Concept</h4>
                <p>
                  The One Health approach emphasizes the importance of integrated efforts across
                  multiple sectors to address health challenges that arise at the
                  human–animal–environment interface. AMR is a quintessential One Health issue,
                  as the misuse and overuse of antibiotics in humans, animals, and agriculture
                  contribute to the emergence and spread of resistant pathogens.
                </p>

                <p>
                  In Ghana, this approach is particularly relevant given the close interactions
                  between humans and animals, and the significant role of agriculture in the
                  economy.
                </p>

                <h4 className="font-bold text-lg">Human Health and AMR</h4>
                <p>
                  In Ghana, the overuse of antibiotics in both clinical and community settings is
                  a major driver of AMR. Self-medication with antibiotics, often without a
                  prescription, is common, leading to inappropriate use.
                </p>

                <p>
                  Additionally, inadequate infection prevention and control measures in
                  healthcare facilities further contribute to the spread of resistant
                  infections. The rise of multidrug-resistant organisms, such as
                  Methicillin-resistant Staphylococcus aureus (MRSA) and extended-spectrum
                  beta-lactamase (ESBL)-producing bacteria, underscores the urgency of addressing
                  AMR in the human health sector.
                </p>

                <h4 className="font-bold text-lg">Animal Health and Agriculture</h4>
                <p>
                  The use of antibiotics in livestock farming is another critical component of AMR in Ghana. Antibiotics are frequently used not only for treating infections in animals but also as growth promoters to enhance productivity.
                </p>

                <p>
                  This practice accelerates the development of resistant bacteria in animals, which can be transmitted to humans through direct contact, consumption of contaminated meat, or through the environment. Monitoring and regulating antibiotic use in agriculture are crucial steps in mitigating the spread of
                  AMR.
                </p>

                <h4 className="font-bold text-lg">Environmental Health and AMR</h4>
                <p>
                  The environment plays a significant role in the transmission and dissemination
                  of resistant bacteria. In Ghana, poor waste management practices, particularly
                  the improper disposal of pharmaceutical waste and untreated sewage, contribute
                  to the contamination of water bodies with antibiotic residues and resistant
                  bacteria.
                </p>

                <p>
                  These environmental reservoirs of resistance can affect both human and animal
                  populations, further complicating the control of AMR.
                </p>

                <h4 className="font-bold text-lg">Addressing AMR in Ghana: A One Health Strategy</h4>
                <p>
                  To effectively combat AMR in Ghana, a coordinated One Health approach is
                  essential. This involves strengthening surveillance systems to monitor
                  antibiotic use and resistance patterns across human, animal, and environmental
                  sectors.
                </p>

                <p>
                  Public awareness campaigns to educate the population about the dangers of
                  antibiotic misuse and the importance of responsible antibiotic use are also
                  crucial.
                </p>

                <p>
                  In the healthcare sector, efforts should focus on improving prescription
                  practices, enhancing infection prevention and control measures, and ensuring
                  the availability of accurate diagnostic tools to guide appropriate antibiotic
                  use.
                </p>

                <p>
                  In agriculture, promoting good farming practices and alternative strategies
                  for disease prevention, such as vaccination, can reduce the reliance on
                  antibiotics. Additionally, environmental regulations need to be enforced to
                  ensure the safe disposal of pharmaceutical waste and to mitigate environmental
                  contamination.
                </p>

                <p>
                  Collaboration among stakeholders—government agencies, healthcare providers,
                  veterinarians, farmers, and environmental authorities—is vital to successfully
                  address AMR and safeguard public health in Ghana.
                </p>
              </ResearchAccordion>

              <ResearchAccordion
                title="Building Models of the brain to take them apart."
                image={R2}
              >
                <h4 className="font-bold text-lg">Building Models of the Brain to Take Them Apart</h4>

                <p>
                  The human brain, a marvel of complexity and efficiency, has long been the focus
                  of scientific curiosity and investigation. Understanding how this intricate
                  organ works is key to unlocking the mysteries of human cognition, emotion, and
                  behavior. To achieve this, researchers have increasingly turned to an approach
                  that may seem paradoxical at first—building detailed models of the brain with
                  the ultimate goal of taking them apart.
                </p>

                <h4 className="font-bold text-lg">The Rise of Computational Neuroscience</h4>
                <p>
                  At the heart of this endeavor is the field of computational neuroscience, which
                  merges principles from biology, physics, mathematics, and computer science to
                  create detailed models of brain function. These models range from simple
                  simulations of individual neurons to large-scale networks that attempt to
                  replicate entire brain regions or even the whole brain. By building these
                  models, scientists aim to replicate the brain’s processes in a controlled
                  environment, allowing them to test hypotheses and understand the underlying
                  mechanisms of neural activity.
                </p>

                <p>
                  One of the most ambitious projects in this field is the Human Brain Project
                  (HBP), a multi-billion-euro initiative aimed at simulating the human brain using
                  supercomputers. This project seeks to create a digital replica of the brain that
                  can be used to explore brain function and disease, offering insights that are
                  difficult or impossible to obtain through traditional experiments alone.
                </p>

                <h4 className="font-bold text-lg">The Power of Reductionism</h4>
                <p>
                  The strategy of building models to take them apart is rooted in the scientific
                  method of reductionism—breaking down complex systems into their simpler
                  components to understand the whole. By constructing detailed models of neural
                  circuits or brain regions, researchers can systematically alter individual
                  variables to observe the effects on the system.
                </p>

                <p>
                  For example, by simulating the interactions between different types of neurons
                  in a model of the visual cortex, scientists can explore how visual information
                  is processed and integrated. Similarly, models of synaptic plasticity—how
                  connections between neurons strengthen or weaken over time—provide insights
                  into learning and memory formation.
                </p>

                <h4 className="font-bold text-lg">Aiding in the Study of Brain Disorders</h4>
                <p>
                  Building models of the brain to deconstruct them is particularly valuable in
                  the study of neurological and psychiatric disorders. Conditions such as
                  Alzheimer’s disease, schizophrenia, and epilepsy involve complex disruptions
                  in brain function that are difficult to study directly in living patients.
                </p>

                <p>
                  By creating models that mimic these disorders, researchers can systematically
                  test potential treatments and interventions. For instance, in models of
                  epilepsy, researchers can simulate the effects of different drugs on neural
                  activity, identifying therapies that might stabilize brain function. In
                  neurodegenerative diseases like Parkinson’s, models help explore strategies
                  to slow or reverse neuron loss.
                </p>

                <h4 className="font-bold text-lg">The Ethical and Practical Implications</h4>
                <p>
                  While building and dissecting brain models holds tremendous promise, it also
                  raises ethical and practical considerations. Increasingly accurate brain
                  simulations blur the line between artificial and biological intelligence,
                  raising questions about consciousness and ethical responsibility. As models
                  become more sophisticated, the need for clear ethical guidelines will only
                  grow.
                </p>

                <p>
                  Practically, the challenge lies in the sheer complexity of the brain. Even the most advanced models are 
                </p>
              </ResearchAccordion>
            </>
          )}

        </div>
      </section>

    </div>
  );
};

export default NewsEvents;