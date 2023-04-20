"use client";
import { useState } from "react";
import Layout from "../Layout";

const locations = [""];

export default function Calculator() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState(0);
  const [weight, setWeight] = useState(0);
  const [weightRate, setWeightRate] = useState(0);
  const [length, setLength] = useState(0);
  const [cost, setCost] = useState(0);

  const OPEN_CAGE_API_KEY = "2494a94d9ef4485a9771968120f1c018";
  const OPENROUTESERVICE_API_KEY =
    "5b3ce3597851110001cf62488ad5240347504e3fb8f28466303029d9";

  const calculateCost = () => {
    const originUrl = `https://api.opencagedata.com/geocode/v1/json?q=${origin}&key=${OPEN_CAGE_API_KEY}`;
    const destinationUrl = `https://api.opencagedata.com/geocode/v1/json?q=${destination}&key=${OPEN_CAGE_API_KEY}`;

    Promise.all([fetch(originUrl), fetch(destinationUrl)])
      .then(([originResponse, destinationResponse]) =>
        Promise.all([originResponse.json(), destinationResponse.json()])
      )
      .then(([originData, destinationData]) => {
        console.log(originData.results[0]);
        const originCoordinates = `${originData.results[0].geometry.lng},${originData.results[0].geometry.lat}`;
        const destinationCoordinates = `${destinationData.results[0].geometry.lng},${destinationData.results[0].geometry.lat}`;

        const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${OPENROUTESERVICE_API_KEY}&start=${originCoordinates}&end=${destinationCoordinates}`;
        console.log(url);

        fetch(url)
          .then((response) => response.json())
          .then((response) => {
            const distanceInMiles =
              response.features[0].properties.segments[0].distance / 1000; // convert meters to miles
            setDistance(distanceInMiles.toFixed(2));

            
            const costPerMile = 0.5;
            const calculatedCost = distanceInMiles * costPerMile;

            // add weight-based pricing
            const weightOfProdcut = weight; // 0 kg
            const pricePerKg = 25; // 25 taka per kg
            const weightCost = weightOfProdcut * pricePerKg;
            setWeightRate(weightCost);

            // add weight cost to total cost
            const totalCost = calculatedCost + weightCost;

            setCost(totalCost.toFixed(2));
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="py-20">
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
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter Product weight"
                  className="input input-bordered w-full input-md mt-4 dark:text-black"
                />
              </div>
              <div className="w-1/2">
                <h3 className="text-xl font-medium ">Cost of the Product</h3>
                <input
                  type="number"
                  value={weightRate}
                  readOnly
                  onChange={(e) => setWeightRate(e.target.value)}
                  placeholder="Enter Cost of the Product"
                  className="input input-bordered w-full input-md mt-4 dark:text-black"
                />
              </div>
            </div>
            <div className="md:flex gap-10 justify-between ">
              <div className="w-1/2">
                <h3 className="text-xl font-medium">Pickup Area</h3>
                <input
                  type="text"
                  placeholder="Enter origin address"
                  onChange={(e) => setOrigin(e.target.value)}
                  className="input input-bordered w-full input-md mt-4 dark:text-black"
                />
              </div>
              <div className="w-1/2">
                <h3 className="text-xl font-medium">Delivery Area</h3>
                <input
                  type="text"
                  placeholder="Enter destination address"
                  onChange={(e) => setDestination(e.target.value)}
                  className="input input-bordered w-full input-md mt-4 dark:text-black"
                />
              </div>
            </div>
            <div className="mt-10 flex justify-around">
              <div className="text-xl font-bold">Total Cost: {cost} BDT</div>
              <div className="text-xl font-bold">Total Distance: {distance} K.M</div>
            </div>
            <div className="flex flex-col items-center justify-center my-4">
              <button
                onClick={calculateCost}
                type="submit"
                className="btn btn-primary rounded-2xl"
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
