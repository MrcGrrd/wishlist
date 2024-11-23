// src/components/LookupModal.jsx
import React, { useEffect, useState } from 'react';
import { getDepartment, getPosition } from '../Services/EmployeeService';

const LookupModal = ({ type, onSelect, onClose, page }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = type === 'department' ? await getDepartment() : await getPosition();
        console.log(response.data);
        setOptions(response.data)
      } catch (error) {
        console.error(`Failed to fetch ${type} data:`, error);
      }
    };
    fetchData();
  }, [type]);

  useEffect(() => {
    console.log(`LookupModal opened by ${page} for ${type}`);
  }, [page, type]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-md w-80">
        <h3 className="text-lg font-bold mb-4">Select {type.charAt(0).toUpperCase() + type.slice(1)}</h3>
        <table className="table-auto w-full mb-4">
          <thead>
            <tr>
              <th className="border px-4 py-2">Account Code</th>
              <th className="border px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {options.map((option, index) => (
              <tr
                key={`${option.acct_code || 'undefined-code'}-${option.acct_desc || 'undefined-desc'}-${index}`}
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => onSelect(option.acct_desc)}
              >
                <td className="border px-4 py-2">{option.acct_code || 'N/A'}</td>
                <td className="border px-4 py-2">{option.acct_desc || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={onClose} className="bg-gray-300 text-black px-4 py-2 rounded w-full">
          Close
        </button>
      </div>
    </div>
  );
};

export default LookupModal;
