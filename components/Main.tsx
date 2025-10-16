import React from "react";
import Link from "next/link";
import AdCards from "./AdCards";

const affiShipCards = [
  {
    title: "AffiShip – Promote & Earn",
    description:
      "Fast ,reliable, modern, seamless platform connecting creators with affiliates to maximize reach and revenue.",
  },
  {
    title: "Your Campaign, Your Way",
    description:
      "AffiShip makes it easy for creators to share products and affiliates to earn — all on one  modern, fast, simple platform.",
  },
  {
    title: "Boost Sales, Instantly With us",
    description:
      "Join AffiShip, the speedy platform where creators post and affiliates promote — get results without the hassle.",
  },
];
const Main = () => {
  return (
    <div>
      <div className="md:grid bg-yellow-400 text-gray-800 hidden grid-cols-2 m-16 rounded-md hover:bg-gradient-to-r from-yellow-300 to-orange-300 transition-colors duration-75 mx-32">
        <div className="flex justify-center flex-col items-start mx-24 my-12 gap-16">
          <h1 className="text-4xl font-semibold flex flex-col gap-2">
            Find Afilliates <span>For Your Brand.</span>
          </h1>
          <p className="opacity-90 flex flex-col">
            Fast, Reliable and Best Platform To Find{" "}
            <span>Trusted Affiliates For Your Business</span>
          </p>
          <Link href={"/register"}>
            <button className="bg-white p-2 font-medium rounded-md hover:bg-gray-600 hover:text-white">
              Start Now
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center">
            <div className="flex justify-center items-start py-4 px-12 gap-4 mx-12">
          {affiShipCards.map((card, indx) => {
            return (<AdCards
              title={card.title}
              description={card.description}
              key={indx}
            />)
          })}
        </div>
        </div>
      </div>
      <div className=" md:hidden flex flex-col justify-center items-center bg-yellow-400 text-gray-800 m-16 rounded-md hover:bg-gradient-to-r from-yellow-300 to-orange-300 transition-colors duration-75">
        <div className="flex justify-center flex-col items-start gap-16 m-8">
          <h1 className="text-4xl font-semibold flex flex-col gap-2">
            Find Afilliates <span>For Your Brand.</span>
          </h1>
          <p className="opacity-90 flex flex-col">
            Fast, Reliable and Best Platform To Find{" "}
            <span>Trusted Affiliates For Your Business</span>
          </p>
          <Link href={"/register"}>
            <button className="bg-white p-2 font-medium rounded-md hover:bg-gray-600 hover:text-white">
              Start Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
