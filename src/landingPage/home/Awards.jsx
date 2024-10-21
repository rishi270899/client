import React from "react";

function Awards() {
  return (
    <>
      <div className="justify-center ">
        <div className="grid gap-8 m-4 sm:grid-cols-2 px-16 mt-6">
          <div className="">
            <img src="largestBroker.svg" alt="" />
          </div>
          <div className="">
            <h1 className="text-3xl font-bold mb-4">
              Largest stock broker in India
            </h1>
            <p className="mb-2">
              2+ million Zerodha client contribute to over 15% of all volumes in
              India daily by trading and investing in:
            </p>
            <div className="grid grid-cols-2 mt-3 mb-2">
              <div>
                <ul className=" list-disc pl-4">
                  <li>Future and Options</li>
                  <li>
                    <p>Commodity derivatives</p>
                  </li>
                  <li>
                    <p>Currency derivatives</p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className=" list-disc pl-4">
                  <li>
                    <p>Stocks & IPOs</p>
                  </li>
                  <li>
                    <p>Bonds And Govt. Securities</p>
                  </li>
                  <li>
                    <p>Direct mutual funds </p>
                  </li>
                </ul>
              </div>
            </div>
            <img src="pressLogos.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Awards;
