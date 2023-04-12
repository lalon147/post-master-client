"use client"

import { useEffect, useState } from 'react';
import Layout from '../Layout';

const Posts=()=>{
     const [posts,setPosts]=useState([]);
    useEffect(()=>{
           
        fetch("http://localhost:5000/api/v1/posts/all")
        .then((response)=>response.json()).then((data)=>{
            console.log(data);
            setPosts(data)
         });
    },[])

     return (
        <Layout>
                  <div className='grid grid-cols-3 gap-4'>
                  {
                posts.length>0 ? posts.map((post)=>{
                    return <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img width={300} height={200} src={`${post.product_image}`} alt="Shoes" className="rounded-xl h-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{post.product_name}</h2>
                      <p>FROM:{post.pickup_area}</p>
                      <p>TO:{post.destination}</p>
                      <p>SELLER RATING:{post.seller_rating}</p>
                      <p>PRICE_GIVEN:<strong>{post.price_given}$</strong></p>
                      <div className={`avatar ${post.seller_info.verified ? "online" : "offline"} `  }>
                      <div className="w-24 rounded-full">
                       <img src={`${post.seller_info.seller_image}`} />
                       </div>
                       
                     </div>
                      <div className="card-actions">
                        <button className="btn btn-primary">REQUEST FOR DELIVERY</button>
                      </div>
                    </div>
                  </div>
                }) : <h1>NOTHING</h1>
               }
                  </div>
        </Layout>
     )
}

export default Posts