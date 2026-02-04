import bgImage from '../assets/storesImage.png'
import { useState } from 'react'
import overLay1 from '../assets/overLay1.png'
import overLay2 from '../assets/overLay2.png'

interface Testimonial {
  id: number
  quote: string
  name: string
  year: string
  program: string
  image: string
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      "The clinical rotations have been an invaluable experience, bridging the gap between theory and practice. The faculty's support has made me feel prepared and confident as I progress in my medical journey.",
    name: "Stephanie Agapert",
    year: "3rd Year GEMP",
    program: "Ghana Emergency Medicine Program",
    image: overLay1
  },
  {
    id: 2,
    quote:
      "This medical school offers a perfect blend of hands-on learning and research opportunities. The supportive community and strong curriculum have greatly enriched my education.",
    name: "Alice Kumakuma",
    year: "5th Year MB ChB",
    program: "Medicine and Bachelor of Surgery",
    image: overLay2
  }
]

const StudentStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex(prev =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex(prev =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Section Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 h-full flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Student Stories
        </h2>

        <div className="relative w-full px-4">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${
                index === currentIndex ? 'flex' : 'hidden'
              } flex-col md:flex-row items-stretch w-full `}
            >

              {/* Text Side */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-white">
                <p className="text-4xl italic mb-6">
                  “{testimonial.quote}”
                </p>

                <h3 className="text-xl font-bold">
                  {testimonial.name}
                </h3>

                <p className=" mt-1">
                  {testimonial.program}
                </p>

                <p className="text-sm">
                  {testimonial.year}
                </p>
              </div>


              {/* Image Side */}
              <div className="md:w-1/2 h-[300px] md:h-[420px]">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}

          {/* Controls */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 flex items-center justify-center bg-white/70 hover:bg-white transition rounded-full"
            >
              ‹
            </button>

            <div className="flex gap-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex
                      ? 'bg-yellow-400'
                      : 'bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-10 h-10 flex items-center justify-center bg-white/70 hover:bg-white transition rounded-full"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentStories
