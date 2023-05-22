import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'
import img7 from '../../assets/7.jpg'
import img8 from '../../assets/8.jpg'
import img9 from '../../assets/9.jfif'






const OusGallery = () => {
    AOS.init();






    return (
        <div>
            <div data-aos="fade-down" className='py-20'>

                <h1 className="text-secondary text-center font-bold text-4xl mb-5" >Our Gallery</h1>
                <p className='text-secondary w-[50%] mx-auto'>At Toy Cars, we are passionate about toy cars and all things miniature! Our website is dedicated to providing a delightful experience for toy car enthusiasts of all ages.</p>
                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-[50%] h-1 my-8 bg-secondary border-0 rounded dark:bg-gray-700" />
                    <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-4 gap-4'>


                <div data-aos="fade-down-left" className='h-[300px] w-[300px]'><img className='h-[300px] w-[500px]' src={img8} alt="" /></div>
                <div data-aos="fade-down-left" className='h-[300px] w-[300px]'><img className='h-[300px] w-[500px]' src={img2} alt="" /></div>
                <div data-aos="fade-down-right" className='h-[300px] w-[300px]'><img className='h-[300px] w-[500px]' src={img3} alt="" /></div>
                <div data-aos="fade-down-right" className='h-[300px] w-[300px]'><img className='h-[300px] w-[500px]' src={img4} alt="" /></div>
                <div data-aos="fade-down-left" className='h-[300px] w-[300px]'><img className='h-[300px] w-[500px]' src={img5} alt="" /></div>
                <div data-aos="fade-down-left" className='h-[300px] w-[300px]'><img className='h-[300px] w-[500px]' src={img6} alt="" /></div>
                <div data-aos="fade-down-right" className='h-[300px] w-[300px]'><img className='h-[300px] w-[500px]' src={img7} alt="" /></div>
                <div data-aos="fade-down-right" className='h-[300px] w-[300px]'><img className='h-[300px] w-[500px]' src={img9} alt="" /></div>

            </div>

        </div>



    );
};

export default OusGallery;