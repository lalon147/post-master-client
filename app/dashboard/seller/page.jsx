import Layout from "@/app/components/Layout";
import Modal from "../Modal";



const page = () => {
    return (
        <div>
            <Layout>
                <label htmlFor="my-modal" className="btn btn-success">Add Products</label>
                <Modal></Modal>

            </Layout>
        </div>
    );
};

export default page;