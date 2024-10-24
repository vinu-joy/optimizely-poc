import React from "react";
import { PropertyDetailFields } from "./page";

interface RealEstateCardProps {
  fields: PropertyDetailFields;
}

const RealEstateCard: React.FC<RealEstateCardProps> = ({ fields }) => {
  const {
    communityName,
    communityTitle,
    communityDescription,
    communityButtonText,
  } = fields;

  return (
    <div className="p-5 bg-gray-100 rounded-lg">
      {/* Community Name Section */}
      <div className="community-info mb-3 flex justify-between items-center border p-3 bg-white">
        <span>Community:</span>
        <span className="font-bold">{communityName ?? "N/A"}</span>
      </div>

      {/* Unlock Real Estate Section */}
      <div className="real-estate-card text-center bg-gray-100 p-5 mt-5 rounded-lg">
        <i className="fas fa-phone-alt text-orange-500 text-3xl mb-2"></i>
        <h4 className="text-lg font-bold">
          {communityTitle ?? "No Title Available"}
        </h4>
        <p className="text-sm mb-4">
          {communityDescription ?? "No Description Available"}
        </p>

        {true ? (
          <a
            href={"/contact"}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full w-full"
          >
            {communityButtonText ?? "Learn More"}
          </a>
        ) : (
          <p>No link available</p>
        )}
      </div>
    </div>
  );
};

export default RealEstateCard;
