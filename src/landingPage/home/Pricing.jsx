import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Pricing() {
  return (
    <div className="">
      <div>
        <h1 className="text-4xl font-semibold ">Unbeatable Pricing</h1>
        <p>
          We pioneered the concept of discount broking and price transparency in
          India. Flat fees and no hidden charges.
        </p>
        <button className="flex">
          See pricing <FaArrowRightLong className="mt-[6px] ml-1" />{" "}
        </button>
      </div>

      <div></div>
    </div>
  );
}

export default Pricing;
