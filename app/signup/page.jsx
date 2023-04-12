"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/Layout";

const page = () => {
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fname = form.fname.value;
    const lname = form.lname.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const nid = form.nid.value;
    const password = form.password.value;
    const role = form.role.value;
    const user = { fname, lname, phone, nid, email, password, role };
    fetch("http://localhost:5000/api/v1/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="py-20">
      <Layout>
        <div>
          <h1 className="text-3xl font-bold mb-4 text-center">Sign Up</h1>
        </div>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left ">
              <Image
                src="/images/signup.avif"
                width={100}
                height={100}
                layout="responsive"
                alt="pic"
              />
            </div>
            <div className="card flex-shrink-0  shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <div className="flex ">
                      <input
                        name="fname"
                        type="text"
                        placeholder="First Name"
                        className="input input-bordered mr-5"
                      />
                      <input
                        name="lname"
                        type="text"
                        placeholder="Last Name"
                        className="input input-bordered"
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Select your position </span>
                    </label>
                    <select
                      name="role"
                      className="select select-accent bg-slate-300 w-full max-w-xs"
                    >
                      <option>Sender</option>
                      <option>Delivery Man</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Nid</span>
                    </label>
                    <input
                      name="nid"
                      type="text"
                      placeholder="Nid"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <input
                      name="phone"
                      type="text"
                      placeholder="Phone Number"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      name="password"
                      type="text"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-success">
                      SignUp
                    </button>
                  </div>
                </form>
                <button className="btn btn-outline btn-success w-full">
                  CONTINUE WITH GOOGLE
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default page;
