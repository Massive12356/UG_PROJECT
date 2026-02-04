import MicroBio from "../assets/microBio.png"

interface ResearchItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

const researchData: ResearchItem[] = [
  {
    id: 1,
    title: "Pathogen persistence in food and the food chain",
    description: "Investigating how pathogens survive and spread through food production systems to improve food safety protocols.",
    category: "Food Safety",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80"
  },
  {
    id: 2,
    title: "Antimicrobial resistance in Ghana",
    description: "Studying patterns of antibiotic resistance in local healthcare settings to develop targeted intervention strategies.",
    category: "Public Health",
    image: MicroBio
  },
  {
    id: 3,
    title: "Brain modeling and computational neuroscience",
    description: "Developing advanced computational models to understand brain function and neurological disorders.",
    category: "Neuroscience",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

const ResearchHighlights = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-4xl font-bold text-center text-gray-800 mb-12 uppercase">
          Research Highlights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchData.map((research) => (
            <div 
              key={research.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={research.image} 
                alt={research.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                  {research.category}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {research.title}
                </h3>
                <p className="text-gray-600">
                  {research.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchHighlights;