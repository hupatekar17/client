import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const QAQC = () => {
  const [items, setItems] = useState([
    { id: 1, element: '', standards: '', frequency: '', status: 'Open' },
  ]);

  const handleInputChange = (id, event) => {
    const { name, value } = event.target;
    const newItems = items.map(item =>
      item.id === id ? { ...item, [name]: value } : item
    );
    setItems(newItems);
  };

  const handleStatusChange = (id, event) => {
    const { value } = event.target;
    const newItems = items.map(item =>
      item.id === id ? { ...item, status: value } : item
    );
    setItems(newItems);
  };

  const handleAddRow = () => {
    const newItem = {
      id: items.length > 0 ? items[items.length - 1].id + 1 : 1,
      element: '',
      standards: '',
      frequency: '',
      status: 'Open',
    };
    setItems([...items, newItem]);
  };

  const handleDeleteRow = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  };

  const handleSubmit = () => {
    // Your submit logic goes here
    console.log('Form submitted');
  };

  return (
    <div className="container">
      <div className="flex justify-between items-center mb-4">
        <Link to="/">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Bes Consultants
          </button>
        </Link>
        <div className="flex space-x-4">
          <Link to="/qaqc">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              QAQC
            </button>
          </Link>
          <Link to="/material">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Material
            </button>
          </Link>
          <Link to="/drawing">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Drawing
            </button>
          </Link>
        </div>
      </div>

    
    
    <div className="flex h-screen">
      {/* Sidebar */}
      
      <div className="bg-gray-200 w-1/6 p-4 h-full">
        {/* Add your sidebar content here */}
        <h2 className="text-xl font-bold mb-4">Projects</h2>
        {/* Placeholder for empty sidebar */}
      </div>

      {/* Main Content */}
      <div className="flex-1 container mx-auto">
        <h1 className="text-4xl font-bold text-teal-500 mb-4">QAQC</h1>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 mb-4" onClick={handleAddRow}>Add</button>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">S.No.</th>
              <th className="px-4 py-2">Element/Item</th>
              <th className="px-4 py-2">Standards</th>
              <th className="px-4 py-2">Frequency/Quantity</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    name="element"
                    value={item.element}
                    onChange={(event) => handleInputChange(item.id, event)}
                    className="w-full border px-2 py-1"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    name="standards"
                    value={item.standards}
                    onChange={(event) => handleInputChange(item.id, event)}
                    className="w-full border px-2 py-1"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    name="frequency"
                    value={item.frequency}
                    onChange={(event) => handleInputChange(item.id, event)}
                    className="w-full border px-2 py-1"
                  />
                </td>
                <td className="border px-4 py-2">
                  <select
                    value={item.status}
                    onChange={(event) => handleStatusChange(item.id, event)}
                    className={`w-full border px-2 py-1 ${
                      item.status === 'Partially Closed' ? 'bg-blue-200' :
                      item.status === 'Closed' ? 'bg-green-200' : 'bg-yellow-200'
                    }`}
                  >
                    <option value="Partially Closed" className="bg-blue-200">Partially Closed</option>
                    <option value="Closed" className="bg-green-200">Closed</option>
                    <option value="Open" className="bg-yellow-200">Open</option>
                  </select>
                </td>
                <td className="border px-4 py-2">
                  <button className="bg-red-500 text-white font-bold py-2 px-4" onClick={() => handleDeleteRow(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody> 
        </table>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
    </div>
  );
};

export default QAQC;
