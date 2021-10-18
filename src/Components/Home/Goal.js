import React from 'react';

const Goal = () => {
    return (
        <div className="mt-4 mb-8 bg-gray-100 shadow-xl p-4 mx-8">
            <h2 className="text-center text-2xl font-bold text-gray-900 mb-4">What's Our ultimate Goal?</h2>
            <h4 className="text-center mb-4 text-xl font-semibold text-gray-700">Our ultimate goal is to serve free treatments to the poor who cannot afford the treatment cost of cancer.We want to decrease the death rate due to cancer.In order to make this dream come true, we need your help. Your small donation can save a life.</h4>
            <div className="text-center">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                 Donate
            </button>
            </div>
        </div>
    );
};

export default Goal;