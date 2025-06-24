import React from 'react';
import logo from '../../assets/logo.png'; // Adjust the path as necessary
import { Link } from 'react-router';

const ProFastLogo = () => {
    return (
        <Link to="/"><div className="flex items-end">
            <img className='mb-2' src={logo} alt="ProFast Logo" />
            <p className="-ml-2 text-3xl font-extrabold">ProFast</p>
        </div></Link>
    );
};

export default ProFastLogo;