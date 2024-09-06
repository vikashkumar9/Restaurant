"use client"
 function MealCard({ image, category, name, price }) {
    return (
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative">
          <img src={image} alt={name} className="w-full h-64 object-cover" />
          <div className="absolute top-4 left-4 bg-black bg-opacity-75 text-white text-sm py-1 px-2 rounded">
            {category}
          </div>
        </div>
        <div className="p-4 text-center flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-blue-600 text-xl font-bold">${price}</p>
      </div>
      </div>
    );
  }
  
  export default MealCard