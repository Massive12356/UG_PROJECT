import dean from "../assets/dean.png";

const FacultyHighlight = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src={dean}
              alt="Faculty Member" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 bg-[#000A49] text-white p-8">
            <h2 className="text-8xl font-bold mb-6 text-[#B6A400]">
              FACULTY
            </h2>
            <p className="text-lg mb-6 text-white text-justify">
            Eric Sampane-Donkor is a Professor of 
Bacteriology and Global Health. Currently, he is 
the Head of the Department of Medical 
Microbiology, University of Ghana Medical 
School. He holds a PhD in Medical 
Microbiology from the London School of 
Hygiene and Tropical Medicine, UK, and a PhD 
in Public Health from the University of Iceland, 
Reykjavík, Iceland. He undertook postdoctoral 
training in Microbial Genomics at University of 
Cambridge, UK.             
            </p>

            <p className="text-lg mb-6 text-white text-justify">
            Professor Sampane-Donkor has 
authored 142 articles, mainly in international 
journals, of which he is the first and/or senior 
author of 75. Currently, he is the PI of three NIH 
(USA) grants- R01AI169674, D43TW012487, 
UE5TW012566. In recognition of his 
contribution to science in Ghana, Professor 
Sampane-Donkor was elected to Fellowship of 
the Ghana Academy of Arts and Sciences (FGA) 
in 2021. Subsequently, in 2022, he was inducted 
as a Fellow of the Royal College of Pathologists 
(FRCPath), England, for his outstanding research 
contribution in Medical Microbiology. 
Furthermore, in 2023, he was endorsed as an 
Exceptional Talent in Infectious Diseases by the 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyHighlight;