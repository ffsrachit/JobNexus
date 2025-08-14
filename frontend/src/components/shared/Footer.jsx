import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-white via-blue-50 to-blue-100 border-t border-gray-200 py-16 mt-12 shadow-2xl overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/3 via-transparent to-blue-600/3"></div>
        
        
      </div>

      <div className="container mx-auto px-6 relative z-20">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Brand Section - Enhanced */}
          <div className="lg:col-span-2 space-y-6">
            <div className="group cursor-default">
              <h2 className="text-5xl font-black text-blue-600 tracking-wide relative inline-block">
                <span className="relative z-10 hover:scale-105 transition-all duration-500 inline-block">
                  JobNexus
                </span>
                {/* Single animated underline */}
                <div className="absolute -bottom-2 left-0 w-0 h-1 bg-blue-600 rounded-full transition-all duration-1000 ease-out group-hover:w-full"></div>
              </h2>
            </div>
            
            {/* Beautiful content sections */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Connecting Dreams
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your gateway to endless career possibilities. Discover opportunities that match your passion.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Building Futures
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Empowering professionals to achieve their career goals with innovative solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Social Section - Enhanced */}
          <div className="text-center lg:text-left">
            <h4 className="text-2xl font-bold text-gray-800 mb-6 relative group">
              <span className="relative z-10">Stay Connected</span>
              {/* Single animated underline */}
              <div className="absolute -bottom-2 left-0 w-0 h-1 bg-blue-600 rounded-full transition-all duration-700 ease-out group-hover:w-full"></div>
            </h4>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Follow us for the latest opportunities and career insights that matter to you.
            </p>
            
            {/* Enhanced Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 flex items-center justify-center bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-2xl text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-600/30 transform hover:scale-110 hover:-translate-y-2 transition-all duration-400 overflow-hidden"
              >
                {/* Ripple effect */}
                <div className="absolute inset-0 bg-blue-600 scale-0 rounded-2xl transition-transform duration-500 group-hover:scale-100 opacity-0 group-hover:opacity-10"></div>
                <svg
                  className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.676 0H1.324C.593 0 0 .592 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82V14.706H9.692v-3.578h3.128V8.408c0-3.1 1.893-4.787 4.657-4.787 1.325 0 2.463.1 2.794.144v3.238l-1.918.001c-1.503 0-1.794.715-1.794 1.762v2.31h3.587l-.468 3.578h-3.119V24h6.116C23.407 24 24 23.408 24 22.676V1.324C24 .592 23.407 0 22.676 0z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 flex items-center justify-center bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-2xl text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-600/30 transform hover:scale-110 hover:-translate-y-2 transition-all duration-400 overflow-hidden"
              >
                <div className="absolute inset-0 bg-blue-600 scale-0 rounded-2xl transition-transform duration-500 group-hover:scale-100 opacity-0 group-hover:opacity-10"></div>
                <svg
                  className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.934 4.934 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.924 4.924 0 00-8.38 4.49A13.978 13.978 0 011.67 3.149 4.93 4.93 0 003.16 9.724a4.903 4.903 0 01-2.229-.616v.062a4.93 4.93 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.93 4.93 0 004.6 3.417A9.869 9.869 0 010 21.543a13.978 13.978 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.004-.425-.015-.636A10.012 10.012 0 0024 4.557z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 flex items-center justify-center bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-2xl text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-600/30 transform hover:scale-110 hover:-translate-y-2 transition-all duration-400 overflow-hidden"
              >
                <div className="absolute inset-0 bg-blue-600 scale-0 rounded-2xl transition-transform duration-500 group-hover:scale-100 opacity-0 group-hover:opacity-10"></div>
                <svg
                  className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452H16.85v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.147V9.756h3.448v1.464h.05c.48-.91 1.653-1.871 3.401-1.871 3.634 0 4.307 2.39 4.307 5.498v5.605zM5.337 8.29c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zM7.119 20.452H3.553V9.756h3.566v10.696zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-300/60 relative">
          {/* Subtle line animation */}
          <div className="absolute top-0 left-0 w-0 h-0.5 bg-blue-600 animate-pulse transition-all duration-2000"></div>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
            <div className="text-center md:text-left space-y-2">
              <p className="text-sm text-gray-600 font-medium">
                © {new Date().getFullYear()} JobNexus. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 flex items-center justify-center md:justify-start gap-1">
                Made with 
                <span className="text-red-500 animate-pulse text-sm">♥</span> 
                by 
                <span className="font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-300">
                  Rachit Verma
                </span>
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-600 font-medium">
                Empowering careers, one connection at a time.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Building bridges between talent and opportunity
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;