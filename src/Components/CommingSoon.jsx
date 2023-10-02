import React from 'react';
import { Link } from 'react-router-dom';

const CommingSoon = ({title}) => {

    return (
        <div>
            <div className="relative h-screen w-full flex flex-col items-center justify-center text-center text-white bg-cover bg-center"
                style={{backgroundImage:'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2850&amp;q=80'}}>
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-90"></div>

                <div className="z-10 text-xl text-white">
                    {title} COMING SOON!
                </div>

                <div className="flex items-end justify-center z-10">
                    <div className="m-2 sm:m-5">
                        <span className="text-indigo-600 font-bold text-xl sm:text-5xl">110</span>
                        <p>Days</p>
                    </div>
                    <div className="m-2 sm:m-5">
                        <span className="text-indigo-600 font-bold text-xl sm:text-5xl">13</span>
                        <p>Hours</p>
                    </div>
                    <div className="m-2 sm:m-5">
                        <span className="text-indigo-600 font-bold text-xl sm:text-5xl">47</span>
                        <p>Minutes</p>
                    </div>
                    <div className="m-2 sm:m-5">
                        <span className="text-indigo-600 font-bold text-xl sm:text-5xl">20</span>
                        <p>Seconds</p>
                    </div>
                </div>

                <div className="rounded-md shadow z-10 mt-5">
                    <Link to="/"
                        className="w-full px-8 py-3 border border-transparent text-base leading-6 font-light rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-md md:px-16">
                        <span>Who We Are?</span>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default CommingSoon;