"use client";

import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { PropertyDetailFields } from "./page"; // Assuming page contains the shared PropertyDetailFields interface

interface PhotoGalleryProps {
  fields: PropertyDetailFields;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ fields }) => {
  const { mainPhoto, additionalPhotos } = fields;

  // Extract the URLs from the data structure
  const mainPhotoUrl = mainPhoto?.url?.default ?? ""; // Extract main photo URL
  const additionalPhotoUrls = additionalPhotos
    ? additionalPhotos.map((photo: any) => photo?.url?.default ?? "") // Extract additional photo URLs
    : [];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Combine main photo and additional photos into one array for the lightbox
  const images = [mainPhotoUrl, ...additionalPhotoUrls].filter(Boolean); // Remove empty strings or null values

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Main Photo */}
      {mainPhotoUrl && (
        <div className="flex-1">
          <img
            src={mainPhotoUrl}
            alt="Main Photo"
            className="w-full h-auto rounded-lg cursor-pointer"
            onClick={() => openLightbox(0)}
          />
        </div>
      )}

      {/* Grid of Additional Photos */}
      <div className="grid grid-cols-2 gap-4 flex-1">
        {additionalPhotoUrls.slice(0, 4).map((photoUrl: string, index: number) => (
          <div
            key={index}
            className={`relative cursor-pointer ${index === 3 ? "group" : ""}`}
            onClick={() => openLightbox(index + 1)} // Open lightbox for clicked image
          >
            <img
              src={photoUrl}
              alt={`Additional Photo ${index + 1}`}
              className="w-full h-auto rounded-lg object-cover"
            />
            {index === 3 && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg group-hover:bg-opacity-60">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-full">
                  <i className="fas fa-images"></i> All Photos
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default PhotoGallery;
