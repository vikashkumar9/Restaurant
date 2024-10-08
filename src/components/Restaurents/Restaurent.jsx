import React from "react";
import { useRouter } from "next/navigation";
const Restaurent = ({ restaurent }) => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {restaurent &&
        restaurent.map((item, index) => (
          <div
            key={index}
            onClick={() => router.push("/explore/" + item._id)}
            className="bg-orange-500 border p-4 rounded shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex justify-between">
              <h2 className="text-black font-bold">{item.name}</h2>
              <p className="text-gray-600">{item.contact}</p>
            </div>
            <div className=" justify-between mt-2">
              <p className="text-gray-600">
                <strong>Location:</strong> {item.location}
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> {item.email}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Restaurent;
