import React, { useEffect, useState } from 'react';
import { getEmployees, deleteEmployee } from '../Services/EmployeeService';
import EmployeeForm from './EmployeeForm';
import Modal from 'react-modal';
import * as XLSX from 'xlsx';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await getEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error('Failed to fetch employees:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      fetchEmployees();
    } catch (error) {
      console.error('Failed to delete employee:', error);
    }
  };

  const openModal = (employee = null) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEmployee(null);
    setIsModalOpen(false);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(employees);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Employees');
    XLSX.writeFile(workbook, 'Employees.xlsx');
  };

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">NAYSA Employee Management System</h2>
      <div className="flex flex-col md:flex-row justify-between mb-4 space-y-2 md:space-y-0">
        <button
          onClick={() => openModal()}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto"
        >
          Add Employee
        </button>
        <button
          onClick={exportToExcel}
          className="bg-green-500 text-white px-4 py-2 rounded w-full md:w-auto"
        >
          Export to Excel
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 text-sm md:text-base">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Position</th>
              <th className="py-2 px-4 border-b">Department</th>
              <th className="py-2 px-4 border-b hidden md:table-cell">Phone</th>
              <th className="py-2 px-4 border-b hidden md:table-cell">Address</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{employee.name}</td>
                <td className="py-2 px-4 border-b">{employee.email}</td>
                <td className="py-2 px-4 border-b">{employee.position}</td>
                <td className="py-2 px-4 border-b">{employee.department}</td>
                <td className="py-2 px-4 border-b hidden md:table-cell">{employee.phone}</td>
                <td className="py-2 px-4 border-b hidden md:table-cell">{employee.address}</td>
                <td className="py-2 px-4 border-b">
  <button
    onClick={() => openModal(employee)}
    className="bg-yellow-500 text-white px-4 py-2 rounded mr-2 w-full sm:w-20 text-center"
  >
    Edit
  </button>
  <button
    onClick={() => handleDelete(employee.id)}
    className="bg-red-500 text-white px-4 py-2 rounded w-full sm:w-20 text-center"
  >
    Delete
  </button>
</td>


              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Add/Edit Employee */}
      <Modal
        isOpen={isModalOpen} 
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        ariaHideApp={false}
      >
        <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
          <EmployeeForm employee={selectedEmployee} onClose={closeModal} refreshEmployees={fetchEmployees} />
        </div>
      </Modal>
    </div>
  );
};

export default EmployeeList;
