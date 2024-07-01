import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const DrawingApprovalTable = () => {
  const [rows, setRows] = useState([
    { id: 1, submissionDate: null, approvalDate: null, pendingIssue: '', status: 'Pending' }
  ]);

  const handleSubmissionDateChange = (date, index) => {
    const newRows = [...rows];
    newRows[index].submissionDate = date;
    setRows(newRows);
  };

  const handleApprovalDateChange = (date, index) => {
    const newRows = [...rows];
    newRows[index].approvalDate = date;
    setRows(newRows);
  };

  const handlePendingIssueChange = (event, index) => {
    const newRows = [...rows];
    newRows[index].pendingIssue = event.target.value;
    setRows(newRows);
  };

  const handleStatusChange = (event, index) => {
    const newRows = [...rows];
    newRows[index].status = event.target.value;
    setRows(newRows);
  };

  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      submissionDate: null,
      approvalDate: null,
      pendingIssue: '',
      status: 'Pending'
    };
    setRows([...rows, newRow]);
  };

  const handleDeleteRow = (id) => {
    const newRows = rows.filter((row) => row.id !== id);
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
        BES Consultants
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
        {/* Sidebar content */}
        <h2 className="text-xl font-bold mb-4">Projects</h2>
        {/* Placeholder for empty sidebar */}
      </div>

      {/* Main Content */}
      <div className="flex-1 container mx-auto">
        <h1 className="text-3xl font-bold text-teal-500 mb-4">Drawing Material Approved</h1>
        <button className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddRow}>
          <FontAwesomeIcon icon={faPlus} /> Add
        </button>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Sr.no.</th>
              <th className="px-4 py-2">Facade Reference</th>
              <th className="px-4 py-2">Submission Date</th>
              <th className="px-4 py-2">Approval Date</th>
              <th className="px-4 py-2">Reference Link</th>
              <th className="px-4 py-2">Pending Issue</th>
              <th className="px-4 py-2" style={{ width: "200px" }}>Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.id}>
                <td className="border px-4 py-2">{row.id}</td>
                <td className="border px-4 py-2">
                  <input type="text" className="w-full border px-2 py-1 resize-none" />
                </td>
                <td className="border px-4 py-2">
                  <DatePicker
                    selected={row.submissionDate}
                    onChange={(date) => handleSubmissionDateChange(date, index)}
                    className="w-full border px-2 py-1"
                    dateFormat="dd/MM/yyyy"
                  />
                </td>
                <td className="border px-4 py-2">
                  <DatePicker
                    selected={row.approvalDate}
                    onChange={(date) => handleApprovalDateChange(date, index)}
                    className="w-full border px-2 py-1"
                    dateFormat="dd/MM/yyyy"
                  />
                </td>
                <td className="border px-4 py-2">
                  <a href="#">Link{row.id}</a>
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    className="w-full border px-2 py-1 resize-none"
                    value={row.pendingIssue}
                    onChange={(event) => handlePendingIssueChange(event, index)}
                  />
                </td>
                <td className="border px-4 py-2">
                  <select
                    value={row.status}
                    onChange={(event) => handleStatusChange(event, index)}
                    className={`w-full border px-2 py-1 ${row.status === 'Pending' ? 'bg-yellow-200' : row.status === 'Closed' ? 'bg-green-200' : 'bg-orange-200'}`}
                  >
                    <option value="Pending" className="bg-yellow-200">Pending</option>
                    <option value="Closed" className="bg-green-200">Closed</option>
                    <option value="Open" className="bg-orange-200">Open</option>
                  </select>
                </td>
                <td className="border px-4 py-2">
                  <button className="bg-red-500 text-white font-bold py-2 px-4" onClick={() => handleDeleteRow(row.id)}>
                     Delete
                  </button>
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

export default DrawingApprovalTable;
