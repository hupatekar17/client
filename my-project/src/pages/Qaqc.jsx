import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QAQC = ({ projectId }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQAQCData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/projects/${projectId}/qaqc`);
        console.log(response.data); // Check the response data
        setData(response.data.qaqcEntries || []); // Set default to empty array if no entries found
        setLoading(false);
      } catch (err) {
        setError('Error fetching QAQC data');
        console.log(err)
        setLoading(false);
      }
    };

    fetchQAQCData();
  }, [projectId]);

  const handleStatusChange = (index, newStatus) => {
    const newData = [...data];
    newData[index].status = newStatus;
    setData(newData);
  };

  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-xl font-bold mb-4">Project QAQC</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="py-2 px-4 text-left text-gray-600">Element/Items</th>
              <th className="py-2 px-4 text-left text-gray-600">Tests</th>
              <th className="py-2 px-4 text-left text-gray-600">Codes/Standards</th>
              <th className="py-2 px-4 text-left text-gray-600">Frequency / Quantity</th>
              <th className="py-2 px-4 text-left text-gray-600">Status</th>
              <th className="py-2 px-4 text-left text-gray-600">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-2 px-4">
                  <textarea
                    value={row.item || ''}
                    readOnly
                    className="w-full bg-gray-50 border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="No data"
                  />
                </td>
                <td className="py-2 px-4">
                  <textarea
                    value={row.test || ''}
                    readOnly
                    className="w-full bg-gray-50 border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="No data"
                  />
                </td>
                <td className="py-2 px-4">
                  <textarea
                    value={row.codesStandards || ''}
                    readOnly
                    className="w-full bg-gray-50 border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="No data"
                  />
                </td>
                <td className="py-2 px-4">
                  <textarea
                    value={row.frequency || ''}
                    readOnly
                    className="w-full bg-gray-50 border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="No data"
                  />
                </td>
                <td className="py-2 px-4">
                  <select
                    value={row.status || ''}
                    onChange={(e) => handleStatusChange(index, e.target.value)}
                    className={`w-full border ${
                      row.status === 'Done'
                        ? 'bg-green-100'
                        : row.status === 'Not Done'
                        ? 'bg-red-100'
                        : row.status === 'Partially Done'
                        ? 'bg-orange-100'
                        : row.status === 'Not Applicable'
                        ? 'bg-blue-100'
                        : 'bg-gray-50'
                    } border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="Done">Done</option>
                    <option value="Not Done">Not Done</option>
                    <option value="Partially Done">Partially Done</option>
                    <option value="Not Applicable">Not Applicable</option>
                  </select>
                </td>
                <td className="py-2 px-4">
                  <textarea
                    value={row.remarks || ''}
                    readOnly
                    className="w-full bg-gray-50 border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="No data"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default QAQC;
