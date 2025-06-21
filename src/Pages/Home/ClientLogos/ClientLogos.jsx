import React from 'react';
// import './ClientLogos.css'; // if CSS in external file
import clientLogo1 from '../../../assets/brands/amazon.png';
import clientLogo2 from '../../../assets/brands/amazon_vector.png';
import clientLogo3 from '../../../assets/brands/casio.png';
import clientLogo4 from '../../../assets/brands/moonstar.png';
import clientLogo5 from '../../../assets/brands/randstad.png';
import clientLogo6 from '../../../assets/brands/start-people 1.png';
import clientLogo7 from '../../../assets/brands/start.png';

const clientLogos = [
  clientLogo1,
  clientLogo2,
  clientLogo3,
  clientLogo4,
  clientLogo5,
  clientLogo6,
  clientLogo7
];

const ClientLogos = () => {
  return (
    <section className="py-12 bg-base-200 overflow-hidden">
        <h2 className="text-center text-3xl font-bold mb-8">We've helped thousands of sales teams</h2>
      <div className="relative w-full">
        <div className="flex whitespace-nowrap animate-scroll">
          {/* Duplicate logos for infinite scroll illusion */}
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 px-8">
              <img
                src={logo}
                alt={`client-${index}`}
                className="h-20 w-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
