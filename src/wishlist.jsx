import React, { useState, useEffect } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [newItem, setNewItem] = useState({
    name: "",
    image1: "",
    image2: "",
    link1: "",
    link2: "",
    description: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  // Save wishlist to localStorage whenever it updates
  useEffect(() => {
    if (wishlist.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const addItem = () => {
    if (!newItem.name) {
      alert("Please provide a name for the item.");
      return;
    }

    if (editIndex !== null) {
      // Save edits to an existing item
      const updatedWishlist = [...wishlist];
      updatedWishlist[editIndex] = newItem;
      setWishlist(updatedWishlist);
      setEditIndex(null);
    } else {
      // Add a new item
      setWishlist([...wishlist, newItem]);
    }

    setNewItem({ name: "", image1: "", image2: "", link1: "", link2: "", description: "" });
  };

  const deleteItem = (index) => {
    const updatedWishlist = wishlist.filter((_, i) => i !== index);
    setWishlist(updatedWishlist);
  };

  const editItem = (index) => {
    setNewItem(wishlist[index]);
    setEditIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Gerard's Wishlist</h1>

      <div className="mt-6 w-full max-w-5xl">
        {wishlist.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {wishlist.map((item, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-lg shadow-md relative"
              >
                <div className="mb-3 space-y-3">
                  {item.image1 || item.image2 ? (
                    <div className="flex space-x-3">
                      {item.image1 && (
                        <div className="overflow-hidden rounded-lg w-1/2 group">
                          <img
                            src={item.image1}
                            alt={`${item.name} Image 1`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                          />
                        </div>
                      )}
                      {item.image2 && (
                        <div className="overflow-hidden rounded-lg w-1/2 group">
                          <img
                            src={item.image2}
                            alt={`${item.name} Image 2`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    item.image1 && (
                      <div className="overflow-hidden rounded-lg group">
                        <img
                          src={item.image1}
                          alt={`${item.name} Image`}
                          className="w-full h-45 object-cover group-hover:scale-110 transition-all duration-300"
                        />
                      </div>
                    )
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-700">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                )}
                <div className="mt-2 space-y-1">
                  {item.link1 && (
                    <a
                      href={item.link1}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-sm block"
                    >
                      View Wishlist 1
                    </a>
                  )}
                  {item.link2 && (
                    <a
                      href={item.link2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-sm block"
                    >
                      View Wishlist 2
                    </a>
                  )}
                </div>
                <button
                  onClick={() => deleteItem(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-600"
                  disabled
                >
                  X
                </button>
                <button
                  onClick={() => editItem(index)}
                  className="absolute top-2 right-10 bg-yellow-500 text-white px-2 py-1 rounded-full hover:bg-yellow-600"
                  disabled
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 mt-4">No items in your wishlist yet.</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;