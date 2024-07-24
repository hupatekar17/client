import React, { useEffect, useState } from 'react';
import { HiOutlineTrash } from 'react-icons/hi'; // Import trash icon from react-icons/hi
import axios from "axios";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  // Initial list of projects
  const [projects, setProjects] = useState([]);
  // State to manage the search term
  const [searchTerm, setSearchTerm] = useState('');
  // State to manage the new project input
  const [newProjectName, setNewProjectName] = useState('');
  // State to manage the Add Project modal visibility
  const [showAddModal, setShowAddModal] = useState(false);
  
  // Function to toggle the Add Project modal
  const toggleAddModal = () => {
    setShowAddModal(!showAddModal);
  };

  // Define an asynchronous function 'fetchData'
  const fetchData = async () => {
    const response = await axios.get("http://localhost:4000/api/projects");
    setProjects(response.data);
  };

  // Function to handle input change for new project name
  const handleProjectNameChange = (event) => {
    setNewProjectName(event.target.value);
  };
  
  // Function to add a new project
  const addProject = () => {
    if (newProjectName.trim() !== '') {
      const newProject = {
          "name": newProjectName,
          "qaqcEntries": [],
          "materialEntries": [],
          "drawingEntries": []
      };
      axios.post('http://localhost:4000/api/projects', newProject)
        .then(response => {
          console.log('Success:', response.data);
          fetchData();
        })
        .catch(error => {
          console.error('Error:', error.response ? error.response.data : error.message);
        });
      
      setNewProjectName(''); // Clear the input field
      toggleAddModal(); // Close the modal after adding
    } else {
      alert('Please enter a valid project name.');
    }
  };
  
  // Function to delete a project by id
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

  // Function to handle search term change
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter projects based on search term
  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sidebar p-4 bg-gray-100">
      <button className="text-lg font-bold mb-4 hover:bg-blue-200 p-2 rounded">
        📁 BES Consultants
      </button>
      
      {/* Search bar */}
      <input
        type="text"
        className="border rounded px-3 py-2 mb-4 w-full"
        placeholder="Search project..."
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      
      {/* Button to add a new project */}
      <button onClick={toggleAddModal} className="mt-4 mb-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Add Project
      </button>
      
      <ul>
        {/* List of projects */}
        {filteredProjects.map((project) => (
          <li key={project._id} className="mb-2 flex items-center">
            {/* Styled project button */}
            <Link to={`/projects/${project._id}`} className="hover:bg-blue-600 text-black font-bold py-2 px-4 rounded-md w-full text-left">
              📁 {project.name}
            </Link>
            {/* Delete button */}
            <button
              onClick={() => deleteProject(project._id)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full ml-2"
            >
              <HiOutlineTrash size={20} />
            </button>
          </li>
        ))}
      </ul>
      
      {/* Modal for adding a new project */}
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
