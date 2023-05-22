import React from 'react';
import about from '../../assets/about-pic.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const AboutUs = () => {
    AOS.init();
    return (
        <div className=' bg-gray-100 rounded-md my-10 '>
            <div data-aos="fade-down" className='pt-20'>

                <h1 className="text-secondary text-center font-bold text-4xl mb-5" >About Us</h1>
                <p className='text-secondary w-[50%] mx-auto'>At Toy Cars, we are passionate about toy cars and all things miniature! Our website is dedicated to providing a delightful experience for toy car enthusiasts of all ages.</p> 
                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-[50%] h-1 my-8 bg-secondary border-0 rounded dark:bg-gray-700" />
                    <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                    </div>
                </div>
            </div>
            <div className='md:flex gap-5 p-10 align-middle'>
                <div data-aos="fade-down-right" className='w-[50%] p-10'><img src={about} alt="" /></div>
                <div data-aos="fade-down-left" className='w-[50%] p-10'><p>At Toy Cars, we are passionate about toy cars and all things miniature! Our website is dedicated to providing a delightful experience for toy car enthusiasts of all ages. Whether you're a collector, a parent looking for the perfect gift, or simply someone who appreciates the charm of tiny vehicles, you've come to the right place.</p>
                    <p>Who are we?
                    We are a team of toy car enthusiasts who have come together to create a platform where fellow enthusiasts can explore, learn, and connect. With our deep love for toy cars, we strive to bring you the best content, resources, and products to fuel your passion.</p>

                    

                    <p> What do we offer?
                    Our website is a treasure trove for toy car enthusiasts, offering a wide range of features and resources:

                    Comprehensive Product Reviews: We meticulously research and review various toy car brands, models, and collections to provide you with detailed insights. Our goal is to help you make informed decisions when adding to your collection or choosing the perfect toy car gift.</p></div>
            </div>


        </div>
    );
};

export default AboutUs;