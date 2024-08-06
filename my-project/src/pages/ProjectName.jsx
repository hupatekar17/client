import React, { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import { PieChart } from 'react-minimal-pie-chart';
import axios from 'axios';
import 'animate.css/animate.min.css';

const ProjectName = () => {
  const [counts, setCounts] = useState({
    qaqc: { completed: 0, pending: 0, ongoing: 0 },
    material: { completed: 0, pending: 0, ongoing: 0 },
    drawing: { completed: 0, pending: 0, ongoing: 0 }
  });
  const [darkMode, setDarkMode] = useState(false);
  const [projectName, setProjectName] = useState('');
  const { id } = useParams(); // Get project ID from route params

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/projects/${id}`);
        const data = response.data;
        console.log(response.data)
      } catch (error) {
        console.error('Failed to fetch project data:', error);
      }
    };

    fetchData();  
  }, [id]); // Dependency on project ID

  return (
    <div className={`flex h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Dark Mode Toggle Button */}
      

      {/* Sidebar */}
      <div className="bg-gray-200 w-1/5 p-4">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Project Header */}
        <h1 className="text-2xl font-bold mb-4">{projectName}</h1>

        <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Generate Report</button>


        {/* Dashboard Columns */}
        <div className="grid grid-cols-3 gap-8">
          {/* QAQC Column */}
          <Link to="qaqc">
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
          </Link>

          {/* Material Column */}
          <Link to="material">
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
          </Link>

          {/* Drawing Column */}
          <Link to="drawing">
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
          </Link>

              

        </div>
        <div>
          <Outlet/>  
        </div>  

      </div>
    </div>
  );
};

export default ProjectName;
