import React from "react";

const PageLoader: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-25 flex justify-center items-center z-50">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-orange-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default PageLoader;
