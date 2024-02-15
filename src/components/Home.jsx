import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import twitterIcon from '../image 1.png';

export default function Home() {
    const location = useLocation();
    const navigate = useNavigate();



    return (
        <div className='px-2 mx-5 px-4 py-3'>
            <div>


                <div className='flex'>
                    <div className=' py-40'>
                        <h2 className='text-orange-600'>Hello,I'm</h2>
                        <h1 className='py-3 font-semibold'>James Smith</h1>
                        <h5>
                            A <span className="text-green-600">Creative Designer</span> From{' '}
                            <span className="text-purple-600">New York</span>
                        </h5>
                        <h1 className='py-2 font-light'>I'm creative designer based in New York ,and Im'very passionate and dedicated to my work</h1>
                        <div className='flex items-center space-x-4'>
                            <button className='text-white bg-orange-600 rounded-3xl px-3 py-2 w-20'>Ask Me</button>
                            <img
                                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.svg"
                                alt="key"
                                className="mr-2 w-8 h-8 px-1 py-1 rounded-full"
                            />
                            <img
                                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/whatsapp-icon.svg"
                                alt="key"
                                className="mr-2 w-8 h-8 px-1 py-1 rounded-full"
                            />
                            <img
                                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-square-icon.svg"
                                alt="key"
                                className="mr-2 w-8 h-8 px-1 py-1 rounded-full"
                            />
                        </div>
                    </div>
                    <div>
                        {/* <img
                            src="https://plus.unsplash.com/premium_photo-1681490490493-935cd8a8f422?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJvb2slMjByZWFkaW5nJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
                            alt="key"
                            className=" ml-auto	  w-full px-4 py-5 rounded-4xl "
                        /> */}
                        <img
                            src={twitterIcon}
                            alt="Twitter"
                            className="absolute bottom-0 right-0 w-100 h-80 px-8 py-8 rounded-full"
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}
