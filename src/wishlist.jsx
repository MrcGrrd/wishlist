import React from "react";

const Wishlist = () => {
  // Predefined wishlist items
  const wishlist = [
    {
      name: "Gaabor Air Fryer & Luggage Travel Bag",
      image1:
        "https://down-ph.img.susercontent.com/file/ph-11134207-7r98v-lzt3ekbk2anuf7.webp", // Replace with your image URL
      image2:
        "https://down-ph.img.susercontent.com/file/ph-11134207-7rasg-m2j3ujt1za82e5@resize_w450_nl.webp", // Replace with your image URL
      price: "Air Fryer: ₱1,899",
      link1: {
        name: "Gaabor Air Fryer",
        url: "https://shopee.ph/Gaabor-Air-Fryer-Dual-Rotary-Knob-Transparent-Window-9-Menus-Reheat-Defrost-5L-Capacity-i.485132629.28560323292",
      }, // Replace with your link
      link2: {
        name: "Luggage Bag",
        url: "https://shopee.ph/ISLAND-ELEPHANT-Free-14inch-Luggage-Travel-Bag-i.734478333.19407841433?sp_atk=f88c04ad-cb50-4cdd-b7c0-8b9d0b6078bb",
      }, // Replace with your link
      description:
        "Sample lang po yung luggage bag, if may marerecommend po kayo na mas matibay and mas maganda pwede po. Thank you.",
    },
    // Add other items here...
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Gerard's Wishlist</h1>

      <div className="mt-6 w-full max-w-5xl">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlist.map((item, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-lg shadow-md relative group"
            >
              <div className="mb-3 space-y-3">
                <div className="flex space-x-3">
                  {/* Display image1 */}
                  {item.image1 && (
                    <div className="overflow-hidden rounded-lg w-1/2">
                      <img
                        src={item.image1}
                        alt={`${item.name} Image 1`}
                        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  )}
                  {/* Display image2 */}
                  {item.image2 && (
                    <div className="overflow-hidden rounded-lg w-1/2">
                      <img
                        src={item.image2}
                        alt={`${item.name} Image 2`}
                        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  )}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-700">
                {item.name}
              </h3>
              <p className="text-gray-700 font-medium mt-1">{item.price}</p>
              {item.description && (
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              )}
              <div className="mt-2 space-y-1">
                {/* Display link1 */}
                {item.link1 && (
                  <a
                    href={item.link1.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm block"
                  >
                    {item.link1.name}
                  </a>
                )}
                {/* Display link2 */}
                {item.link2 && (
                  <a
                    href={item.link2.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm block"
                  >
                    {item.link2.name}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Wishlist;
