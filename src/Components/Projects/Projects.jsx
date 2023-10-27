import React from 'react';
import Iframe from 'react-iframe';
import electromart from '../../Images/Electromart.png'

const Projects = () => {
    return (
        <div>
            <h1 className='text-orange-500 text-center text-3xl'>Projects</h1>
            <div className='projects'>
            {/* <Iframe url="https://electromart-ccd61.web.app/"
                width="480px"
                height="240px"
                id=""
                className=""
                display="block"
                position="relative"
            />
             <Iframe url="https://www.youtube.com/watch?v=iwAkJpmQndA&t=28s"
                width="480px"
                height="240px"
                id=""
                className="mt-8"
                display="block"
                position="relative"
            /> */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg border-4 border-sky-500">
                <img className="w-full" src={electromart} alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <div className="font-bold text-green-100 text-xl mb-2">The Coldest Sunset</div>
                <p className="text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ReactJs</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">NodeJs</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MongoDB</span>
            </div>
    </div>
           
 </div>
        
</div>
    );
};

export default Projects;