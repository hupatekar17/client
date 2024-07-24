import React, { useState } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa'; // Import trash icon from react-icons

const EmptyTable = () => {
  // Dropdown options for each column
  const locationTypes = [
    'Tower',
    'Refuge',
    'Podium',
    'Entrance',
    'Terrace',
    'Curtain Wall',
    'Doors',
    'General'
  ];
  const documentTypes = [
    'Cont-Drawings',
    'Cont-Strl Cals',
    'Cont-RFI',
    'Cont-Reports',
    'Cont-Pre-Qualification',
    'Cont-Materials',
    'Arch-Comments-Post-Tender',
    'Client Comments- Post Tender',
    'BES MOM',
    'Received MOM'
  ];
  const stage1Options = ['Shop Drawings', 'Strl Cals', 'Fabrication Drawings'];
  const revisionNos = ['R0', 'R1', 'R2', 'R3', 'R4', 'R5'];
  const status1Options = [
    'Open',
    'Close',
    'In_Progress',
    'Pending',
    'Applicable',
    'Not Applicable'
  ];
  const besCommentsOptions = [
    'Issued',
    'Reviewed',
    'Approved',
    'Approved With Comments',
    'Re-Submit',
    'Received'
  ];

  // State to hold table rows
  const [tableRows, setTableRows] = useState([]);

  // State to hold selected values
  const [selectedValues, setSelectedValues] = useState({
    locationType: '',
    documentType: '',
    stage1: '',
    revisionNo: '',
    status1: '',
    besComments: ''
  });

  // Handle input change for dropdowns
  const handleDropdownChange = (e, fieldName) => {
    setSelectedValues({ ...selectedValues, [fieldName]: e.target.value });
  };

  // Handle Add button click
  const handleAddRow = () => {
    // Validate if all fields are selected
    if (
      selectedValues.locationType &&
      selectedValues.documentType &&
      selectedValues.stage1 &&
      selectedValues.revisionNo &&
      selectedValues.status1 &&
      selectedValues.besComments
    ) {
      // Create new row object
      const newRow = {
        id: tableRows.length + 1, // Unique ID (you can use uuid if needed)
        locationType: selectedValues.locationType,
        documentType: selectedValues.documentType,
        stage1: selectedValues.stage1,
        revisionNo: selectedValues.revisionNo,
        status1: selectedValues.status1,
        besComments: selectedValues.besComments
      };

      // Add new row to tableRows state
      setTableRows([...tableRows, newRow]);

      // Clear selected values state
      setSelectedValues({
        locationType: '',
        documentType: '',
        stage1: '',
        revisionNo: '',
        status1: '',
        besComments: ''
      });
    } else {
      alert('Please select values for all fields before adding.');
    }
  };

  // Handle Submit button click
  const handleSubmit = async () => {
    try {
      // Make Axios POST request to localhost:3000 (update URL as needed)
      const response = await axios.post('http://localhost:3000/api/saveData', tableRows);
      console.log('Response:', response.data); // Log response data if needed
      alert('Data saved successfully!');
      // Optionally clear tableRows state or perform other actions after successful save
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Error saving data. Please try again.'); // Display error message
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
    <div className="max-w-full overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">Drawing Approval Table</h2>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                Location Type
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                Document Type
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                Stage 1
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                Revision No.
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                Status 1
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                BES Comments
              </th>
              <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Existing rows */}
            {tableRows.map((row) => (
              <tr key={row.id}>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  {row.locationType}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  {row.documentType}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  {row.stage1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  {row.revisionNo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  {row.status1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  {row.besComments}
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

            {/* Input row with dropdowns */}
            <tr>
              {/* Location Type Dropdown */}
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <select
                  value={selectedValues.locationType}
                  onChange={(e) => handleDropdownChange(e, 'locationType')}
                  className="border border-gray-300 px-3 py-1 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                >
                  <option value="">Select...</option>
                  {locationTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </td>

              {/* Document Type Dropdown */}
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <select
                  value={selectedValues.documentType}
                  onChange={(e) => handleDropdownChange(e, 'documentType')}
                  className="border border-gray-300 px-3 py-1 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                >
                  <option value="">Select...</option>
                  {documentTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </td>

              {/* Stage 1 Dropdown */}
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <select
                  value={selectedValues.stage1}
                  onChange={(e) => handleDropdownChange(e, 'stage1')}
                  className="border border-gray-300 px-3 py-1 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                >
                  <option value="">Select...</option>
                  {stage1Options.map((stage) => (
                    <option key={stage} value={stage}>
                      {stage}
                    </option>
                  ))}
                </select>
              </td>

              {/* Revision No. Dropdown */}
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <select
                  value={selectedValues.revisionNo}
                  onChange={(e) => handleDropdownChange(e, 'revisionNo')}
                  className="border border-gray-300 px-3 py-1 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                >
                  <option value="">Select...</option>
                  {revisionNos.map((rev) => (
                    <option key={rev} value={rev}>
                      {rev}
                    </option>
                  ))}
                </select>
              </td>

              {/* Status 1 Dropdown */}
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <select
                  value={selectedValues.status1}
                  onChange={(e) => handleDropdownChange(e, 'status1')}
                  className="border border-gray-300 px-3 py-1 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                >
                  <option value="">Select...</option>
                  {status1Options.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </td>

              {/* BES Comments Dropdown */}
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <select
                  value={selectedValues.besComments}
                  onChange={(e) => handleDropdownChange(e, 'besComments')}
                  className="border border-gray-300 px-3 py-1 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                >
                  <option value="">Select...</option>
                  {besCommentsOptions.map((comment) => (
                    <option key={comment} value={comment}>
                      {comment}
                    </option>
                  ))}
                </select>
              </td>

              {/* Empty cell for delete button */}
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200"></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Add and Submit buttons */}
      <div className="flex justify-end mt-4">
        <button
          onClick={handleAddRow}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add
        </button>
        <button
          onClick={handleSubmit}
          className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EmptyTable;
