import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMzAgMTVMMTUgMzBMMzAgNDVMNDUgMzBMMzAgMTVNMzAgNDVMMTUgMzBMMzAgMTVNNDUgMzBMMzAgNDVMMzAgMTUiIHN0cm9rZT0iI0ZGRUI4OCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')]"></div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content - shifted left */}
          <div className="md:w-1/2 md:pr-8 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              <span className="block">KATHMANDU</span>
              <span className="block text-gold-500 mt-2">GURKHAS</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto md:mx-0 text-xl text-yellow-100">
              Courage. Honor. Victory. The pride of Nepal in the world of
              sports.
            </p>

            {/* Stats ribbon */}
            <div className="mt-12 max-w-md mx-auto md:mx-0 bg-black bg-opacity-50 border border-yellow-100 border-opacity-30 rounded-lg p-4">
              <div className="flex justify-between text-yellow-100">
                <div className="text-center px-4">
                  <div className="text-3xl font-bold text-gold-500">14</div>
                  <div className="text-sm uppercase tracking-wider">
                    Matches
                  </div>
                </div>
                <div className="text-center px-4 border-x border-yellow-100 border-opacity-20">
                  <div className="text-3xl font-bold text-gold-500">9</div>
                  <div className="text-sm uppercase tracking-wider">Wins</div>
                </div>
                <div className="text-center px-4">
                  <div className="text-3xl font-bold text-gold-500">1</div>
                  <div className="text-sm uppercase tracking-wider">Titles</div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/schedule"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gradient-to-r from-yellow-300 to-gold-500 hover:from-yellow-200 hover:to-gold-400 transition duration-300 shadow-lg"
              >
                View Schedule
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-8 py-3 border border-yellow-300 text-base font-medium rounded-md text-yellow-100 hover:bg-yellow-300 hover:bg-opacity-10 hover:border-yellow-200 hover:text-white transition duration-300"
              >
                Shop Merchandise
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image placeholder - right side */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              {/* Team image placeholder - replace with your actual image */}
              <div className="relative rounded-lg overflow-hidden border-2 border-yellow-300 shadow-xl">
                <img
                  src="/team.png"
                  alt="Kathmandu Gurkhas Team"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
              </div>

              {/* Optional decorative element */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full border-2 border-yellow-300 bg-black flex items-center justify-center">
                <span className="text-yellow-300 font-bold text-xl">KG</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated cricket elements */}
      <div className="absolute bottom-8 right-8 w-16 h-16 rounded-full border-2 border-yellow-200 animate-bounce opacity-70">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-1 bg-yellow-300 rounded-full"></div>
        </div>
      </div>

      {/* Decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
    </div>
  );
};

export default Hero;
