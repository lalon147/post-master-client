import React from 'react';

const Modal = () => {
    return (
        <div>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <form className='grid grid-cols-1 lg:grid-cols-2  gap-3 mt-10'>

                        <input name="product-name" type="text" placeholder="product Name" className="input w-full input-bordered" />

                        <input name="email" type="email" placeholder="Email Address" className="input w-full input-bordered" />


                        <input type="text" name='pic' placeholder="Picture of product" className="input input-bordered" />
                        <input name="location" type="text" placeholder="Location" className="input w-full input-bordered" />

                        <input name="product -seller" type="text" placeholder="product seller" className="input w-full input-bordered" />

                        <input name="seller_information" type="text" placeholder="seller information" className="input w-full input-bordered" />

                        <input name="phone- number" type="text" placeholder="phone- number" className="input w-full input-bordered" />
                        <input name="seller-image" type="text" placeholder="seller image" className="input w-full input-bordered" />
                        <input name="pickup_area" type="text" placeholder="pickup area" className="input w-full input-bordered" />
                        <input name="destination" type="text" placeholder="Destination" className="input w-full input-bordered" />
                        <input name="date" type="date" placeholder="Delivery Date" className="input w-full input-bordered" />
                        <input name="rating" type="text" placeholder="Rating" className="input w-full input-bordered" />
                        <input name="price" type="text" placeholder="Price " className="input w-full input-bordered" />
                        <input name="product" type="text" placeholder="Item Name" className="input w-full input-bordered" />


                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">close</label>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Modal;