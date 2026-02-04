import aboutImage from '../assets/aboutImage.png'

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">

            <p className="text-black font-medium text-lg mb-6 text-justify">
              Welcome to UGMS, a leading institution in medical education, research, and clinical practice, located in Accra the capital city of Ghana. For decades, we have been at the forefront of developing highly skilled and compassionate healthcare professionals dedicated to improving health outcomes and transforming lives. At UGMS, we offer a dynamic and innovative curriculum, state-of-the-art facilities, and a supportive learning environment. Our esteemed,educators and researchers, are committed to guiding and faculty, comprising renowned inspiring the next generation of medical leaders. Our vibrant campus life fosters a sense of community and encourages,personal growth, providing opportunities for students to engage in diverse extracurricular activities and build lasting relationships.Join us at UGMS, where excellence in education meets a commitment to community health and global impact. Explore
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-colors duration-300 cursor-pointer">
              Discover More
            </button>
          </div>
          <div className="md:w-1/2">
            <img 
              src={aboutImage}
              alt="About UGMS" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;