import React from "react";
import Link from "next/link"; // Use Next.js' Link for navigation
import Image from "next/image"; // Optional: Use Next.js' Image for optimized images

interface Property {
  propertyId: string;
  gallery: string[];
  unitType: string;
  offPlan: boolean;
  resale: boolean;
  projectLabel: string;
  bedrooms: number;
  bathrooms?: number; // Optional field, as it may not always be available
  saleableArea: number;
  sellingPrice?: number; // Optional field, as it may not always be available
  location: string[];
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const {
    propertyId,
    gallery,
    unitType,
    offPlan,
    resale,
    projectLabel,
    bedrooms,
    bathrooms,
    saleableArea,
    sellingPrice,
    location,
  } = property;
  return (
    <div className={"property-border"}>
      <div className={"property-card"}>
        {/* Clickable Image that leads to the details page */}
        <Link href={`/property-list/a2D8d0000009y9VEAQ`} passHref>
          <div className={"property-image-link"}>
            <div className={"property-image"}>
              {/* Use Next.js Image for optimized images */}
              <Image
                src={gallery[0]}
                alt={projectLabel}
                width={400} // Set the image dimensions
                height={300}
                layout="responsive"
              />
              <div className={"card-icons"}>
                <i className="fas fa-share-alt"></i>
              </div>
            </div>
          </div>
        </Link>

        <div className={"property-info"}>
          {/* Property Tags: Unit Type, Off-Plan */}
          <div className={"property-tags"}>
            <span className={"tag unit-type"}>{unitType}</span>
            {offPlan && (
              <span className={"tag off-plan"}>Off-Plan</span>
            )}
            {resale && <span className={"tag resale"}>Resale</span>}
          </div>

          {/* Price */}
          <div className={"property-price-card"}>
            {sellingPrice
              ? `AED ${sellingPrice.toLocaleString()}`
              : "Price on Request"}
          </div>
        </div>

        {/* Property Title and Location */}
        <h3 className={"property-title"}>{projectLabel}</h3>
        <p className={"property-location"}>
          <i className="fas fa-map-marker-alt"></i> {location[2]}
        </p>

        {/* Property Details: Area, Beds, Baths */}
        <div className={"property-details"}>
          <span>{saleableArea.toLocaleString()} sqft</span>
          <span>{bedrooms} Beds</span>
          {bathrooms && <span>{bathrooms} Baths</span>}
        </div>

        {/* Register Interest Button */}
        <button className={"register-btn"}>Register Interest</button>
      </div>
    </div>
  );
};

export default PropertyCard;
