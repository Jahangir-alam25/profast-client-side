import React from 'react';
import tracing from '../../../assets/benefits/tracking.png';
import call from '../../../assets/benefits/call.png';
import support from '../../../assets/benefits/support.png';
// import { benefits } from './benefitsData'; // or place data inline

// benefitsData.js (optional, or inside component)
const benefits = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: tracing
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: support
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: call
  }
];


const BenefitsSection = () => {


  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Benefits</h2>

        <div className="space-y-10">
          {benefits.map(({ id, title, description, image }) => (
            <div
              key={id}
              className="flex flex-col md:flex-row items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-xl overflow-hidden p-8"
            >
              {/* Left Image */}
              <div className="">
                <img
                  src={image}
                  alt={title}
                  className="w-full  p-8 object-cover"
                />
              </div>

              {/* Vertical Separator */}
              <div className="hidden md:block w-px bg-gray-300 h-40 mx-6"></div>
              <div className="block md:hidden w-full h-px bg-gray-300 my-4"></div>

              {/* Right Text */}
              <div className="">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
