import React from 'react';
import { Link } from 'react-router-dom';

const Details = () => {
    
    return (
        <div className="flex flex-col justify-center items-center">
            <img src="https://image.shutterstock.com/image-vector/check-mark-icon-tick-symbol-260nw-1938875785.jpg" alt="" className ="mt-12 "/>
            <button className="bg-green-700 text-gray-100 px-2 py-1 mt-8 mb-12"><Link to="/home">Confirm Appointment</Link></button>
        </div>
    );
};

export default Details;