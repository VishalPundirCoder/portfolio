import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiCsharp, SiDotnet, SiRedux, SiHtml5 } from 'react-icons/si';

import { FaJsSquare } from 'react-icons/fa';




const About = () => {
  return (
    <>
      <section className="p-8 bg-gray-100 ">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="mt-4 text-gray-700">
          Experienced React.js developer, creating interactive, user-friendly web applications. 
          Expertise includes translating intricate project requirements into scalable, high-performance React components. 
          Passionate about leveraging technology to deliver innovative and engaging web experiences. 
          Eager to bring my proven skills and enthusiasm for continuous learning to a dynamic and growth-oriented team.
        </p>
      </section>
      <div className="flex flex-col md:flex-row m-4 gap-4 mb-4">
      
      <div className="bg-white p-4 shadow rounded border-2 border-brown-200 flex-1">
  <h3 className="text-xl font-semibold">Work Experience</h3>
  <div>
    <h4 className="text-blue-400">Software Engineer I</h4>
    <ul className="ml-4  text-gray-600">
      <li>May 2022 - Present</li>
    </ul>
  </div>
  <div >
    <h4 className="text-blue-400">Engineer Trainee</h4>
    
  </div>
  <ul className="ml-4">
        <li>
          <span className="text-gray-500">
         
      Nov 2021 - Apr 2022
    
          </span>
        </li>
      
       
      </ul>
</div>

      
      <div className="bg-white p-4 shadow rounded border-2 border-brown-200 flex-1">
        <h3 className="text-xl font-semibold">Skills</h3>
        <div className="flex items-center space-x-4 mt-8">
          <FaReact size={26} color="#61DAFB" />
          <SiCsharp size={26} color="#239120" />
          <SiDotnet size={26} color="#512BD4" />
          <SiRedux size={26} color="#764ABC" />
          <FaJsSquare size={26} color="#F7DF1E" />
          <SiHtml5 size={26} color="#E44D26" />
        </div>
      </div>
      <div className="bg-white p-4 shadow rounded border-2 border-brown-200 flex-1">
  <h3 className="text-black-500 font-bold">Educational Qualifications</h3>
  <ul>
    <li>
      <span className="text-blue-400">Master of Computer Applications</span>
      <br />
      
      <ul className="ml-4">
        <li>
          <span className="text-gray-500">
          Maharaja Agrasen Institute of Management and Technology, Jagadhari
          </span>
        </li>
        <li>
          <span className="text-gray-500">
          2020-2022
          </span>
        </li>
        {/* Add more subjects as needed */}
      </ul>
    </li>
    <li>
      <span className="text-blue-400">Bachelor of Computer Applications</span>
      <br />
      
      <ul className="ml-4">
        <li>
          <span className="text-gray-500">
          Tilak Raj Chadha Institute of Management and Technology, Yamunanagar
          </span>
        </li>
        <li>
          <span className="text-gray-500">
          2016-2019
          </span>
        </li>
       
      </ul>
      
    </li>
  </ul>
</div>
    </div>
    </>
  );
};

export default About;