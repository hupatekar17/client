import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { PieChart } from 'react-minimal-pie-chart';
import 'animate.css/animate.min.css';

const HomePage = () => {
  const [counts, setCounts] = useState({
    qaqc: { completed: 0, pending: 0, ongoing: 0 },
    material: { completed: 0, pending: 0, ongoing: 0 },
    drawing: { completed: 0, pending: 0, ongoing: 0 }
  });

  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  

  useEffect(() => {
    const mockData = {
      qaqc: { completed: 12, pending: 5, ongoing: 3 },
      material: { completed: 20, pending: 3, ongoing: 7 },
      drawing: { completed: 15, pending: 8, ongoing: 5 }
    };

    const timeout = setTimeout(() => {
      setCounts(mockData);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`flex h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Dark Mode Toggle Button */}
      {/* <div className="fixed bottom-4 right-4 z-10">
        <button
          onClick={toggleDarkMode}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div> */}

      {/* Sidebar */}
      <div className="bg-gray-200 w-1/5 p-4">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Dashboard Columns */}
        <div className="grid grid-cols-3 gap-8">
          {/* QAQC Column */}
          
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-lg font-bold mb-4">QAQC</h2>
              <div className="flex justify-between mb-2">
                <span>Completed: {counts.qaqc.completed}</span>
                <span>Pending: {counts.qaqc.pending}</span>
                <span>Ongoing: {counts.qaqc.ongoing}</span>
              </div>
              <PieChart
                data={[
                  { title: 'Completed', value: counts.qaqc.completed, color: '#4CAF50' },
                  { title: 'Pending', value: counts.qaqc.pending, color: '#FFC107' },
                  { title: 'Ongoing', value: counts.qaqc.ongoing, color: '#2196F3' }
                ]}
                lineWidth={30}
                paddingAngle={5}
                animate={{ duration: 3000, animation: 'from' }}
                label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                labelStyle={{ fontSize: '10px', fontFamily: 'sans-serif', fill: '#ffffff' }}
                style={{ height: '150px' }}
                className="animate__animated animate__fadeIn"
              />
            </div>
          

          {/* Material Column */}
         
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-lg font-bold mb-4">Material Approved</h2>
              <div className="flex justify-between mb-2">
                <span>Completed: {counts.material.completed}</span>
                <span>Pending: {counts.material.pending}</span>
                <span>Ongoing: {counts.material.ongoing}</span>
              </div>
              <PieChart
                data={[
                  { title: 'Completed', value: counts.material.completed, color: '#4CAF50' },
                  { title: 'Pending', value: counts.material.pending, color: '#FFC107' },
                  { title: 'Ongoing', value: counts.material.ongoing, color: '#2196F3' }
                ]}
                lineWidth={30}
                paddingAngle={5}
                animate={{ duration: 3000, animation: 'from' }}
                label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                labelStyle={{ fontSize: '10px', fontFamily: 'sans-serif', fill: '#ffffff' }}
                style={{ height: '150px' }}
                className="animate__animated animate__fadeIn"
              />
            </div>

          {/* Drawing Column */}
  
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-lg font-bold mb-4">Drawing Approval</h2>
              <div className="flex justify-between mb-2">
                <span>Completed: {counts.drawing.completed}</span>
                <span>Pending: {counts.drawing.pending}</span>
                <span>Ongoing: {counts.drawing.ongoing}</span>
              </div>
              <PieChart
                data={[
                  { title: 'Completed', value: counts.drawing.completed, color: '#4CAF50' },
                  { title: 'Pending', value: counts.drawing.pending, color: '#FFC107' },
                  { title: 'Ongoing', value: counts.drawing.ongoing, color: '#2196F3' }
                ]}
                lineWidth={30}
                paddingAngle={5}
                animate={{ duration: 3000, animation: 'from' }}
                label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                labelStyle={{ fontSize: '10px', fontFamily: 'sans-serif', fill: '#ffffff' }}
                style={{ height: '150px' }}
                className="animate__animated animate__fadeIn"
              />
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
