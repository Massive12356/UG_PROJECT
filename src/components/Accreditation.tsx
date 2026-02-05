import gmdcLogo from '../assets/MDCGH.png';
// import gtecLogo from '../assets/gtec.png';

const AccreditationSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <h2 className="text-4xl font-bold mb-4">Accreditation</h2>
      <p className="text-gray-600 mb-10">
        The University of Ghana Medical School is accredited by:
      </p>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex items-center gap-4">
          <img src={gmdcLogo} alt="GMDC" className="h-16" />
          <span className="font-medium">
            Ghana Medical and Dental Council
          </span>
        </div>

        <div className="flex items-center gap-4">
          <img src={gmdcLogo} alt="GTEC" className="h-16" />
          <span className="font-medium">
            Ghana Tertiary Education Commission
          </span>
        </div>
      </div>
    </section>
  );
};

export default AccreditationSection;
