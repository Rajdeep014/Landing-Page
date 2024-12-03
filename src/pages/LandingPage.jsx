import React from "react";
import {
  FaBell,
  FaChartBar,
  FaClipboardList,
  FaClock,
  FaCogs,
  FaShieldAlt,
  FaSmile,
  FaUserTie,
} from "react-icons/fa";
import logo5 from "../assets/companies-afrivet-1-300x300.jpg";
import logo6 from "../assets/companies-capricorn-group-300x300.jpg";
import logo4 from "../assets/companies-deloitte-300x300.jpg";
import logo7 from "../assets/companies-ffg-1-300x300.jpg";
import logo8 from "../assets/companies-sasseta-300x300.jpg";
import logo2 from "../assets/Frame2.png";
import logo1 from "../assets/Group-29-1024x576.png";
import ImageSlider from "../components/ImageCoursel";

const LandingPage = () => {
  const iconsArray = [
    { id: 1, icon: <FaUserTie size={24} />, name: "Employee" },
    { id: 2, icon: <FaChartBar size={24} />, name: "Analytics" },
    { id: 3, icon: <FaClipboardList size={24} />, name: "Tasks" },
    { id: 4, icon: <FaCogs size={24} />, name: "Settings" },
    { id: 5, icon: <FaShieldAlt size={24} />, name: "Security" },
    { id: 6, icon: <FaClock size={24} />, name: "Time" },
    { id: 7, icon: <FaBell size={24} />, name: "Notifications" },
    { id: 8, icon: <FaSmile size={24} />, name: "Feedback" },
  ];

  return (
    <>
      <section className="bg-[#015981] text-white relative overflow-hidden py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-6">
            HR Software for companies who care about their people
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Digitize your employee's journey from hire to retire on a single
            platform with GoSmartHR.
          </p>
          <img
            src={logo1}
            alt="Software Interface"
            className="w-full md:w-2/3 mx-auto rounded-lg shadow-lg mt-8"
          />
          <button className="mt-8 bg-[#F16611] hover:bg-[#d35c0f] text-white font-bold py-2 px-6 rounded-full transition duration-300">
            Book a Demo
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 150"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 C400,100 1000,0 1440,50 L1440,150 L0,150 Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      </section>

      <div className="text-center mt-16 px-4">
        <h2 className="text-3xl font-semibold text-[#006699] mb-6">
          Future-Proof Your Workforce Management with GoSmartHR
        </h2>
        <p className="text-[#797979] text-lg max-w-4xl mx-auto">
          Nothing is more frustrating than spending hours on a task that could
          be automated. GoSmartHR handles{" "}
          <span className="underline text-[#F16611]">complex HR tasks</span>{" "}
          effortlessly. Enjoy unparalleled precision, speed, and compliance.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-12 lg:px-40 py-16 ">
        <img
          className="w-48 md:w-72 lg:w-80 mx-auto"
          src={logo2}
          alt="GoSmartHR Logo"
        />
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-3xl font-semibold text-[#006699] mb-4">
            Scalable, Flexible, Evolving
          </h1>
          <p className="text-[#797979] text-base md:text-lg leading-relaxed ">
            GoSmartHR performs even complex HR tasks quickly and easily. One
            single solution that serves your full employee journey requirements.
            Data intelligence and access to comprehensive analysis across our
            full HR platform brings a level of detail and precision that is
            unmatched by any other system on the market.
          </p>
          <button className="mt-8 bg-[#F16611] hover:bg-[#d35c0f] text-white font-bold py-2 px-6 rounded-full transition duration-300">
            Book a Demo
          </button>
        </div>
      </div>

      <div className="bg-[#005D8C] py-10 w-full">
        <div className="text-center mb-8">
          <p className="text-lg font-medium text-white">Our product offering</p>
          <h1 className="text-4xl font-semibold mt-2 text-white">
            One smart solution that does it all
          </h1>
        </div>

        <div className="mr-8 ml-8 md:mr-56 md:ml-56">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {iconsArray.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center bg-white rounded-full w-60 h-60 shadow-xl mx-auto"
              >
                <div className="text-blue-500 text-3xl">{item.icon}</div>
                <p className="text-3xl text-[#006699] font-bold mt-4">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-6 w-full">
        <div className="text-center mb-12">
          <h1 className="text-xl font-semibold text-[#006699] mb-4">
            HOW IT WORKS
          </h1>
          <h2 className="text-3xl font-bold text-[#F16611]">
            4 Simple Steps to Your Success
          </h2>
        </div>

        <div className="mr-8 ml-8 md:mr-56 md:ml-56">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className={`box rounded-3xl shadow-lg p-6 h-[350px] text-center ${
                  index % 2 === 0 ? "bg-[#006699]" : "bg-[#F16611]"
                }`}
              >
                <h3 className="text-[40px] font-bold text-white mb-2">
                  Step {index + 1}
                </h3>
                <h4 className="text-[30px] font-semibold text-white mb-2">
                  Book a Demo
                </h4>
                <p className="text-[18px] text-white">
                  Book a call with us via the website form, allowing us to
                  explore your needs and prepare a customised demo.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center py-16 px-4">
        <h1 className="text-3xl font-semibold text-[#006699] mb-4">
          Call Us today and book a Demo
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Learn why the GoSmartHR Solution makes sense in your business.
        </p>
        <button className="mt-4 bg-[#F16611] hover:bg-[#d35c0f] text-white font-bold py-2 px-6 rounded-full transition duration-300">
          Get in touch
        </button>
        <button className="mt-4 bg-[#F16611] hover:bg-[#d35c0f] text-white font-bold py-2 px-6 rounded-full transition duration-300">
          Book a Demo
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-16 w-full">
        <div className="mr-8 ml-8 md:mr-56 md:ml-56">
          <div className="flex flex-wrap justify-center gap-10 ">
            <img
              src={logo5}
              alt="Logo 5"
              className="h-20 w-20 object-contain"
            />
            <img
              src={logo6}
              alt="Logo 6"
              className="h-20 w-20 object-contain"
            />
            <img
              src={logo4}
              alt="Logo 4"
              className="h-20 w-20 object-contain"
            />
            <img
              src={logo7}
              alt="Logo 7"
              className="h-20 w-20 object-contain"
            />
            <img
              src={logo8}
              alt="Logo 8"
              className="h-20 w-20 object-contain"
            />
          </div>
        </div>
      </div>

      <ImageSlider />
    </>
  );
};

export default LandingPage;
