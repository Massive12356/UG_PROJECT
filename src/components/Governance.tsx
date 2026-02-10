import governanceImg from '../assets/gold-chess-chess-board-game-business-metaphor-leadership-concept.png';

const GovernanceSection = () => {
  return (
    <section
      className="relative w-full h-[350px] bg-cover bg-center "
      style={{ backgroundImage: `url(${governanceImg})` }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h2 className="text-4xl font-bold mb-4">
            Governance and Leadership
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Discover the guiding forces behind UG Medical School.
            Meet our leaders and explore the structure that drives our
            commitment to excellence in medical education, research,
            and patient care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;
