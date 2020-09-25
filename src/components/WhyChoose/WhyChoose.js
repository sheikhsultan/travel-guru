import React from 'react';
import './WhyChoose.css';

const WhyChoose = () => {
    return (
        <section className="mt-5">
           <div className="row text-center bg-color">
               <div className="col-md-3 mt-4 mb-4">
                    <img src="https://i.ibb.co/Qv3Bgsr/price.png" alt="PRICE"/>
                    <h3>PRICE</h3>
                    <p>Check low rates of various</p>
                    <p>holiday packages</p>
               </div>
                <div className="col-md-3 mt-4 mb-4">
                    <img src="https://i.ibb.co/3cVRszX/fast1.png" alt="FAST" />
                    <h3>FAST</h3>
                    <p>Fast customer support and</p>
                    <p>quote offers</p>
               </div>
                <div className="col-md-3 mt-4 mb-4">
                    <img src="https://i.ibb.co/tCprV9t/safe1.png" alt="SAFE" />
                    <h3>SAFE</h3>
                    <p>Communication and safe</p>
                    <p>transactions</p>
               </div>
                <div className="col-md-3 mt-4 mb-4">
                    <img src="https://i.ibb.co/vmzNf6V/satisfaction.png" alt="PRICE" />
                    <h3>SATISFACTION</h3>
                    <p>Customer satisfaction for</p>
                    <p>business success</p>
               </div>
           </div>
        </section>
    );
};

export default WhyChoose;