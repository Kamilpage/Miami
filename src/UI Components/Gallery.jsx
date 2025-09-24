import React from 'react';
import '../style/main.css'
import gallery1 from '../assets/gallery1.png'
import gallery2 from '../assets/gallery2.png'
import gallery3 from '../assets/gallery3.png'
import gallery4 from '../assets/gallery4.png'
import gallery5 from '../assets/gallery5.png'
import gallery6 from '../assets/gallery6.png'

const Gallery = () => {
    return (
        <section>
            <div className="container">
                <h1>Gallery</h1>
                <div className="row">
                    <div className="col-8"><img src={gallery1} alt=""/></div>
                    <div className="col-4"><img src={gallery2} alt=""/></div>
                    <p><span>Marina Palms </span>/ North Miami Beach, FL 33162</p>
                </div>
                <div className="row">
                    <div className="col-6"><img src={gallery3} alt=""/></div>
                    <div className="col-6"><img src={gallery4} alt=""/></div>
                    <p><span>Edition Residens </span> / Miami Beach, FL 33139</p>
                </div>
                <div className="row">
                    <div className="col-4"><img src={gallery5} alt=""/></div>
                    <div className="col-8"><img src={gallery6} alt=""/></div>
                    <p><span>Faena House </span>/ Miami Beach, FL 33140</p>
                </div>
                <button>View all</button>
            </div>
        </section>
    );
};

export default Gallery;