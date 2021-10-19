import React from 'react';
import { Link } from 'react-router-dom';
import Details from '../Details/Details';

const Cart = (props) => {
    const {name,detail,urlImage,contact,time} = props.detail
    return (
        <div>
             <div className="flex flex-col bg-gray-100 justify-center items-center w-72 p-4 mx-auto shadow-2xl">
                    <img src={urlImage} alt="" className="w-64 h-52 rounded" />
                    <h3 className="text-gray-800 text-xl text-center mb-2 font-bold">{name}</h3>
                    <p className="text-center text-sm text-gray-600">d{detail}</p>
                    <div className="flex ">
                        <p>contact : {contact}</p>
                        <p>Time: {time}</p>
                    </div>
                    <button className="bg-green-700 py-1 px-6 text-gray-100 mt-2 rounded"><Link to="/details">Details</Link></button>
                </div>
                {
                    <Details ></Details>
                }
        </div>
    );
};

export default Cart;