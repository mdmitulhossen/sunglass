import React from 'react';

const RegisterSpinner = () => {
    return (
        <div>

            <div className="h-screen absolute inset-0 bg-white">
                <div className="flex justify-center items-center h-full">
                    <img className="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default RegisterSpinner;