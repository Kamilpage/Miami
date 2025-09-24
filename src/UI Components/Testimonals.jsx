import React from 'react';
import '../style/main.css'
import {useState} from "react";
import testim1 from '../assets/testim1.png'
import testim2 from '../assets/testim2.png'
import testim3 from '../assets/testim3.png'




const Testimonals = () => {
    const [testimonials, setTestimonals] = useState([{id:1, image:testim1, name:'Leslie Mckinney', position:'CEO', quote:'Nice work, Certificates National Association of Realtors (USA)' },
        {id:2, image:testim2, name:'Scarlett Hawkins', position:'Senior Vice President', quote:'My soul is illuminated by an unearthly joy, as these beautiful spring morning, which I enjoy with all my heart' },
        {id:3, image:testim3, name:'Max Henry', position:'Chief Design Officer', quote:'When my lovely valley of steam rises and half-day sun is above an impermeable' },])
    return (
        <section className='testimonials'>
            <div className="container">
                <h1 className='text-center'>Testimonials</h1>
                <div className="row">
                    <img src="" alt=""/>
                    <div className='testim-info'>
                    <h2>{}</h2>

                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Testimonals;