import { useEffect, useState } from 'react';
import Image from 'next/image';
import manul from "@/../public/ManulEntry.png";
import dashboard1 from "@/../../public/Dashboard1.png"
import dashboard2 from "@/../../public/Dashboard2.png"
import report1 from "@/../../public/Report1.png"
import report2 from "@/../../public/Report2.png"
import report3 from "@/../../public/Report3.png"
import report4 from "@/../../public/Report4.png"
import chat1 from "@/../../public/Chat1.png"
import sync1 from "@/../../public/Sync1.png"
import Notes1 from "@/../public/Notes1.png";
import Notes2 from "@/../public/Notes2.png";

const DashboardAndReport = [
  // dashboard1,
  // dashboard2,
  report1,
  report2,
  report3,
  report4
]
const Unitandsync = [
  chat1,
  sync1,
]
const Notes = [
  Notes1,
  Notes2,
]
const Carousel = ({ slidename }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = slidename == "Dashboard&Report" ? [...DashboardAndReport] : slidename == "Unti&Sync" ? [...Unitandsync] : slidename == "Notes" ? [...Notes] : [];
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: any) => {
    setCurrentSlide(index);
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full grid items-center" data-carousel="slide">
      <div className="relative sm:h-[280px] h-[200px] overflow-hidden rounded-lg group ">
        {slides && slides?.map((slide: any, index: any) => (
          <div
            key={index}
            className={`p-5 duration-700 ease-in-out absolute top-0 left-0 transition-opacity ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Reduce image size within the main div */}
            {/* <div className="relative"> */}
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              className="block object-contain border-1 rounded-sm shadow-custom"
            />
            {/* </div> */}
          </div>
        ))}

        {/* Hidden buttons that show on hover */}
        {/* <button
          type="button"
          className="absolute top-1/2 left-0 z-30 transform -translate-y-1/2 px-2 hidden group-hover:flex items-center justify-center h-10 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 group-hover:bg-blue-700 group-focus:ring-4 group-focus:ring-blue-300 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-1/2 right-0 z-30 transform -translate-y-1/2 px-2 hidden group-hover:flex items-center justify-center h-10 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 group-hover:bg-blue-700 group-focus:ring-4 group-focus:ring-blue-300 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button> */}

        {/* Slider indicators, smaller and positioned at the bottom center */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-2 left-1/2 space-x-1">
          {slides.map((_: any, index: any) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-400'
                }`}
              onClick={() => goToSlide(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
