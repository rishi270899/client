import React from "react";

function Hero() {
  return (
    <>
      <div className="p-5 ">
        <div className="px-14">
          <img src="homeHero.png" alt="Hero Image" className="mb-8" />
          <h1 className="mt-5  text-4xl text-center font-semibold">
            Invest in everything
          </h1>
          <p className="text-center mt-1 text-md">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
          <div className="flex justify-center mt-2">
            <button className="bg-blue-500 text-white py-2 px-12 rounded text-[1.2em] mb-5 shadow-xl hover:bg-black">
              Signup Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
