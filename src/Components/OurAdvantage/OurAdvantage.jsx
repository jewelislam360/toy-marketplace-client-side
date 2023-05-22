import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLightbulb } from "react-icons/fa";
import a1 from '../../assets/a1.png'
import a2 from '../../assets/2.png'
import a3 from '../../assets/3.png'
import a4 from '../../assets/4.png'



const OurAdvantage = () => {
    AOS.init();
    return (
        <div>
            <div data-aos="fade-down" className='py-20'>

                <h1 className="text-secondary text-center font-bold text-4xl mb-5" >Our Advantage</h1>
                <p className='text-secondary w-[50%] mx-auto'>At Toy Cars, we are passionate about toy cars and all things miniature! Our website is dedicated to providing a delightful experience for toy car enthusiasts of all ages.</p>
                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-[50%] h-1 my-8 bg-secondary border-0 rounded dark:bg-gray-700" />
                    <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                    </div>
                </div>
            </div>
            <div className=' md:flex gap-5'>
                <div data-aos="fade-down-right" className="card w-96 bg-base-100 shadow-xl ">
                    <figure className="px-10 pt-10">
                        <img src={a1} alt="Shoes" className="rounded-xl w-[50%]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-secondary">Innovation</h2>
                        <p>We are a team of toy car enthusiasts who have come together to create a platform where fellow enthusiasts can explore, learn, and connect. With our deep love for toy cars.</p>

                    </div>
                </div>


                <div data-aos="fade-down-right" className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={a2} alt="Shoes" className="rounded-xl w-[50%]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-secondary">Quality</h2>
                        <p>We are a team of toy car enthusiasts who have come together to create a platform where fellow enthusiasts can explore, learn, and connect. With our deep love for toy cars.</p>

                    </div>
                </div>


                <div data-aos="fade-down-left" className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={a3} alt="Shoes text-secondary" className="rounded-xl w-[50%]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-secondary card-title">Happy Clint</h2>
                        <p>We are a team of toy car enthusiasts who have come together to create a platform where fellow enthusiasts can explore, learn, and connect. With our deep love for toy cars. </p>

                    </div>
                </div>


                <div data-aos="fade-down-left" className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={a4} alt="Shoes" className="rounded-xl w-[50%]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-secondary">Support</h2>
                        <p>We are a team of toy car enthusiasts who have come together to create a platform where fellow enthusiasts can explore, learn, and connect. With our deep love for toy cars.</p>

                    </div>

                </div>

            </div>





        </div>
    );
};

export default OurAdvantage;