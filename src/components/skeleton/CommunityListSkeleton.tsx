import React from 'react';

const CommunityListSkeleton: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-around bg-gray-100 p-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-gray-300 px-6 py-3 rounded-md w-1/5 m-2"
        >
          <div className="h-6 bg-gray-400 rounded-md"></div>
        </div>
      ))}
    </div>
  );
};

export default CommunityListSkeleton;
