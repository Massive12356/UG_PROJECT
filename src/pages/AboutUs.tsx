import Navbar from '../components/Navbar';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          This page uses mock data for now.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;