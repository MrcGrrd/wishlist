import React, { useEffect, useState } from 'react';
import { addEmployee, getEmployeeById, updateEmployee } from '../Services/EmployeeService';
import { FaSearch } from 'react-icons/fa';
import LookupModal from './LookupModal';

const EmployeeForm = ({ employee, onClose, refreshEmployees }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    department: '',
    phone: '',
    address: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  const positionToDepartmentMap = {
    IMPLEM: 'TECHNICAL',

  };

  useEffect(() => {
    if (employee) {
      setFormData({
        name: employee.name || '',
        email: employee.email || '',
        position: employee.position || '',
        department: employee.department || '',
        phone: employee.phone || '',
        address: employee.address || '',
      });
    } else {
      setFormData({ name: '', email: '', position: '', department: '', phone: '', address: '' });
    }
  }, [employee]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const handleSelectOption = (selectedOption) => {
    console.log("Selected position:", selectedOption);
    const updatedFormData = { ...formData, [modalType]: selectedOption };

    if (modalType === 'position') {
      updatedFormData.department = positionToDepartmentMap[selectedOption] || '';
      console.log("Mapped department:", updatedFormData.department);
    }

    setFormData(updatedFormData);
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (employee) {
        await updateEmployee(employee.id, formData);
      } else {
        await addEmployee(formData);
      }
      refreshEmployees();
      onClose();
    } catch (error) {
      console.error('Failed to save employee:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold mb-4">{employee ? 'Edit Employee' : 'Add Employee'}</h2>
      <div>
        <label className="block font-medium">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-medium">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-medium">Position:</label>
        <div className="flex">
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
            readOnly
          />
          <button
            type="button"
            onClick={() => openModal('position')}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center"
          >
            <FaSearch />
          </button>
        </div>
      </div>
      <div>
        <label className="block font-medium">Department:</label>
        <input
          type="text"
          name="department"
          value={formData.department}
          readOnly
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-medium">Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-medium">Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
        >
          Cancel
        </button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save
        </button>
      </div>
      {showModal && (
        <LookupModal
          type={modalType}
          onSelect={handleSelectOption}
          onClose={() => setShowModal(false)}
          page="EmployeeForm"
        />
      )}
    </form>
  );
};

export default EmployeeForm;
