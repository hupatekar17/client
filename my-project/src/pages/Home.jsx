import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar.';

const HomePage = () => {


  return (
    <div className="flex h-screen">
        
      <div className="bg-gray-200 w-1/5 p-4">
        <Sidebar/>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-left">
        
          <h1 className="text-2xl font-bold mb-8">BES Consultants</h1>
       
          <div className="flex items-center justify-left p-4 bg-gray-50 rounded-full shadow-lg space-x-[-2px]">
          <Link to="/qaqc">

      <button className="px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-lg rounded-full hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
      QAQC
      </button>
      </Link>
      <Link to="material">
      <button className="px-6 py-3 bg-gradient-to-r from-blue-300 to-blue-500 text-white text-lg rounded-full hover:from-blue-400 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
      Material Approved
      </button>
    
    </Link>
    <Link to="drawing">
      <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg rounded-full hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300">
      Drawing Approval
      </button>
      </Link>
    </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
