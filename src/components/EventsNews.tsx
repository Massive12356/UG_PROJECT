interface Event {
  id: number;
  date: string;
  title: string;
}

interface News {
  id: number;
  category: string;
  title: string;
}

const eventsData: Event[] = [
  { id: 1, date: "JUL 3rd", title: "School of Public Health 30TH Anniversary Celebration Launch" },
  { id: 2, date: "JUL 17th", title: "Launch of UG Strategic Plan (2024 – 2029) and Outdooring of 3 Major UG Documents Venue: Great Hall" },
  { id: 3, date: "JUL 19th", title: "UG - Imperial College Student Venture Support Programme - Demo Day Venue: ISSER Conference Facility" },
  { id: 4, date: "JUL 25th", title: "Inaugural Lecture - Rev. Fr. Prof. Michael Perry Kweku Okyerefo Venue: Great Hall" }
];

const newsData: News[] = [
  {
    id: 1,
    category: "Maiden Workshop",
    title:
      "The Research and Capacity Building in Antimicrobial Resistance in West Africa Project Officially Launched at UG Medical School",
  },
  {
    id: 2,
    category: "Lecture",
    title:
      "Prof. Mark Tettey Shares Insights on Restoring the Swallowing Mechanism Through Advanced Surgical Techniques",
  },
  {
    id: 3,
    category: "Training",
    title:
      "Improving Health Systems for Effective Disease Elimination and Eradication Training Commences for Health Professionals",
  },
  {
    id: 4,
    category: "Sanitation",
    title:
      "Prof. Templeton Highlights the Impact of Academic Research on Addressing the Global Sanitation Crisis",
  },
  {
    id: 5,
    category: "Research",
    title:
      "UG Medical School Researchers Secure International Grant to Advance Biomedical Innovation and Public Health Studies",
  },
  {
    id: 6,
    category: "Conference",
    title:
      "University of Ghana Medical School Hosts International Conference on Emerging Infectious Diseases and Health Policy",
  },
];


const EventsNews = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-bold text-[#B9AC00] mb-8 uppercase">Upcoming Events</h2>
            <div className="space-y-6">
              {eventsData.map((event) => (
                <div 
                  key={event.id} 
                  className="flex items-center p-4  rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="bg-blue-900 text-white font-medium py-2 px-4 rounded mr-4">
                    {event.date}
                  </div>
                  <div className="text-blue-600 font-bold text-lg flex-1 text-center">
                    {event.title}
                  </div>

                  <div className="bg-[#00006E] text-white rounded transition-colors duration-300 whitespace-nowrap ml-4 w-30 h-25 flex items-center justify-center">
                    <a href="#" className="hover:underline cursor-pointer" >
                      View Details
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-bold text-[#B9AC00] mb-8 uppercase">In the News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsData.map((news) => (
                <div 
                  key={news.id} 
                  className="bg-[#002383] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-white"
                >
                  <div className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                    {news.category}
                  </div>
                  <h3 className=" font-medium">
                    {news.title}
                  </h3>
                  <a href="#" className="text-white font-medium mt-3 inline-block hover:text-yellow-500 hover:underline">Read Article</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <a href="#" className="text-blue-800 font-bold text-2xl hover:text-yellow-500 hover:underline">View all blog</a>
      </div>
    </section>
  );
};

export default EventsNews;