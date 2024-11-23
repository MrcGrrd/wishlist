import React, { useState, useEffect } from 'react';

const ItemList = (refreshItems) => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({ id: null, name: '', description: '', amount: parseFloat(0).toFixed(4), date: new Date().toISOString().slice(0, 10) });
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setItems([
      { id: 1, name: 'Item 1', description: 'Description 1', amount: 100, date: '11/7/2024' },
      { id: 2, name: 'Item 2', description: 'Description 2', amount: 100, date: '11/7/2024' },
    ]);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const openModal = (item = null) => {
    if (item) {
      setFormData(item);
      setIsEditing(true);
    } else {
      setFormData({ id: null, name: '', description: '', amount: parseFloat(0).toFixed(4), date: new Date().toISOString().slice(0, 10) });
      setIsEditing(false);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const addItem = (e) => {
  //   e.preventDefault();
  //   setItems([...items, { ...formData, id: items.length + 1 }]);
  //   closeModal();
  // };

  const addItem = async (e) => {
    e.preventDefault();
    try {
      const response = await addEmployee(formData); 
      setItems([...items, response.data]); 
      closeModal();
      refreshItems()
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };
  

  const updateItem = (e) => {
    e.preventDefault();
    setItems(items.map(item => (item.id === formData.id ? formData : item)));
    closeModal();
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">React CRUD</h1>

      <div className="flex justify-end mb-6">
        <button
          onClick={() => openModal()}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Item
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">{isEditing ? 'Edit Item' : 'Add Item'}</h2>
            <form onSubmit={isEditing ? updateItem : addItem}>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Description:</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Amount:</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-right"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Date:</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  {isEditing ? 'Update' : 'Add'} Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <table className="w-full bg-white shadow-lg rounded overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-3 px-4 font-semibold text-left">ID</th>
            <th className="py-3 px-4 font-semibold text-left">Name</th>
            <th className="py-3 px-4 font-semibold text-left">Description</th>
            <th className="py-3 px-4 font-semibold text-left">Amount</th>
            <th className="py-3 px-4 font-semibold text-left">Date</th>
            <th className="py-3 px-4 font-semibold text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-50">
              <td className="py-3 px-4">{item.id}</td>
              <td className="py-3 px-4">{item.name}</td>
              <td className="py-3 px-4">{item.description}</td>
              <td className="py-3 px-4">{parseFloat(item.amount).toFixed(4)}</td>
              <td className="py-3 px-4">{item.date}</td>
              <td className="py-3 px-4 space-x-2">
                <button
                  onClick={() => openModal(item)}
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

export default ItemList;
