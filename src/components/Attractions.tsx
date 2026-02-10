import balmeImg from '../assets/balme-library.png';
import botanicalImg from '../assets/Botanical_Garden_in_Legon 1.png';
import collegeLibImg from '../assets/science-library.png';

const attractions = [
  {
    title: 'Balme Library',
    image: balmeImg,
    description:
      "Discover a sanctuary of knowledge at Balme Library, the academic heart of University of Ghana. Nestled within the campus, Balme Library offers a vast collection of resources, from timeless classics to cutting-edge research materials.",
  },
  {
    title: 'Legon Botanical Gardens',
    image: botanicalImg,
    description:
      'Escape to the lush haven of Legon Botanical Gardens, a verdant oasis in the heart of Accra. Nestled on the grounds of University of Ghana, this serene botanical retreat invites visitors to wander through vibrant landscapes, where exotic flora and fauna create a tapestry of color and fragrance.',
  },
  {
    title: 'College of Health Science Library',
    image: collegeLibImg,
    description:
      'Welcome to the knowledge hub of the health sciences at the College of Health Sciences Library. More than a repository of books, this dynamic space serves as a gateway to the latest advancements in medical research, healthcare literature, and academic resources.',
  },
];

const AttractionsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-15">
      <h2 className="text-4xl font-bold">Attractions</h2>
      <p className="text-gray-600 mt-1">Stop by for a visit!</p>
      <hr className="my-6" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {attractions.map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 object-cover mb-4"
            />
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AttractionsSection;
