import React from "react";
import {CheckCircleIcon} from '@heroicons/react/24/solid'
const Fature = ({fet}) => {
  return (
    <div>
      {" "}
      <div className="flex items-center">
        <CheckCircleIcon className="h-4 w-4 text-[#ff9800]" />
        <p className="ml-2">{fet}</p>
      </div>
    </div>
  );
};

export default Fature;
