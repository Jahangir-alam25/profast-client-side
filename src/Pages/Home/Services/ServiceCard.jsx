import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, description, icon: Icon } = service;
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <div className="text-4xl text-primary mb-4">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
