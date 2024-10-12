import React from "react";
import Detail from "./Detail";

const Restaurentdetails = ({ resto }) => {
  return (
    <div>
      <div class="m-2 border-1 border-orange-500  w-[25%]"></div>

      <div className=" md:h-[100px] bg-slate-700">
        <div className="md:flex ">
          <Detail text="Name" information={resto?.name} />
          <Detail text="Phone no" information={resto?.contact} />
          <Detail text="Email" information={resto?.email} />
          <Detail text="Address" information={resto?.location} />
        </div>
      </div>
    </div>
  );
};

export default Restaurentdetails;
