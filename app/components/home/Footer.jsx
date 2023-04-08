import Image from "next/image";
import Layout from "../Layout";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <Layout>
        <footer
          className="p-10 py-20 text-base-content rounded"
          style={{ backgroundImage: `url('/public/images/bg-footer.png')` }}
        >
          <div className="flex justify-between ">
            <div>
              <h1 className="text-gray-400 text-lg font-bold">SERVICES</h1>
              <p className="text-gray-600 text-sm font-normal">lorem ipsum</p>
            </div>
            <div>
              <h1 className="text-gray-400 text-lg font-bold">OUR ADDRESS</h1>
              <p className="text-gray-600 text-sm font-normal">
                New York - 101010 Hudson
              </p>
            </div>
          </div>
          <p className="text-sm text-center mt-20">
            Copyright 2022 All Rights Reserved
          </p>
        </footer>
      </Layout>
    </div>
  );
};

export default Footer;
