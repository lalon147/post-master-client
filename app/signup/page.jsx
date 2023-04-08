
import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout';

const page = () => {
    return (
        <div className='py-20'>
            <Layout>
                <div>
                    <h1 className="text-3xl font-bold mb-4 text-center">Sign Up</h1>
                </div>
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left ">
                            <Image
                                src='/images/signup.avif'
                                width={100}
                                height={100}
                                layout='responsive'
                                alt='pic'
                            />
                        </div>
                        <div className="card flex-shrink-0  shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <div className='flex '>
                                        <input type="text" placeholder="First Name" className="input input-bordered mr-5" />
                                        <input type="text" placeholder="Last Name" className="input input-bordered" />
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Select your position </span>
                                    </label>
                                    <select className="select select-accent w-full max-w-xs">
                                        <option disabled selected>Sender</option>
                                        <option>Receiver</option>
                                        <option>Delivery Man</option>
                                    </select>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Nid</span>
                                    </label>
                                    <input type="text" placeholder="Nid" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="text" placeholder="Phone Number" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-success">SignUp</button>
                                </div>
                                <button className='btn btn-outline btn-success w-full'>CONTINUE WITH GOOGLE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default page;