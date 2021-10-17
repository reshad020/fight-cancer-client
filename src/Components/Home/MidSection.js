import React from 'react';
import image from '../../Images/doctors.jpg'
import image2 from '../../Images/mental-support.jpg'
import image3 from '../../Images/help.jpg'
const MidSection = () => {
    return (
        <section className="bg-gray-900 mt-20  p-8">
            <h1 className="font-bold  text-center text-2xl text-gray-200">What we provide?
            </h1>
            <div className="flex justify-center mt-2 mb-8"><hr className=" w-52 ring "  /></div>
            
            <div className = "grid md:grid-cols-3  grid-cols-1">
                <div className="w-80 mx-auto">
                    <img src={image} alt="" class="w-80 h-52" />  
                    <p className="mt-4 text-gray-400 text-sm font-semibold">We provide the best doctors in the town.Everyone is specialist in their own sectors like: Breast Cancer,Lungs Cancer,Ovary Cancer etc.And our doctors are always ready to serve their best to the patients </p>
                </div>
                <div className="w-80 mx-auto">
                    <img src={image2} alt="" class="w-80 h-52" />  
                    <p className="mt-4 text-gray-400 text-sm font-semibold">We believe during Cancer treatment mental support can play a vital role.If the patient is mentally strong he or she can fight with any disease. </p>
                </div>
                <div className="w-80 mx-auto">
                    <img src={image3} alt="" class="w-80 h-52" />  
                    <p className="mt-4 text-gray-400 text-sm font-semibold">From our 5 years of experience we experienced the family of a cancer patient becomes economically unstable for the treatment.So,we provide financial help for our patients. </p>
                </div>
            </div>    
        
        </section>
    );
};

export default MidSection;