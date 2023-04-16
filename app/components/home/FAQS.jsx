import Layout from "../Layout";

const FAQS = () => {
  return (
    <Layout>
      <div className="py-10">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Frequently Asked Questions
        </h1>
        <div className="lg:mt-20 gap-5">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-5 dark:text-black">
            <div
              tabIndex={1}
              className="collapse collapse-arrow border shadow-xl border-base-300 bg-base-100 rounded-box mb-5"
            >
              <div className="collapse-title text-xl font-medium ">
                What Is Post-Master
              </div>
              <div className="collapse-content">
                <p>
                  {" "}
                  Post-Master is a technology-driven logistics company providing
                  services ranging from SME product delivery services across the
                  country to personal document, parcel delivery, and industrial
                  logistics services to large corporate companies
                </p>
              </div>
            </div>
            <div
              tabIndex={2}
              className="collapse collapse-arrow border shadow-xl border-base-300 bg-base-100 rounded-box mb-5"
            >
              <div className="collapse-title text-xl font-medium">
                Can I change my plan later?
              </div>
              <div className="collapse-content">
                <p>
                  tabIndex={0} attribute is necessary to make the div focusable
                </p>
              </div>
            </div>
            <div
              tabIndex={3}
              className="collapse collapse-arrow border shadow-xl border-base-300 bg-base-100 rounded-box mb-5"
            >
              <div className="collapse-title text-xl font-medium">
                Can other info be added to an invoice?
              </div>
              <div className="collapse-content">
                <p>
                  tabIndex={0} attribute is necessary to make the div focusable
                </p>
              </div>
            </div>
            <div
              tabIndex={4}
              className="collapse collapse-arrow border shadow-xl border-base-300 bg-base-100 rounded-box mb-5"
            >
              <div className="collapse-title text-xl font-medium">
                How does billing work?
              </div>
              <div className="collapse-content">
                <p>
                  tabIndex={0} attribute is necessary to make the div focusable
                </p>
              </div>
            </div>
            <div
              tabIndex={5}
              className="collapse collapse-arrow border shadow-xl border-base-300 bg-base-100 rounded-box mb-5"
            >
              <div className="collapse-title text-xl font-medium">
                How does billing work?
              </div>
              <div className="collapse-content">
                <p>
                  tabIndex={0} attribute is necessary to make the div focusable
                </p>
              </div>
            </div>
            <div
              tabIndex={6}
              className="collapse collapse-arrow border shadow-xl border-base-300 bg-base-100 rounded-box mb-5"
            >
              <div className="collapse-title text-xl font-medium">
                How does billing work?
              </div>
              <div className="collapse-content">
                <p>
                  tabIndex={0} attribute is necessary to make the div focusable
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQS;
