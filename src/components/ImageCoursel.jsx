import React, { useState } from "react";

const TextCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = [
    {
      heading:
        "Atvance 360 uses GoSmartHR in the cloud for approximately 500 employees.",
      content:
        "The digitisation and automation of all the HR processes in an integrated solution means that we always have ‘a single version of the truth’, we now have access to real-time consolidated data across the organisation, and we have reduced our reliance and costs on otherwise having multiple vendors. We confirm that the SLA targets have always been maintained, especially during the critical payroll processing periods when rapid support resolution is critical. We strongly recommend Absalom Systems’ HR and payroll solutions for use within your organisation.",
      author: "Monica Cloete",
    },
    {
      heading: " Motherson uses GoSmartHR to manage over 1000 employees.",
      content:
        "These systems were first implemented in December 2017 and have been used by the organisation since that period. The integration of the SmartTime time and attendance with the SmartPay payroll system is vital for managing and tracking normal and overtime hours worked by employees.",
      author: "Yerisha Niadoo",
    },
    {
      heading: "Futurum Financial Group uses GoSmartHR for 170 employees.",
      content:
        "The implementation started on the 28th February 2022 and was completed in time for us to run live for the March 2022 payroll processing period. We are impressed with the speed and accuracy of the implementation, and, to date, we have been extremely pleased with the support and adherence to SLA targets.",
      author: "Karen Rademeyer",
    },
  ];

  const nextText = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const prevText = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + texts.length) % texts.length
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-8 px-4 bg-gray-100 rounded-lg shadow-md">
      {/* Carousel Text */}
      <div className="w-full h-48 flex flex-col justify-center items-center text-center text-xl font-semibold text-gray-800">
        <div>
          <p className="text-[12px] font-bold text-[#797979] mb-2">
            {texts[currentIndex].heading}
          </p>
          <p className="text-[12px] mt-2 m-5 text-gray-600 mb-4 px-4">
            {texts[currentIndex].content}
          </p>
          <p className="text-[10px] mb-5 text-orange-400 font-bold">
            {texts[currentIndex].author}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 ">
        <button
          onClick={prevText}
          className=" text-orange-600 text-2xl p-3 rounded-full shadow-lg "
        >
          {" "}
          &#60;
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4">
        <button
          onClick={nextText}
          className=" text-orange-600 text-2xl p-3 rounded-full shadow-lg "
        >
          &#62;
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {texts.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-orange-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TextCarousel;
