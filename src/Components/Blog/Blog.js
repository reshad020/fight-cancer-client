import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mt-8 text-center">Blog </h1>
             <div className = "grid my-12  grid-cols-1">
                <div className="w-80 mx-auto mb-8">
                    <img src="https://edge-cdn.pratidintime.com/2020/11/Cancer.jpg" alt="" class="w-80 h-52" />  
                    <p className="mt-4 text-gray-400 text-sm font-semibold">We provide the best doctors in the town.Everyone is specialist in their own sectors like: Breast Cancer,Lungs Cancer,Ovary Cancer etc.And our doctors are always ready to serve their best to the patients </p>
                </div>
                <div className="w-80 mx-auto mb-8">
                    <img src="https://www.uicc.org/sites/main/files/styles/uicc_news_main_image/public/thumbnails/image/COVID-19%20web%20banner.jpg?itok=prhIwn_P" alt="" class="w-80 h-52" />  
                    <p className="mt-4 text-gray-400 text-sm font-semibold">We believe during Cancer treatment mental support can play a vital role.If the patient is mentally strong he or she can fight with any disease. </p>
                </div>
                <div className="w-80 mx-auto">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfQBAi5ij3Cuu14vMPc8gxMVIu_pIDloyHQ&usqp=CAU" alt="" class="w-80 h-52" />  
                    <p className="mt-4 text-gray-400 text-sm font-semibold">From our 5 years of experience we experienced the family of a cancer patient becomes economically unstable for the treatment.So,we provide financial help for our patients. </p>
                </div>
            </div>    
        
        </div>
    );
};

export default Blog;