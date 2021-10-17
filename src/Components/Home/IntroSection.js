import React from 'react';
import image from '../../Images/top-image.png'

const IntroSection = () => {
    return (
        <div className="container mt-20 md:flex mx-auto gap-96">
            <div className="flex justify-center items-center w-96">
                <img src={image} alt="" />
            </div>
            <div className="w-72">
                <h2 className="font-bold text-2xl mt-12 text-blue-900">Cancer changes your life, often for the better.</h2>
                <p className="mt-8 text-sm text-gray-900 bg-blue-50 p-8">"You learn what's important, you learn to prioritize, and you learn not to waste your time. You tell people you love them."</p>
            </div>
        </div>
    );
};

export default IntroSection;