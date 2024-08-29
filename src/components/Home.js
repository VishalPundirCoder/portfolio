import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home p-8 flex">
      {/* Left side */}
      <div className="w-1/2 flex flex-col  items-center text-center">
        <h1 className="text-3xl font-bold text-[rgb(30,56,81)] mt-12">I'M VISHAL PUNDIR</h1>
        <h2 className="text-3xl text-gray-400 mt-4">Full-Stack Developer & Design Enthusiast</h2>
        <div className="mt-12">
          
          <a download="Vishal Pundir.pdf" href="/image/Vishal Pundir SDE.pdf" class="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500" aria-label="Download Resume"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg><span class="text-sm sm:text-lg font-general-medium duration-100">Download CV</span></a>
            
          
        </div>
      </div>

      {/* Right side */}
      <div className="w-1/2 flex justify-center items-center">
        <img 
          src="/image/8771935.jpg" 
          alt="Working on a desk" 
          className="w-3/4 h-auto rounded shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;


