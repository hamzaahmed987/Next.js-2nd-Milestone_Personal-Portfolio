import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="w-full bg-orange-50 p-6 md:p-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          {/* Contacts Section */}
          <div className="text-center md:text-left">
            <h3 className="font-medium text-lg mb-2">Contacts</h3>
            <ul>
              <li>0318-XXXXXXX</li>
              <li>abc@gmail.com</li>
            </ul>
          </div>

          {/* Copyright Section */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              © Copyright 2024 HTML.am
            </p>
          </div>

          {/* Links Section */}
          <div className="text-center md:text-right text-slate-800 space-y-2">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/hamza-ahmed-9b38402b3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
