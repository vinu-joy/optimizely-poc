"use client";
import React from "react";
import { PropertyDetailFields } from "./page";

interface PropertyBriefDetailProps {
  fields: PropertyDetailFields;
}

const PropertyBriefDetail: React.FC<PropertyBriefDetailProps> = ({
  fields,
}) => {
  const {
    unitType,
    bedrooms,
    unitSize,
    completionDate,
    saleType,
    description,
    price,
    amenities,
  } = fields;

  return (
    <div className="flex flex-col p-5 bg-white">
      {/* Property Header */}
      <div className="flex justify-between items-center mb-3 w-full">
        <div>
          <h2 className="text-4xl font-bold mb-5 text-black">
            AED {price ?? "N/A"}
          </h2>
        </div>
        <div className="text-right">
          <button className="border border-gray-300 text-gray-800 px-4 py-2 rounded-full text-sm hover:bg-gray-100">
            <i className="fas fa-expand"></i> Floor Plan
          </button>
        </div>
      </div>

      {/* Property Meta Information */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4 text-gray-600">
        <div>
          <h6>Unit Type:</h6>
          <strong>{unitType ?? "N/A"}</strong>
        </div>
        <div>
          <h6>Bedrooms:</h6>
          <strong>{bedrooms ?? "N/A"}</strong>
        </div>
        <div>
          <h6>Unit Size:</h6>
          <strong>{unitSize ? `${unitSize} sqft` : "N/A"}</strong>
        </div>
        <div>
          <h6>Completion Date:</h6>
          <strong>{completionDate ?? "N/A"}</strong>
        </div>
        <div>
          <h6>Sale Type:</h6>
          <strong>{saleType ?? "N/A"}</strong>
        </div>
      </div>

      {/* Property Description */}
      <div className="mb-4">
        <p> {description}</p>
      </div>

      {/* Amenities Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Amenities</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {amenities?.length ? (
            amenities.map((amenity, index) => (
              <div className="flex items-center mb-3" key={index}>
                <i className="fas fa-check text-orange-600 mr-2"></i>
                {amenity}
              </div>
            ))
          ) : (
            <p>No amenities available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyBriefDetail;
