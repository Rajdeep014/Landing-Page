import React from "react";
import logo from "../assets/Logo-GoSmartHR-light.png";

const Footer = () => {
  return (
    <footer className="bg-[#004B70] text-white py-10">
      <div className="container mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Logo and Description */}
        <div>
          <img src={logo} alt="GoSmartHR Logo" className="mb-6 w-500" />
          <p className="text-sm leading-relaxed font-bold">
            Passionate about HR and Payroll Technology that drives successful
            teams. We’re privileged to work with companies of all sizes across a
            variety of industries.
          </p>
        </div>

        {/* Quick Links */}

        <div className="ml-10 mt-10">
          <h4 className="text-orange-400 font-semibold mb-4">QUICK LINKS</h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:underline">
                Payroll Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                e-Learning (LMS)
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Time Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Performance Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Compliance and Equity Reporting
              </a>
            </li>
          </ul>
        </div>

        <div className="mr-24 mt-20 ">
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:underline">
                Outsourced Payroll
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Leave Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                HR Solutions for Mining
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Talent Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Employee Claims
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Reports
              </a>
            </li>
          </ul>
          {/* Contact and Social Media */}
        </div>
        <div className="mt-10">
          <h4 className="text-orange-400 font-semibold mb-4">CONTACT US</h4>
          <ul className="text-sm space-y-3">
            <li>
              Email:{" "}
              <a href="mailto:info@smarthr.co.za" className="hover:underline">
                info@smarthr.co.za
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+27126430990" className="hover:underline">
                +27 12 643 0990
              </a>
            </li>
            <li>
              Address: A Lords Office Estate – Block 12 1st Floor 276 West
              Street Centurion, South Africa
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <h4 className="text-orange-400 font-semibold mt-6 mb-2">
            SOCIAL MEDIA
          </h4>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ml-10 pt-6 ">
        © 2024 GoSmartHR. All Rights Reserved.{" "}
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
