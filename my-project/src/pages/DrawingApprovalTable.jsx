import React, { useState } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';

const EmptyTable = ({ projectId }) => {
  // Dropdown options for each column
  const locationTypes = [
    'Tower', 'Refuge', 'Podium', 'Entrance', 'Terrace', 'Curtain Wall', 'Doors', 'General'
  ];
  const documentTypes = [
    'Cont-Drawings', 'Cont-Strl Cals', 'Cont-RFI', 'Cont-Reports', 'Cont-Pre-Qualification', 
    'Cont-Materials', 'Arch-Comments-Post-Tender', 'Client Comments- Post Tender', 'BES MOM', 
    'Received MOM'
  ];
  const stage1Options = ['Shop Drawings', 'Strl Cals', 'Fabrication Drawings'];
  const revisionNos = ['R0', 'R1', 'R2', 'R3', 'R4', 'R5'];
  const status1Options = [
    'Open', 'Close', 'In_Progress', 'Pending', 'Applicable', 'Not Applicable'
  ];

  // State to hold table rows
  const [tableRows, setTableRows] = useState([]);

  // State to hold selected values
  const [selectedValues, setSelectedValues] = useState({
    locationType: '', documentType: '', stage1: '', revisionNo: '', status1: '', besComments: ''
  });

  // Handle input change for dropdowns and text areas
  const handleInputChange = (e, fieldName) => {
    setSelectedValues({ ...selectedValues, [fieldName]: e.target.value });
  };

  // Handle Add button click
  const handleAddRow = () => {
    if (
      selectedValues.locationType &&
      selectedValues.documentType &&
      selectedValues.stage1 &&
      selectedValues.revisionNo &&
      selectedValues.status1 &&
      selectedValues.besComments
    ) {
      const newRow = {
        id: tableRows.length + 1,
        ...selectedValues
      };

      setTableRows([...tableRows, newRow]);

      // Clear selected values state
      setSelectedValues({
        locationType: '', documentType: '', stage1: '', revisionNo: '', status1: '', besComments: ''
      });
    } else {
      alert('Please select values for all fields before adding.');
    }
  };

  // Handle Submit button click
  const handleSubmit = async () => {
    try {
      const response = await axios.post(`http://localhost:4000/api/projects/${projectId}/drawing`, tableRows);
      console.log('Response:', response.data);
      alert('Data saved successfully!');
      // Optionally clear tableRows state or perform other actions after successful save
      setTableRows([]);
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Error saving data. Please try again.');
    }
  };

  // Handle Delete button click
  const handleDeleteRow = (id) => {
    if (window.confirm('Are you sure you want to delete this row?')) {
      const updatedRows = tableRows.filter((row) => row.id !== id);
      setTableRows(updatedRows);
    }
  };

  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Drawing Approval Table</h2>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Location Type</th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Document Type</th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Stage 1</th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Revision No.</th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Status 1</th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">BES Comments</th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableRows.map((row) => (
              <tr key={row.id}>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">{row.locationType}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">{row.documentType}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">{row.stage1}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">{row.revisionNo}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">{row.status1}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  <textarea
                    value={row.besComments}
                    onChange={(e) => handleInputChange(e, 'besComments')}
                    className="w-full bg-gray-50 border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  <button
                    onClick={() => handleDeleteRow(row.id)}
                    className="text-red-600 hover:text-red-900 focus:outline-none"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <select
                  value={selectedValues.locationType}
                  onChange={(e) => handleInputChange(e, 'locationType')}
                  className="border border-gray-300 px-3 py-1 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                >
                  <option value="">Select...</option>
                  {locationTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <select
                  value={selectedValues.documentType}
                  onChange={(e) => handleInputChange(e, 'documentType')}
                  className="border border-gray-300 px-3 py-1 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                >
                  <option value="">Select...</option>
                  {documentTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <select
                  value={selectedValues.stage1}
                  onChange={(e) => handleInputChange(e, 'stage1')}
                  className="border border-gray-300 px-3 py-1 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                >
                  <option value="">Select...</option>
                  {stage1Options.map((stage) => (
                    <option key={stage} value={stage}>{stage}</option>
                  ))}
                </select>
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <select
                  value={selectedValues.revisionNo}
                  onChange={(e) => handleInputChange(e, 'revisionNo')}
                  className="border border-gray-300 px-3 py-1 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                >
                  <option value="">Select...</option>
                  {revisionNos.map((rev) => (
                    <option key={rev} value={rev}>{rev}</option>
                  ))}
                </select>
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <select
                  value={selectedValues.status1}
                  onChange={(e) => handleInputChange(e, 'status1')}
                  className="border border-gray-300 px-3 py-1 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                >
                  <option value="">Select...</option>
                  {status1Options.map((status) => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </td>

              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <textarea
                  value={selectedValues.besComments}
                  onChange={(e) => handleInputChange(e, 'besComments')}
                  className="w-full bg-gray-50 border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <button
                  onClick={handleAddRow}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-600"
                >
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-green-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EmptyTable;
