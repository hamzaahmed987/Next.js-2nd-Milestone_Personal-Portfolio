import React from "react";

const Contact: React.FC = () => {
  return (
    <>
      <div className="py-12 px-6 sm:px-12 md:px-20 lg:px-40 bg-orange-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center md:text-left mb-8">
            Contact <span className="text-orange-500">Us</span>
          </h2>
          <p className="text-center md:text-left mb-8">
            Have a question or want to collaborate? Feel free to reach out.
          </p>
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-orange-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-orange-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-orange-600"
              >
                Message
              </label>
              <textarea
                id="message"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
                placeholder="Enter your message"
                rows={4}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center md:justify-start">
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
