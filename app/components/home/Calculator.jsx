
'use client';
import { useState } from "react";
import Layout from "../Layout";

export default function Calculator() {
  const [weight, setWeight] = useState('');
  const [weightRate, setWeightRate] = useState('');
  const [distance, setDistance] = useState('');
  const [totalCost, setTotalCost] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const distanceRate = 5; // Assume distance rate is 5
    const calculatedCost = (weight * weightRate) + (distance * distanceRate);
    setTotalCost(calculatedCost);
  };
  return (
    <div className="dark:bg-purple-500 py-20">
      <Layout>
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Cost Calculator
          </h1>
          <div className="p-12 w-3/5 mx-auto  flex flex-col gap-4">
            <div className="md:flex gap-10 justify-between">
              <div className="w-1/2">
                <h3 className="text-xl font-medium ">
                  Product weight(Max:40 kg)
                </h3>
                <input
                  type="number" value={weight} onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter Product weight"
                  className="input input-bordered input-error w-full input-md mt-4 "
                />
              </div>
              <div className="w-1/2">
                <h3 className="text-xl font-medium ">Cost of the Product</h3>
                <input
                  type="number" value={weightRate} onChange={(e) => setWeightRate(e.target.value)}
                  placeholder="Enter Cost of the Product"
                  className="input input-bordered input-error w-full input-md mt-4"
                />
              </div>
            </div>
            <div className="md:flex gap-10 justify-between ">
              <div className="w-1/2">
                <h3 className="text-xl font-medium">Pickup Area</h3>
                <input
                  type="number" value={distance} onChange={(e) => setDistance(e.target.value)}
                  placeholder="Enter Pickup Area"
                  className="input input-bordered input-error w-full input-md mt-4"
                />
              </div>
              <div className="w-1/2">
                <h3 className="text-xl font-medium">Delivery Area</h3>
                <input
                  type="text"
                  placeholder="Enter the Delivery Area"
                  className="input input-bordered input-error w-full input-md mt-4"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center my-4">
              <button onClick={handleSubmit} type="submit" className="btn btn-primary rounded-2xl">
                Calculate
              </button>
              <div>Total Cost: {totalCost}</div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
