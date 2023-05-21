import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'




const OusGallery = () => {
    AOS.init();






    return (
        <div>
            <div className='my-10'>

                <h1 className="text-secondary text-center font-bold text-4xl" >Our Gallery</h1>
                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-[30%] h-1 my-8 bg-secondary border-0 rounded dark:bg-gray-700" />
                    <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                    </div>
                </div>
            </div>

            <div>
                <div className="carousel rounded-box">
                    <div className="carousel-item">
                        <img data-aos="fade-up" className='h-[500px] w-[500px]' src={img1} alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img className='h-[500px] w-[500px]' src={img3} alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img className='h-[500px] w-[500px]' src={img1} alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img className='h-[500px] w-[500px]' src={img2} alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img className='h-[500px] w-[500px]' src={img1} alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img className='h-[500px] w-[500px]' src={img1} alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img className='h-[500px] w-[500px]' src={img2} alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img className='h-[500px] w-[500px]' src={img1} alt="Burger" />
                    </div>
                </div>


            </div>



            <div className='grid grid-cols-3'>
                <div data-aos="fade-up" className="card h-96 w-full bg-base-100 ">
                    <img src={img1} alt="Shoes" />

                </div>
                <div data-aos="fade-up" className="card h-200 w-full bg-base-100 ">
                    <img src={img2} alt="Shoes" />

                </div>
                <div data-aos="fade-up" className="card w-full bg-base-100 ">
                    <img src={img1} alt="Shoes" />

                </div>
                <div data-aos="fade-up" className="card w-full bg-base-100 ">
                    <img src={img3} alt="Shoes" />

                </div>
                <div data-aos="fade-up" className="card w-full bg-base-100 ">
                    <img src={img1} alt="Shoes" />

                </div>
                <div data-aos="fade-up" className="card w-full bg-base-100 ">
                    <img src={img2} alt="Shoes" />

                </div>
                <div data-aos="fade-up" className="card w-full bg-base-100 ">
                    <img src={img1} alt="Shoes" />

                </div>
                <div data-aos="fade-up" className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="Shoes" /></figure>

                </div>
                <div data-aos="fade-up" className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="Shoes" /></figure>

                </div>
            </div>








        </div>



    );
};

export default OusGallery;