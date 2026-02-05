import galleryImg1 from '../assets/Streptococcus-pneumoniae-or-pneumococcus-a-Gram-positive-coccus-shaped-pathogenic-bacteria-which-causes-many-types-of-pneumococcal-infections-in-addition-to-pneumonia.png';
import galleryImg2 from '../assets/neuro-photo 1.png';

const GallerySection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-15">
      <h2 className="text-4xl font-bold mb-6">Gallery</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={galleryImg1}
          alt="Gallery image 1"
          className="w-full h-80 object-cover"
        />
        <img
          src={galleryImg2}
          alt="Gallery image 2"
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        <span className="w-2 h-2 bg-gray-400 rounded-full" />
        <span className="w-2 h-2 bg-gray-800 rounded-full" />
        <span className="w-2 h-2 bg-gray-400 rounded-full" />
      </div>
    </section>
  );
};

export default GallerySection;
