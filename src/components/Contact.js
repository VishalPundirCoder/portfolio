import React from 'react';
import { FaLinkedin,FaPhone } from 'react-icons/fa'; 
import { MdEmail } from 'react-icons/md'; 


const Contact = () => {
  return (
   <>
       <div className="m-6">
  <div className="flex flex-col space-y-2">
    <a href="https://www.linkedin.com/in/vishal-pundir-159944220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="flex items-center text-gray-700 hover:text-blue-500">
      <FaLinkedin />&nbsp;&nbsp;Vishal Pundir
    </a>
    <span className="flex items-center text-gray-700">
      <MdEmail />&nbsp;&nbsp;vishalpundir047@gmail.com
    </span>
    <span className="flex items-center text-gray-700">
      <FaPhone />&nbsp;&nbsp;9675717093
    </span>
  </div>
</div>
    </>
  );
};

export default Contact;
