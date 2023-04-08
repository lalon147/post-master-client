import Layout from "../Layout";

export default function Calculator() {
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
                type="text"
                placeholder="Enter Product weight"
                className="input input-bordered input-error w-full input-md mt-4 "
              />
            </div>
            <div className="w-1/2">
              <h3 className="text-xl font-medium ">Cost of the Product</h3>
              <input
                type="text"
                placeholder="Enter Cost of the Product"
                className="input input-bordered input-error w-full input-md mt-4"
              />
            </div>
          </div>
          <div className="md:flex gap-10 justify-between ">
            <div className="w-1/2">
              <h3 className="text-xl font-medium">Pickup Area</h3>
              <input
                type="text"
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
            <button type="submit" className="btn btn-primary rounded-2xl">
              Calculate
            </button>
          </div>
        </div>
      </div>
    </Layout>
    </div>
  );
}
