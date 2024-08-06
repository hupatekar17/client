import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MaterialApproved = () => {
  // State for Façade Work Table Rows
  const [façadeWorkRows, setFaçadeWorkRows] = useState([
    {
      slNo: 1,
      item: 'Aluminium Extrusions - Alum Framed elements - Brackets - Louvers',
      docs: 'Submit supplier information and details, (manufacturers details). Mill certificate of extrusions for strength, size, finish, grades and structural properties of Billets for each lot. Hardness test for each lot. Submit samples-200 length (male & female) for fitment checks. Third party test for chemical and physical properties.',
      docType: 'Information, Certificate, Sample',
      comment: '',
    },
    {
      slNo: 2,
      item: 'Cladding Solid Aluminium Sheet',
      docs: 'Supplier. Make, grade. Samples- 300mm x 300mm- per make and colour.',
      docType: 'Information, Certificate, Samples',
      comment: '',
    },
    {
      slNo: 3,
      item: 'Spandrel Back Pans and Cement Board (Painted)',
      docs: 'Material. Finishing & Application Method. Samples- 300mm x 300mm- 3nos.',
      docType: 'Information, MTD statement, Samples',
      comment: '',
    },
    {
      slNo: 4,
      item: 'Finish to Aluminium Extrusions',
      docs: 'Applicator name and information. QA/QC tests as per specification to be conducted. Third party tests for Finishes/Coating have to be done in presence of BES. Samples- 300mm, 3nos.',
      docType: 'Information, Test certificates, Laboratory Tests, Samples',
      comment: '',
    },
    {
      slNo: 5,
      item: 'Glass',
      docs: 'Supplier. Processor should comply tender specification. Samples- 300mm x 300mm for selection of shade and colour then Final Approval will be done upon review of big size sample for visual aspects.',
      docType: 'Information, Certificates, Samples',
      comment: '',
    },
    {
      slNo: 6,
      item: 'Sealants - Weather',
      docs: 'Supplier. Types of sealants.',
      docType: 'Information, Material Certificates',
      comment: '',
    },
    {
      slNo: 7,
      item: 'Sealants - Structural',
      docs: 'Supplier. Laboratory tests - Physical and Chemical (Adhesive, shore hardness along with general QA QC tests as recommended by manufacturers).',
      docType: 'Information, Test Certificates',
      comment: '',
    },
    {
      slNo: 8,
      item: 'Glass Fittings',
      docs: 'Make. Laboratory Tests- Physical and Chemical tests (Steel Grade tests Dry/Wet), Hardness, Load bearing capacity, tensile/compressive capacities Or Manufacturers Test certificates material grade mentioned with structural strengths etc..). Samples- Typical fittings.',
      docType: 'Information, Manufacturers/ laboratory certificates, Samples',
      comment: '',
    },
    {
      slNo: 9,
      item: 'Gaskets & Spacers',
      docs: 'Material type. Physical and chemical properties. Samples-100mm length for each type.',
      docType: 'Information, Certificates, Samples',
      comment: '',
    },
    {
      slNo: 10,
      item: 'Insulation / Rockwool',
      docs: 'Material type. Supplier. Density certificates.',
      docType: 'Information, Certificates',
      comment: '',
    },
    {
      slNo: 11,
      item: 'Window / Door Accessories',
      docs: 'Make. Supplier information. Structural strengths and load bearing capacities of hardware. Samples- Each type of hardware.',
      docType: 'Information, Test certificates, Samples',
      comment: '',
    },
    {
      slNo: 12,
      item: 'Expanded Mesh',
      docs: 'Make. Supplier information. Samples.',
      docType: 'Information, Test certificates, Samples',
      comment: '',
    },
  ]);

  const [façadeSteelWorkComments, setFaçadeSteelWorkComments] = useState({
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
  });

  const handleFaçadeSteelWorkCommentChange = (index, value) => {
    setFaçadeSteelWorkComments((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  // Add a new row to the Façade Work table
  const addRow = (index) => {
    const newRows = [...façadeWorkRows];
    const newRow = {
      slNo: newRows.length + 1,
      item: '',
      docs: '',
      docType: '',
      comment: '',
    };
    newRows.splice(index + 1, 0, newRow);
    setFaçadeWorkRows(newRows);
  };

  // Remove a row from the Façade Work table
  const removeRow = (index) => {
    if (window.confirm('Are you sure you want to delete this row?')) {
      if (façadeWorkRows.length > 1) {
        const newRows = [...façadeWorkRows];
        newRows.splice(index, 1);
        setFaçadeWorkRows(newRows);
      }
    }
  };

  // Handle changes to the new row form
  const handleNewRowChange = (e) => {
    const { name, value } = e.target;
    setNewRow((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNewRowSubmit = (e) => {
    e.preventDefault();
    setFaçadeWorkRows((prev) => [
      ...prev,
      {
        slNo: prev.length + 1,
        item: newRow.item,
        docs: newRow.docs,
        docType: newRow.docType,
        comment: newRow.comment,
      },
    ]);
    setNewRow({
      item: '',
      docs: '',
      docType: '',
      comment: '',
    });
  };

  // State for new row in Façade Work Table
  const [newRow, setNewRow] = useState({
    item: '',
    docs: '',
    docType: '',
    comment: '',
  });

  return (
    <div className="overflow-x-auto p-4">
      {/* <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">BES Consultants</h1>
          <div className="flex space-x-4">
          <Link to="/">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-lg rounded-full hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Home
              </button>
            </Link>
            <Link to="/qaqc">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-lg rounded-full hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                QAQC
              </button>
            </Link>
            <Link to="/material">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-300 to-blue-500 text-white text-lg rounded-full hover:from-blue-400 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Material Approved
              </button>
            </Link>
            <Link to="/drawing">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg rounded-full hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Drawing Approval
              </button>
            </Link>
          </div>
        </div> */}
      <h1 className="text-2xl font-bold mb-6">Material Approval</h1>

      {/* Façade Work Table */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Façade Work Document Submission</h2>
        <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left border-b border-gray-300">Element/Items</th>
              <th className="p-3 text-left border-b border-gray-300">Documents/Samples to be Submitted</th>
              <th className="p-3 text-left border-b border-gray-300">Document Type</th>
              <th className="p-3 text-left border-b border-gray-300">Status</th>
              <th className="p-3 text-left border-b border-gray-300">BES Comments</th>
              <th className="p-3 text-left border-b border-gray-300">(+/-)</th>


            </tr>
          </thead>
          <tbody>
            {façadeWorkRows.map((row, index) => (
              <tr key={index} className="border-t border-gray-200">
               
                <td className="p-3 text-left border-r border-gray-300">
                  <textarea
                    value={row.item}
                    onChange={(e) => {
                      const newRows = [...façadeWorkRows];
                      newRows[index].item = e.target.value;
                      setFaçadeWorkRows(newRows);
                    }}
                    placeholder="Item"
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm resize-y"
                  />
                </td>
                <td className="p-3 text-left border-r border-gray-300">
                  <textarea
                    value={row.docs}
                    onChange={(e) => {
                      const newRows = [...façadeWorkRows];
                      newRows[index].docs = e.target.value;
                      setFaçadeWorkRows(newRows);
                    }}
                    placeholder="Documents/Samples"
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm resize-y"
                  />
                </td>
                <td className="p-3 text-left border-r border-gray-300">
                  <input
                    type="text"
                    value={row.docType}
                    onChange={(e) => {
                      const newRows = [...façadeWorkRows];
                      newRows[index].docType = e.target.value;
                      setFaçadeWorkRows(newRows);
                    }}
                    placeholder="Document Type"
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                  />
                </td>
                <td className="p-3 text-left border-r border-gray-300">
                  <select
                    value={row.comment}
                    onChange={(e) => {
                      const newRows = [...façadeWorkRows];
                      newRows[index].comment = e.target.value;
                      setFaçadeWorkRows(newRows);
                    }}
                    className={`w-full p-2 border rounded-md shadow-sm sm:text-sm ${
                      row.comment === 'Submitted'
                        ? 'bg-green-100'
                        : row.comment === 'Not Done'
                        ? 'bg-red-100'
                        : row.comment === 'Partially Done'
                        ? 'bg-orange-100'
                        : row.comment === 'Not Applicable'
                        ? 'bg-blue-100'
                        : ''
                    }`}
                  >
                    <option value="">Select</option>
                    <option value="Submitted" className="text-green-700">
                      Submitted
                    </option>
                    <option value="Not Done" className="text-red-600">
                      Pending
                    </option>
                    <option value="Partially Done" className="text-orange-600">
                      Partially Submitted
                    </option>
                    <option value="Not Applicable" className="text-blue-600">
                      Not Applicable
                    </option>
                  </select>
                </td>
                <td className="p-3 text-left border-r border-gray-300">
                  <textarea
                  
                    placeholder="Remarks"
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm resize-y"
                  />
                </td>
                <td className="p-3 text-left border-r border-gray-300">
                  <button
                    type="button"
                    onClick={() => addRow(index)}
                    className="ml-2 bg-green-500 text-white p-1 rounded text-xs"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => removeRow(index)}
                    className="ml-2 bg-red-500 text-white p-1 rounded text-xs"
                  >
                    -
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Submit
      </button>
    </div>
  );
};

export default MaterialApproved;