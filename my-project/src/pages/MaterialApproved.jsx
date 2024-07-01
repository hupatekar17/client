import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const MaterialApprovedTable = () => {
  const [rows, setRows] = useState([
    { id: 1, pendingIssue: '', documentType: '', status: 'Pending' },
  ]);

  const handleAddRow = () => {
    const newRow = { id: rows.length + 1, pendingIssue: '', documentType: '', status: 'Pending' };
    setRows([...rows, newRow]);
  };

  const handleDeleteRow = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const handlePendingIssueChange = (id, event) => {
    const newRows = rows.map(row => {
      if (row.id === id) {
        return { ...row, pendingIssue: event.target.value };
      }
      return row;
    });
    setRows(newRows);
  };

  const handleDocumentTypeChange = (id, event) => {
    const newRows = rows.map(row => {
      if (row.id === id) {
        return { ...row, documentType: event.target.value };
      }
      return row;
    });
    setRows(newRows);
  };

  const handleStatusChange = (id, event) => {
    const newRows = rows.map(row => {
      if (row.id === id) {
        return { ...row, status: event.target.value };
      }
      return row;
    });
    setRows(newRows);
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
        <h1 className="text-3xl font-bold text-teal-500 mb-4">Material Approved</h1>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 mb-4" onClick={handleAddRow}>Add</button>
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr className="text-gray-800">
              <th className="px-4 py-2">Sr.No</th>
              <th className="px-4 py-2">Element/Item</th>
              <th className="px-4 py-2">Document/Sample</th>
              <th className="px-4 py-2">Document Type</th>
              <th className="px-4 py-2">BES Comment</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.id}>
                <td className="border px-4 py-2">{row.id}</td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    value={row.pendingIssue}
                    onChange={(event) => handlePendingIssueChange(row.id, event)}
                    className="w-full border px-2 py-1 resize-none"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    className="w-full border px-2 py-1 resize-none"
                  />
                </td>
                <td className="border px-4 py-2">
                  <select
                    value={row.documentType}
                    onChange={(event) => handleDocumentTypeChange(row.id, event)}
                    className="w-full border px-2 py-1"
                  >
                    <option value="">Select Document Type</option>
                    <option value="Sample">Sample</option>
                    <option value="Laboratory Tests">Laboratory Tests</option>
                    <option value="Information">Information</option>
                    <option value="Suppl-Certificate">Suppl-Certificate</option>
                  </select>
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    className="w-full border px-2 py-1 resize-none"
                  />
                </td>
                <td className="border px-4 py-2">
                  <select
                    value={row.status}
                    onChange={(event) => handleStatusChange(row.id, event)}
                    className={`w-full border px-2 py-1 ${row.status === 'Pending' ? 'bg-yellow-200' : row.status === 'Closed' ? 'bg-green-200' : 'bg-orange-200'}`}
                  >
                    <option value="Pending" className="bg-yellow-200">Pending</option>
                    <option value="Closed" className="bg-green-200">Closed</option>
                    <option value="Open" className="bg-orange-200">Open</option>
                  </select>
                </td>
                <td className="border px-4 py-2">
                  <button className="bg-red-500 text-white font-bold py-2 px-4" onClick={() => handleDeleteRow(row.id)}>Delete</button>
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

export default MaterialApprovedTable;
