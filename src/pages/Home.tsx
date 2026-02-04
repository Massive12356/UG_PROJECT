import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Stats from '../components/Stats';
import EventsNews from '../components/EventsNews';
import FacultyHighlight from '../components/FacultyHighlight';
import StudentStories from '../components/StudentStories';
import ResearchHighlights from '../components/ResearchHighlights';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <Stats />
      <EventsNews />
      <FacultyHighlight />
      <StudentStories />
      <ResearchHighlights />
    </div>
  );
};

export default Home;