import React from 'react';
import './Project.css'
import electromart from '../../Images/Electromart.png';
import Aplusacedemy from '../../Images/Aplus.png';
import Gallery from './../../Images/Gallery.png';
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import { IoServer } from "react-icons/io5";


const Projects = () => {
    return (
        <div className='project-container mx-0 lg:mx-32'>
            <h1 className='text-orange-500 text-center text-3xl mb-8'>Projects</h1>
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
                    <div className="text-white text-base">
                    <p className='text-lg text-neutral-400 font-medium mb-4'> A E-commerce website to sell and buy products.</p>
                    <ul className='list-disc'>
                        <li>Buyer can browse products at once or categorically.</li>
                        <li>Search filter, pagination applied</li>
                        <li>Add products to the cart and remove from the cart, login required to place order</li>
                        <li> Seller can list their products by logging in to a protected route</li>
                        <li>Update, delete product from seller dashboard</li>
                    </ul>
                    </div>
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
                <img className="w-full rounded-xl" src={Aplusacedemy} alt="Sunset in the mountains"/>
                <div class="px-6 pt-2 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ReactJs</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Firebase</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ExpressJs</span>
                </div>

                <div className="px-6 py-0">
                    <div className="font-bold text-orange-500 text-xl mb-2">A Plus Academy</div>
                    <div className="text-white text-base">
                    <p className='text-lg text-neutral-400 font-medium mb-4'> An Online learning and teaching platform</p>
                    <ul className='list-disc'>
                    <li>Modern looking Website</li>
                    <li>User can browse courses by log in</li>
                    <li>Show user reviews</li>
                    <li>Send feedback to admin</li>
                    </ul>
                    </div>
                    <div className='mt-2 flex gap-x-12'>
                        <a href="https://aplusacademy-rabbi.web.app/">
                             <span><BiLinkExternal  className='text-white text-xl hover:text-orange-500' alt='Live'/></span>
                         </a>
                        <a href="https://github.com/GRabbi467/AplusAcademy.git">
                             <span><FiGithub  className='text-white text-xl hover:text-orange-500' alt='Live'/></span>
                         </a>
                         <a href="https://github.com/GRabbi467/Edusite-Server.git">
                             <span><IoServer  className='text-white text-xl hover:text-orange-500' alt='Live'/></span>
                         </a>
                         

                    </div>

                </div>
            </div>

            <div className="max-w-sm  overflow-hidden p-4 shadow-2xl hover:-translate-y-2 duration-300">
                <img className="w-full rounded-xl" src={Gallery} alt="Sunset in the mountains"/>
                <div class="px-6 pt-2 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ReactJs</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS3</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind</span>
                    
                </div>

                <div className="px-6 py-0">
                    <div className="font-bold text-orange-500 text-xl mb-2">Photo Gallery</div>
                    <div className="text-white text-base">
                    <p className='text-lg text-neutral-400 font-medium mb-4'>This is a draggable and reorderable photo gallery app.</p>
                    <ul className='list-disc'>
                    <li>Enable users reordering functionality to allow users to rearrange the order of images in the gallery.</li>
                    <li>Implement drag-and-drop functionality for reordering.</li>
                    <li>Displays images with one feature image larger than the others.</li>
                    <li>Allow users to select multiple images and delete them.</li>
                    </ul>
                    </div>
                    <div className='mt-2 flex gap-x-12'>
                        <a href="https://gallery-app-eight-bice.vercel.app/">
                             <span><BiLinkExternal  className='text-white text-xl hover:text-orange-500' alt='Live'/></span>
                         </a>
                        <a href="https://github.com/GRabbi467/Gallery-App.git">
                             <span><FiGithub  className='text-white text-xl hover:text-orange-500' alt='Live'/></span>
                         </a>
                         
                         

                    </div>

                </div>
            </div>
            </div>
        
        </div>
    );
};

export default Projects;