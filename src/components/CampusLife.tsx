import campusLifeImg from '../assets/group-male-african-medical-students-college 1.png';

const CampusLifeSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Campus life</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Experience a vibrant and dynamic campus life at the University of Ghana
            Medical School, where academic excellence meets a thriving community.
            Engage in diverse extracurricular activities, build lasting friendships,
            and enjoy state-of-the-art facilities designed to support your academic
            and personal growth.
          </p>
          <a
            href="/campus-life"
            className="text-blue-600 font-medium hover:underline"
          >
            Learn more
          </a>
        </div>

        {/* Image */}
        <div>
          <img
            src={campusLifeImg}
            alt="Campus Life"
            className="w-full rounded-md shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CampusLifeSection;
