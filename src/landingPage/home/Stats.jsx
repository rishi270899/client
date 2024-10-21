import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Stats() {
  return (
    <>
      <div className="flex justify-center gap-4 p-5">
        <div>
          <h1 className="text-4xl font-bold">Trust with confidence</h1>
          <h2 className="text-2xl font-bold">Customer-first always</h2>
          <p>
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h2 className="text-2xl font-bold">No spam or gimmicks</h2>
          <p>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="text-2xl font-bold">The Zerodha universe</h2>
          <p>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="text-2xl font-bold">Do better with money</h2>
          <p>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div>
          <img className="w-[75%]" src="ecosystem.png" alt="" />
          <div className="flex gap-4 text-blue-500">
            <a
              className="flex justify-center gap-2 hover:text-blue-600"
              href=""
            >
              Explore our products
              <FaArrowRightLong className="mt-[6px]" />{" "}
            </a>
            <a
              className="flex justify-center gap-2 hover:text-blue-600"
              href=""
            >
              Try Kite demo
              <FaArrowRightLong className="mt-[6px]" />{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
