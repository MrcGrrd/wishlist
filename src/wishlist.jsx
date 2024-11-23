import React from "react";

const Wishlist = () => {
  // Predefined wishlist items
  const wishlist = [
    {
      name: "Gaabor Air Fryer & Luggage Travel Bag",
      image1: "https://down-ph.img.susercontent.com/file/ph-11134207-7r98v-lzt3ekbk2anuf7.webp", // Replace with your image URL
      image2: "https://down-ph.img.susercontent.com/file/ph-11134207-7rasg-m2j3ujt1za82e5@resize_w450_nl.webp", // Replace with your image URL
      Price: "Air Fryer: ₱1,899",
      link1: { name: "Gaabor Air Fryer", url: "https://shopee.ph/Gaabor-Air-Fryer-Dual-Rotary-Knob-Transparent-Window-9-Menus-Reheat-Defrost-5L-Capacity-i.485132629.28560323292" }, // Replace with your link
      link2: { name: "Luggage Bag", url: "https://shopee.ph/ISLAND-ELEPHANT-Free-14inch-Luggage-Travel-Bag-i.734478333.19407841433?sp_atk=f88c04ad-cb50-4cdd-b7c0-8b9d0b6078bb" },     // Replace with your link
      description: "Sample lang po yung luggage bag, if may marerecommend po kayo na mas matibay and mas maganda pwede po. Thank you.",
    },
    {
      name: "Redchef Nonstick Ceramic Rock 7 Pcs Cookware Set",
      image1: "https://down-ph.img.susercontent.com/file/cn-11134207-7ras8-m2qc7p0jca1z91@resize_w450_nl.webp", // Replace with your image URL
      image2: "", // Replace with your image URL
      Price: "₱3,059",
      link1: { name: "Nonstick Cookware Set", url: "https://shopee.ph/Redchef-Nonstick-Ceramic-Rock-7-Pcs-Cookware-Set-Non-PFAS-PTFE-PFOA-Suitable-for-All-Stoves-Wok-Frying-Pan-i.1016232059.25858917665?sp_atk=33d59d18-47b2-4546-a0ed-2e827fba29ed&xptdk=33d59d18-47b2-4546-a0ed-2e827fba29ed" }, // Replace with your link
      link2: { name: "", url: "" }, // Replace with your link
      description: "Bayaran ko nalang din po yung butal.",
    },
    {
      name: "Adidas Handball Spezial",
      image1: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fb18cfdee5484bafb694a97601138947_9366/Handball_Spezial_Shoes_Blue_BD7632_01_00_standard.jpg", // Replace with your image URL
      image2: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1fa18f47b66e4f4980ba74d48de04ecc_9366/Handball_Spezial_Shoes_Blue_IF7087_01_standard.jpg", // Replace with your image URL
      Price: "₱5,300 - ₱5,800",
      link1: { name: "Light Blue", url: "https://www.adidas.com.ph/handball-spezial-shoes/BD7632.html?pr=recently_viewed&slot=7&rec=mt" }, // Replace with your link
      link2: { name: "Night Indigo", url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1fa18f47b66e4f4980ba74d48de04ecc_9366/Handball_Spezial_Shoes_Blue_IF7087_01_standard.jpg" }, // Replace with your link
      description: "Naglagay po ako ng dalawang options ng colorway if ever na wala yung isa, pero mas preferred po yung light blue.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Gerard's Wishlist</h1>

      <div className="mt-6 w-full max-w-5xl">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlist.map((item, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-lg shadow-md relative"
            >
              <div className="mb-3 space-y-3">
                <div className="flex space-x-3">
                  {/* Display image1 */}
                  {item.image1 && (
                    <div className="overflow-hidden rounded-lg w-1/2 group">
                      <img
                        src={item.image1}
                        alt={`${item.name} Image 1`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                      />
                    </div>
                  )}
                  {/* Display image2 */}
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
              </div>
              <h3 className="text-lg font-semibold text-gray-700">
                {item.name}
              </h3>
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
