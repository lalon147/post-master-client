'use client'
import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout';
import {signIn} from "next-auth/react"


const Page = () => {
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        
        try {
            const data = await signIn("credentials", {
              redirect: false,
              email,
              password,
            });
      
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        
    }
  
    return (
        <div className='py-20'>
            <Layout>
                <div>
                    <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
                </div>

                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                            <Image
                                src='/images/login.avif'
                                width={200}
                                height={200}
                                layout='responsive'
                                alt='pic'
                            />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit} className="card-body">
                                <div  className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name="password" type="text" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-success">Login</button>
                                </div>
                                <button className='btn btn-outline btn-success w-full'>CONTINUE WITH GOOGLE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default Page;
