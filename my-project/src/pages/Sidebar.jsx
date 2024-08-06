import React, { useEffect, useState } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newProjectName, setNewProjectName] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const location = useLocation(); // Hook to get the current URL path

  const toggleAddModal = () => {
    setShowAddModal(!showAddModal);
  };

  const fetchData = async () => {
    const response = await axios.get('http://localhost:4000/api/projects');
    setProjects(response.data);
  };

  const handleProjectNameChange = (event) => {
    setNewProjectName(event.target.value);
  };

  const addProject = () => {
    if (newProjectName.trim() !== '') {
      const newProject = {
        name: newProjectName,
        qaqcEntries: [],
        materialEntries: [],
        drawingEntries: []
      };
      axios.post('http://localhost:4000/api/projects', newProject)
        .then(response => {
          console.log('Success:', response.data);
          fetchData();
        })
        .catch(error => {
          console.error('Error:', error.response ? error.response.data : error.message);
        });
      
      setNewProjectName(''); 
      toggleAddModal(); 
    } else {
      alert('Please enter a valid project name.');
    }
  };

  const deleteProject = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      axios.delete(`http://localhost:4000/api/projects/${id}`)
        .then(response => {
          console.log('Success:', response.data);
          fetchData();
        })
        .catch(error => {
          console.error('Error:', error.response ? error.response.data : error.message);
        });
    }
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Determine the currently selected project ID from the URL
  const currentProjectId = location.pathname.split('/')[1];

  return (
    <div className="sidebar p-4 bg-gray-100">
      <Link to="/">
        <button className="text-lg font-bold mb-4 hover:bg-blue-200 p-2 rounded">
          📁 BES Consultants
        </button>
      </Link>
      <input
        type="text"
        className="border rounded px-3 py-2 mb-4 w-full"
        placeholder="Search project..."
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <button onClick={toggleAddModal} className="mt-4 mb-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Add Project
      </button>
      <ul>
        {filteredProjects.map((project) => (
          <li key={project._id} className="mb-2 flex items-center">
            <Link
              to={`/${project._id}`}
              className={`hover:bg-blue-600 text-black font-bold py-2 px-4 rounded-md w-full text-left ${
                project._id === currentProjectId ? 'bg-blue-200' : ''
              }`}
            >
              📁 {project.name}
            </Link>
            <button
              onClick={() => deleteProject(project._id)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full ml-2"
            >
              <HiOutlineTrash size={20} />
            </button>
          </li>
        ))}
      </ul>
      {showAddModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-lg font-bold mb-4">Add New Project</h3>
            <input
              type="text"
              className="border rounded px-3 py-2 w-full mb-4"
              placeholder="Enter project name"
              value={newProjectName}
              onChange={handleProjectNameChange}
            />
            <div className="flex justify-end">
              <button
                onClick={toggleAddModal}
                className="mr-2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={addProject}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
