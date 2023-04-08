import Layout from "../Layout";

export default function Services({ services }) {
  return (
    <div className="">
      <Layout>
        <div className="container mx-auto py-20">
          <h1 className="text-3xl font-bold mb-4 text-center">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
            {/* Card  Start*/}
            <div className="shadow-lg rounded-md dark:bg-yellow-400 dark:text-black">
              <figure>
                <img src="/images/image%207.png" alt="" className="mb-4" />
              </figure>
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold mb-2">Parcel Delivery</h2>
                <p>
                  First-mile pickup and last-mile delivery services for
                  individuals, small businesses and corporates.
                </p>
              </div>
            </div>
            {/* Card End */}
            {/* Card  Start*/}
            <div className="shadow-lg rounded-md dark:bg-yellow-400 dark:text-black">
              <figure>
                <img src="/images/image%208.png" alt="" className="mb-4" />
              </figure>
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold mb-2">Large Shipping</h2>
                <p>
                  Special solution for large items and large number of
                  deliveries
                </p>
              </div>
            </div>
            {/* Card End */}
            {/* Card  Start*/}
            <div className="shadow-lg rounded-md dark:bg-yellow-400 dark:text-black">
              <figure>
                <img src="/images/image%209.png" alt="" className="mb-4" />
              </figure>
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold mb-2">Customer Service</h2>
                <p>Customized solutions according to your business needs</p>
              </div>
            </div>
            {/* Card End */}
            {/* Card  Start*/}
            <div className="shadow-lg rounded-md dark:bg-yellow-400 dark:text-black">
              <figure>
                <img src="/images/image%2010.png" alt="" className="mb-4" />
              </figure>
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold mb-2">Logistics Support</h2>
                <p>
                  {" "}
                  Experienced team support to resolve any logistics related
                  issues
                </p>
              </div>
            </div>
            {/* Card End */}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/services");
  const services = await res.json();
  return {
    props: {
      services,
    },
  };
}
