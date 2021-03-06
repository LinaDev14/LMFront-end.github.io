import React from 'react';
import {Footer} from '../components/Footer/Footer';
import { HomeServices } from '../components/HomeServices/HomeServices';


const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white image_home">
                <img className="welcome"/>
            <div className="card-img-overlay d-flex flex-column justify-content-center">

                <div className="container">

                    <h5 className="card-title display-3 fw-bolder mb-0">WEDDINGS ARE BASICALLY FUNERALS WITH CAKE</h5>

                    <p className="card-text lead fs-2">
                        I'M TRYING TO HAVE A CONVERSATION!
                    </p>
                </div>
            </div>
        </div>
        <HomeServices />
        <Footer />
        </div>
        );
};

export {Home};
