import React from 'react';
import './Project.css'
import electromart from '../../Images/Electromart.png';
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import { IoServer } from "react-icons/io5";


const Projects = () => {
    return (
        <div className='mx-32'>
            <h1 className='text-orange-500 text-center text-3xl'>Projects</h1>
            <div className='projects'>
            <div className="max-w-sm  overflow-hidden p-4 shadow-2xl hover:-translate-y-2 duration-300">
                <img className="w-full rounded-xl" src={electromart} alt="Sunset in the mountains"/>
                <div class="px-6 pt-2 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ReactJs</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Firebase</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ExpressJs</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MongoDB</span>
                </div>

                <div className="px-6 py-0">
                    <div className="font-bold text-orange-500 text-xl mb-2">Electro Mart</div>
                    <p className="text-white text-base">
                    An E-commerce website to sell and buy products.
                    Buyer can browse products at once or categorically.
                    Search filter, pagination applied.
                    Add products to the cart and remove from the cart, login required to place order.
                    Seller can list their products by logging in to a protected route.
                    Update, delete product from seller dashboard.
                    </p>
                    <div className='mt-2 flex gap-x-12'>
                        <a href="https://electromart-ccd61.web.app/">
                             <span><BiLinkExternal  className='text-white text-xl hover:text-orange-500' alt='Live'/></span>
                         </a>
                        <a href="https://github.com/GRabbi467/ElectroMart.git">
                             <span><FiGithub  className='text-white text-xl hover:text-orange-500' alt='Live'/></span>
                         </a>
                         <a href="https://github.com/GRabbi467/ElectroMart-server.git">
                             <span><IoServer  className='text-white text-xl hover:text-orange-500' alt='Live'/></span>
                         </a>
                         

                    </div>

                </div>
            </div>

            <div className="max-w-sm  overflow-hidden p-4 shadow-2xl hover:-translate-y-2 duration-300">
                <img className="w-full rounded-xl" src={electromart} alt="Sunset in the mountains"/>
                <div class="px-6 pt-2 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ReactJs</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Firebase</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ExpressJs</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MongoDB</span>
                </div>

                <div className="px-6 py-0">
                    <div className="font-bold text-orange-500 text-xl mb-2">Electro Mart</div>
                    <p className="text-white text-base">
                    An E-commerce website to sell and buy products.
                    Buyer can browse products at once or categorically.
                    Search filter, pagination applied.
                    Add products to the cart and remove from the cart, login required to place order.
                    Seller can list their products by logging in to a protected route.
                    Update, delete product from seller dashboard.
                    </p>
                    <div className='mt-2 flex gap-x-12'>
                        <a href="https://electromart-ccd61.web.app/">
                             <span><BiLinkExternal  className='text-white text-xl hover:text-orange-500' alt='Live'/></span>
                         </a>
                        <a href="https://github.com/GRabbi467/ElectroMart.git">
                             <span><FiGithub  className='text-white text-xl hover:text-orange-500' alt='Live'/></span>
                         </a>
                         <a href="https://github.com/GRabbi467/ElectroMart-server.git">
                             <span><IoServer  className='text-white text-xl hover:text-orange-500' alt='Live'/></span>
                         </a>
                         

                    </div>

                </div>
            </div>
            </div>
        
        </div>
    );
};

export default Projects;