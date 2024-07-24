import React, { useState } from 'react';

const QAQC = () => {
  const [data, setData] = useState([
    { srNumber: 1, item: 'Aluminium extrusions', test: 'Hardness test', frequency: 'For each lot', status: 'Not Completed' },
    { srNumber: 2, item: 'Aluminium extrusions', test: 'Chemical Test- Wet and Spectrograph', frequency: '3 nos. of sample Per testing 100 tons/ 5000Sq. m of façade', status: 'Not Completed' },
    { srNumber: 3, item: 'Aluminium extrusions', test: 'Mechanical Test- Tensile Proof Stress tests', frequency: '- 3 nos. of sample Per testing 100 tons/ 5000Sq. m of façade', status: 'Not Completed' },
    { srNumber: 4,item: 'Aluminium extrusions', test: 'Hardness test', frequency: 'For each lot', status: 'Not Completed' },
    { srNumber: 5,item: 'Aluminium extrusions', test: 'Chemical Test- Wet and Spectrograph', frequency: '3 nos. of sample Per testing 100 tons/ 5000Sq. m of façade', status: 'Not Completed' },
    { srNumber: 6,item: 'Aluminium extrusions', test: 'Mechanical Test- Tensile Proof Stress tests', frequency: '- 3 nos. of sample Per testing 100 tons/ 5000Sq. m of façade', status: 'Not Completed' },
    { srNumber: 7,item: 'Finish to Aluminium extrusions', test: 'Dry Film Thickness D1005', frequency: '5 nos of sample 300 mm length per batch of powder coating / PVDF', status: 'Not Completed' },
    {srNumber: 8, item: 'Finish to Aluminium extrusions', test: 'Pencil Hardness D3363', frequency: 'All tests specified herein to be carried out for every 100Tons of Aluminium profiles for each colour', status: 'Not Completed' },
    { srNumber: 9,item: 'Finish to Aluminium extrusions', test: 'Scratch Resistance D1474', frequency: 'All tests specified herein to be carried out for every 100Tons of Aluminium profiles for each colour', status: 'Not Completed' },
    {srNumber: 10, item: 'Finish to Aluminium extrusions', test: 'Abrasion Resistance D4060', frequency: 'All tests specified herein to be carried out for every 100Tons of Aluminium profiles for each colour', status: 'Not Completed' },
    { srNumber: 11,item: 'Finish to Aluminium extrusions', test: 'Impact Resistance D2794', frequency: 'All tests specified herein to be carried out for every 100Tons of Aluminium profiles for each colour', status: 'Not Completed' },
    { srNumber: 12,item: 'Finish to Aluminium extrusions', test: 'Salt Spray B117', frequency: 'All tests specified herein to be carried out for every 100Tons of Aluminium profiles for each colour', status: 'Not Completed' },
    { srNumber: 13,item: 'Finish to Aluminium extrusions', test: 'Adhesion- D2197, D3359', frequency: 'All tests specified herein to be carried out for every 100Tons of Aluminium profiles for each colour', status: 'Not Completed' },
    { srNumber: 3,item: 'Finish to Aluminium extrusions', test: 'Gloss level D523', frequency: 'All tests specified herein to be carried out for every 100Tons of Aluminium profiles for each colour', status: 'Not Completed' },
    {srNumber: 14, item: 'Finish to Aluminium extrusions', test: 'Color D2244', frequency: 'All tests specified herein to be carried out for every 100Tons of Aluminium profiles for each colour', status: 'Not Completed' },
    {srNumber: 15, item: 'Finish to Aluminium extrusions', test: 'Third party tests for Finishes/Coating have to be done in presence of BES', frequency: 'All tests specified herein to be carried out for every 100Tons of Aluminium profiles for each colour', status: 'Not Completed' },
    {srNumber: 16, item: 'Sealants-Structural', test: 'Compatibility test for - Aluminium - Steel Compatibility with - PVF2 / Paint Finish - Glass coating - Glazing Gasket - Setting block - Spacer Tape - Spacers', frequency: 'ASTM C-1087', status: 'Not Completed' },
    { srNumber: 17,item: 'Sealants-Structural', test: 'Non-Stain Test Presence of Sealant manufacturer Confirmation of method statement by manufacturer', frequency: 'C 1248', status: 'Not Completed' },
    { srNumber: 18,item: 'Glass Fittings', test: 'Laboratory Tests: Physical and Chemical tests (Steel Grade tests(Dry/Wet), Hardness, Load bearing capacity, tensile/compressive capacities OR Manufacturer’s Test certificates material grade mentioned with structural strengths etc.', frequency: '', status: 'Not Completed' },
    { srNumber: 19,item: 'Gaskets and spacers', test: 'Shore Hardness', frequency: '', status: 'Not Completed' },
    { srNumber: 20,item: 'Gaskets and spacers', test: 'Chemical Test', frequency: '', status: 'Not Completed' },
    { srNumber: 21,item: 'Finish to Steel', test: 'Abrasive/ Blast cleaning BS EN ISO 8504-2: 2001 Part 2', frequency: 'Minimum 3 samples to be tested per batch', status: 'Not Completed' },
    {srNumber: 22, item: 'Finish to Steel', test: 'Film thickness D1005', frequency: '', status: 'Not Completed' },
    { srNumber: 23,item: 'Finish to Steel', test: 'Adhesion D2197 / D3359', frequency: '', status: 'Not Completed' },
    { srNumber: 24,item: 'Finish to Steel', test: 'Resistance to Impact D2794', frequency: '', status: 'Not Completed' },
    { srNumber: 25,item: 'Finish to Steel', test: 'Test for color fastness and consistency', frequency: '', status: 'Not Completed' },
    { srNumber: 26,item: 'GRC', test: 'Glass content BS EN 1170Part2', frequency: 'Record', status: 'Not Completed' },
    {srNumber: 27, item: 'GRC', test: 'Modulus of Rupture BS EN 1170Part5', frequency: 'Record', status: 'Not Completed' },
    { srNumber: 28,item: 'Gutter Ponding Test', test: '', frequency: 'Conduct 100% gutter testing for all gutters of Curtain wall. All stand joint drainage gutters shall be flooded to a maximum freeboard height and left for 12 Hrs.', status: 'Not Completed' },
    { srNumber: 29,item: 'Site Water Test', test: 'AAMA standard with Monarch Nozzle', frequency: 'First Test: Upon Typical Façade to be tested for completion of 1000Sq. m or 10% of Façade area. Subsequent test: Upon completion of every 3 floors / as per consultant’s instruction Contractor should carry Water test at minimum 10 locations randomly selected by consultant', status: 'Not Completed' },
    {srNumber: 30, item: 'Site Performance Test (with Enclosed chamber)', test: 'AAMA 501.2 & 502.2', frequency: 'Specimen size as per project façade requirement.', status: 'Not Completed' },
    {srNumber: 31,item: 'Welding Test', test: 'First Test: Upon Mock-up approval Subsequent test: Periodic -DPT -75% -MPT ASTM E165 -10 to 25 % for plate thickness upto 24mm & - 25 to 100% for plates more than 24mm -UT ASTM E94 & ASTM E747 -10 to 25 % for plate thickness upto 24mm & - 25 to 100% for plates more than 24mm', frequency: '', status: 'Not Completed' },
    { srNumber: 32,item: 'Anchor Pull-out Test', test: 'IS11309-1985', frequency: 'Minimum 10% of installed anchors to be tested. 1st test: upon completion of First Floor Subsequent Test: 2-5% of completion', status: 'Not Completed' },
    {srNumber: 33, item: 'Hand Rail pull out test', test: 'ASTM E-935', frequency: '', status: 'Not Completed' },
    { srNumber: 34,item: 'Restrain Pin Pull out test', test: '', frequency: '', status: 'Not Completed' },
    { srNumber: 35,item: 'Powder coating test (DFT)', test: '', frequency: '', status: 'Not Completed' },
    { srNumber: 36,item: 'Operable Push/Pull load Test on sash frames 75 Kg in all direction at free end of the sashes. AAMA-910-16', test: 'Prior to completion of 10% progress of the Typical façade works following verification should be completed. Operable Sash load test.', frequency: '', status: 'Not Completed' },
    { srNumber: 37,item: 'Finish to Steel (Factory Test)', test: 'A. Surface Preparation Abrasive/ Blast cleaning -Surface roughness Range (30-50) µn -Free from oil / grease / dirt / rust / mill scale ISO 8504-2:2001 Part 2', frequency: '', status: 'Not Completed' },
    { srNumber: 38,item: 'Finish to Steel (Factory Test)', test: 'B. Paint Application -Film thickness Test -Dry film thickness reading by Elcometer (by contractor) -Adhesion (Cross Cut) Test -Most stringent criteria to be considered -Resistance to impact International Standards', frequency: 'Reading frequency of every 20 Tons of steel work', status: 'Not Completed' },
    { srNumber: 39,item: 'Finish to Steel (Factory Test)', test: 'B. Paint Application -Reading at frequency of every 20 Tons of steel work -Reading at frequency of every 40 Tons of Steel work', frequency: '', status: 'Not Completed' },
    { srNumber: 40,item: 'Finish to Steel (Factory Test)', test: 'C. Final Finish -Test for Color fastness and consistency (Grey scale grade) International Standards', frequency: 'Reading at frequency of every 40 Tons of steel work', status: 'Not Completed' },
    { srNumber: 41,item: 'Weld (at Factory)', test: 'Magnetic Particle Test (MPT) & Penetrant Test (PT) International Standards', frequency: 'MPT -15 to 25% of total weld & PT- 20 to 50% of total weld', status: 'Not Completed' },
    { srNumber: 42,item: 'Mock up Test', test: 'Wind, Water and Air infiltration', frequency: '15% of total building height', status: 'Not Completed' },
    // Add more rows as per your initial data...
  ]);

  const [nextSrNumber, setNextSrNumber] = useState(data.length + 1);

  const handleStatusChange = (index, newStatus) => {
    const newData = [...data];
    newData[index].status = newStatus;
    setData(newData);
  };

  const handleAddRow = (index) => {
    const newData = [...data];
    newData.splice(index + 1, 0, { srNumber: nextSrNumber, item: '', test: '', frequency: '', status: 'Not Completed' });
    setNextSrNumber(nextSrNumber + 1); // Increment serial number for next row
    setData(newData);
  };

  const handleDeleteRow = (index) => {
    if (window.confirm("Are you sure you want to delete this row?")) {
      const newData = [...data];
      newData.splice(index, 1);
      setData(newData);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted.');
  };

  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-xl font-bold mb-4">QAQC</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr>
            <th className="py-2 px-4 text-left text-gray-600">Sr. No. (+/-)</th>
            <th className="py-2 px-4 text-left text-gray-600">Element/Items</th>
            <th className="py-2 px-4 text-left text-gray-600">Test to be carried/Standards</th>
            <th className="py-2 px-4 text-left text-gray-600">Frequency / Quantity</th>
            <th className="py-2 px-4 text-left text-gray-600">Schedule / Status (Completed / Not Completed)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="py-2 px-4">
                <div className="flex">
                <span className="mr-2 ">{row.srNumber}</span>

                  <button
                    onClick={() => handleAddRow(index)}
                    className="mr-2 bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleDeleteRow(index)}
                    className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    -
                  </button>
                </div>
              </td>
              <td className="py-2 px-4">
                <input
                  type="text"
                  value={row.item}
                  onChange={(e) => {
                    const newData = [...data];
                    newData[index].item = e.target.value;
                    setData(newData);
                  }}
                  className="w-full bg-gray-50 border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </td>
              <td className="py-2 px-4">
                <input
                  type="text"
                  value={row.test}
                  onChange={(e) => {
                    const newData = [...data];
                    newData[index].test = e.target.value;
                    setData(newData);
                  }}
                  className="w-full bg-gray-50 border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </td>
              <td className="py-2 px-4">
                <input
                  type="text"
                  value={row.frequency}
                  onChange={(e) => {
                    const newData = [...data];
                    newData[index].frequency = e.target.value;
                    setData(newData);
                  }}
                  className="w-full bg-gray-50 border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </td>
              <td className="py-2 px-4">
                <select
                  value={row.status}
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
                      : 'gray-50'
                  } border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  <option value="Done" className="bg-green-100">
                    Done
                  </option>
                  <option value="Not Done" className="bg-red-100">
                    Not Done
                  </option>
                  <option value="Partially Done" className="bg-orange-100">
                    Partially Done
                  </option>
                  <option value="Not Applicable" className="bg-blue-100">
                    Not Applicable
                  </option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default QAQC;