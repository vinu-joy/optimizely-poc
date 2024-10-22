import React from 'react';

const PropertyCardSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse bg-gray-200 p-4 rounded-lg shadow-lg">
      <div className="w-full h-48 bg-gray-300 rounded-md"></div>
      <div className="mt-4 h-6 bg-gray-300 rounded-md"></div>
      <div className="mt-2 h-4 bg-gray-300 rounded-md w-2/3"></div>
      <div className="mt-4 flex justify-between">
        <div className="h-4 bg-gray-300 rounded-md w-1/3"></div>
        <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
      </div>
      <div className="mt-4 h-10 bg-gray-300 rounded-md"></div>
    </div>
  );
};

export default PropertyCardSkeleton;
