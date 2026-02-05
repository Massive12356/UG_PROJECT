import deanImg from '../assets/Mask Group 8 1.png';
import officerImg from '../assets/school-officer.png';
import financeImg from '../assets/finance-officer.png';
import headsImg from '../assets/heads.png';

const leaders = [
  {
    title: 'Dean',
    image: deanImg,
  },
  {
    title: 'School Officer',
    image: officerImg,
  },
  {
    title: 'School Finance Officer',
    image: financeImg,
  },
  {
    title: 'Heads of Department',
    image: headsImg,
  },
];

const LeadershipCards = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="border rounded-md p-4 text-center hover:shadow-lg transition-all duration-300 ease-out
                        md:hover:-translate-y-2 md:hover:shadow-xl"
          >
            <img
              src={leader.image}
              alt={leader.title}
              className="w-full h-[260px] object-cover rounded-md mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">
              {leader.title}
            </h3>
            <a
              href="#"
              className="text-blue-600 text-sm hover:underline"
            >
              Learn more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipCards;
