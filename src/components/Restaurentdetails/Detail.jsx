import React from "react";

const Detail = ({ text, information }) => {
  return (
    <div className="flex-1 py-2 align-content-center border-r border-solid border-black h-[80px] md:h-[100px]  px-2 md:px-4">
      <div className="text-gray-107">{text}</div>
      <div className="flex justify-between">
        <div className=" text-white text-[24px] leading-[29.05px]">
          {information}
        </div>
      </div>
    </div>
  );
};

export default Detail;
