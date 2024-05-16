import React from 'react'
import Why from './Why';
import Service from './Service';
import Howitwork from './Howitwork';

const Home = () => {

    return (
        <>
            <div className='background-image' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className='container'>
                    <h1>AutomateX by Nikhil</h1>
                    <div className='row' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <p>Welcome to AutomateX, where paperwork becomes a breeze. Say goodbye to the tedious task of manual document creation.<br /> With our intuitive platform, effortlessly generate certificates and invoices tailored to your needs.<br /> Whether you're organizing events, managing finances, or running a business, AutomateX empowers you to save time, reduce errors, and focus on what truly matters.<br /> Revolutionize your workflow today with AutomateX and experience the joy of seamless automation.</p>
                    </div>
                    <button type='button' className='btn btn-primary'>
                        Explore Now!
                    </button>
                </div>
            </div>
            <Service/>
            <Why/>
            <Howitwork/>
        </>
    )
}

export default Home
