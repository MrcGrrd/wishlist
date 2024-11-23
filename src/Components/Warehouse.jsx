
import React, { useState, useEffect } from 'react';

const warehouse = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({ WHcode: null, WHname: '', BranchCode: '', Address: '', Invtype: ''});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setItems([
      { WHcode: 1, WHname: 'Main Warehouse', BranchCode: '00000', Address: 'Makati City', Invtype: 'FG' },
      { WHcode: 2, WHname: 'Secondary Warehouse', BranchCode: '00000', Address: 'Pasig City', Invtype: 'MS' },
    ]);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, { ...formData, WHcode: items.length + 1 }]);
    setFormData({ WHcode: null, WHname: '', BranchCode: '', Address: '', Invtype: '' });
  };

  const deleteItem = (WHcode) => {
    setItems(items.filter(item => item.WHcode !== WHcode));
  };

  const editItem = (item) => {
    setFormData(item);
    setIsEditing(true);
  };

  const updateItem = (e) => {
    e.preventDefault();
    setItems(items.map(item => (item.WHcode === formData.WHcode ? formData : item)));
    setFormData({ WHcode: null, WHname: '', BranchCode: '', Address: '', Invtype: '' });
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Warehouse Codes</h1>
      <form onSubmit={isEditing ? updateItem : addItem} className="mb-6 bg-white shadow-lg rounded p-6 space-y-4">
        <div>
          <label className="block font-semibold mb-1">Warehouse name:</label>
          <input
            type="text"
            name="name"
            value={formData.WHname}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Branch Code:</label>
          <input
            type="text"
            name="BranchCode"
            value={formData.BranchCode}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        
        <div>
          <label className="block font-semibold mb-1">Address:</label>
          <input
            type="text"
            name="Address"
            value={formData.Address}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-right"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Inventory type:</label>
          <input
            type="text"
            name="Invtype"
            value={formData.Invtype}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
        >
          {isEditing ? 'Update' : 'Add'} Item
        </button>
      </form>

      <table className="w-full bg-white shadow-lg rounded overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-3 px-4 font-semibold text-left">WHcode</th>
            <th className="py-3 px-4 font-semibold text-left">WHname</th>
            <th className="py-3 px-4 font-semibold text-left">BranchCode</th>
            <th className="py-3 px-4 font-semibold text-left">Invtype</th>
            <th className="py-3 px-4 font-semibold text-left">Address</th>
            <th className="py-3 px-4 font-semibold text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-50">
              <td className="py-3 px-4">{item.WHcode}</td>
              <td className="py-3 px-4">{item.WHname}</td>
              <td className="py-3 px-4">{item.BranchCode}</td>
              <td className="py-3 px-4">{item.Invtype}</td>
              <td className="py-3 px-4">{item.Address}</td>
              <td className="py-3 px-4 space-x-2">
                <button
                  onClick={() => editItem(item)}
                  className="bg-yellow-400 text-white py-1 px-3 rounded hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default warehouse;





