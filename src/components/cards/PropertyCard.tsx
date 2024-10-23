import React from 'react';
import Link from 'next/link'; // Use Next.js' Link for navigation
import Image from 'next/image'; // Optional: Use Next.js' Image for optimized images
import styles from './propertyCard.module.css'; // Assuming you're using CSS Modules for styling

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

  console.log("property",property);

  return (
    <div className={styles['property-border']}>
      <div className={styles['property-card']}>
        {/* Clickable Image that leads to the details page */}
        <Link href={`/property-list/${propertyId}`} passHref>
          <div className={styles['property-image-link']}>
            <div className={styles['property-image']}>
              {/* Use Next.js Image for optimized images */}
              <Image
                src={gallery[0]}
                alt={projectLabel}
                width={400} // Set the image dimensions
                height={300}
                layout="responsive"
              />
              <div className={styles['card-icons']}>
                <i className="fas fa-share-alt"></i>
              </div>
            </div>
          </div>
        </Link>

        <div className={styles['property-info']}>
          {/* Property Tags: Unit Type, Off-Plan */}
          <div className={styles['property-tags']}>
            <span className={styles['tag unit-type']}>{unitType}</span>
            {offPlan && <span className={styles['tag off-plan']}>Off-Plan</span>}
            {resale && <span className={styles['tag resale']}>Resale</span>}
          </div>

          {/* Price */}
          <div className={styles['property-price-card']}>
            {sellingPrice
              ? `AED ${sellingPrice.toLocaleString()}`
              : 'Price on Request'}
          </div>
        </div>

        {/* Property Title and Location */}
        <h3 className={styles['property-title']}>{projectLabel}</h3>
        <p className={styles['property-location']}>
          <i className="fas fa-map-marker-alt"></i> {location[2]}
        </p>

        {/* Property Details: Area, Beds, Baths */}
        <div className={styles['property-details']}>
          <span>{saleableArea.toLocaleString()} sqft</span>
          <span>{bedrooms} Beds</span>
          {bathrooms && <span>{bathrooms} Baths</span>}
        </div>

        {/* Register Interest Button */}
        <button className={styles['register-btn']}>Register Interest</button>
      </div>
    </div>
  );
};

export default PropertyCard;
