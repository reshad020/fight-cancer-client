import React, { useEffect, useState } from 'react';
import Cart from './Cart';

const Service = () => {
    
    const [doctors,setDoctors] = useState([]);
    useEffect(() => {
        
        fetch("service.json")
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <section>
            <h1 className="text-2xl text-center my-4 font-bold text-green-700">Our Services</h1>
            <div className="grid md:grid-cols-3 grid-cols-1">
            
            {
                doctors.map(doctor => <Cart detail={doctor}></Cart>)
            }
        </div>
        </section>
    );
};

export default Service;