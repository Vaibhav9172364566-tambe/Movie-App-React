const Navbar = () => {
    return (
      <nav className="flex items-center justify-between px-6 py-4 bg-[#2e3032] text-white sm:bg-[#4B5563] md:bg-[#1F2937] lg:bg-[#374151]">
        {/* Left Section */}
        <div className="text-xl font-bold text-left sm:text-center lg:text-left pl-6 sm:pl-0">
          <h1>MovieDb</h1>
        </div>
  
        {/* Middle Section - Links */}
        <div className="hidden sm:flex text-gray-400 space-x-6 ml-auto">
          <a
            href="#popular"
            className="hover:text-gray-700 transition-colors sm:hover:text-blue-500 md:hover:text-red-500 lg:hover:text-green-500"
          >
            Popular
          </a>
          <a
            href="#top-rated"
            className="hover:text-gray-700 transition-colors sm:hover:text-blue-500 md:hover:text-red-500 lg:hover:text-green-500"
          >
            Top Rated
          </a>
          <a
            href="#upcoming"
            className="hover:text-gray-700 transition-colors sm:hover:text-blue-500 md:hover:text-red-500 lg:hover:text-green-500"
          >
            Upcoming
          </a>
        </div>
  
        {/* Right Section (Search Bar) */}
        <div className="flex items-center space-x-4 ml-8">
          <input
            type="text"
            placeholder="Movie Name "
            className="px-4 py-2 text-black rounded focus:outline-none"
          />
          <button className="px-4 py-2 bg-[#141619] rounded hover:bg-blue-500 sm:bg-gray-600 md:bg-gray-800 lg:bg-gray-900">
            Search
          </button>
        </div>
  
        {/* Mobile Section - Hamburger Menu */}
        <div className="sm:hidden flex items-center ml-auto">
          <button className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  