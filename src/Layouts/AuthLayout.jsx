import React from 'react';
import { Outlet } from 'react-router';
import ProFastLogo from '../Shared/ProFastLogo/ProFastLogo';
import AuthImg from '../assets/authImage.png';

const AuthLayout = () => {
    return (
        <div className=" bg-base-200 p-16 ">
            <div className='mb-8'>
                <ProFastLogo></ProFastLogo>
            </div>
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className='flex-1'>
                  <img
                    src={AuthImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
              </div>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;