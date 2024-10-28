"use client";
import PropertyCard from "@/components/cards/PropertyCard";
import PageLoader from "@/components/loader/PageLoader";
import React, { useEffect, useState } from "react";

interface Property {
  propertyId: string;
  gallery: string[];
  unitType: string;
  offPlan: boolean;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  location: string[];
  completionDate: string;
  resale: boolean;
  projectLabel: string;
  saleableArea: number;
}

const SimilarList: React.FC = () => {
  const [data, setData] = useState<Property[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://func-dms-searchsvc-stg-un-001.azurewebsites.net/api/search/property/recommendations/a2D8d0000009xQ3EAI?limit=6&offset=1";

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result.data?.properties || []);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <PageLoader />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="pt-8">
      <h3 className="text-2xl font-bold mb-6">Similar Units</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.map((property) => (
          <PropertyCard key={property.propertyId} property={property} />
        ))}
      </div>
    </div>
  );
};

export default SimilarList;
