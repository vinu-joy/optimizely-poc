"use client"

import { useEffect, useState } from "react";
import PropertyCard from "@/components/cards/PropertyCard";
import CommunityListSkeleton from "@/components/skeleton/CommunityListSkeleton";
import PropertyCardSkeleton from "@/components/skeleton/PropertyCardSkeleton";
import PageLoader from "@/components/loader/pageLoader";

const Properties = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(5); // Initial count of visible communities
  const [isExpanded, setIsExpanded] = useState(false); // State for toggle between view more and view less
  const [selectedFilters, setSelectedFilters] = useState({
    communityKey: "", // Community filter
    propertyType: "", // Property type filter
  });

  useEffect(() => {
    fetchProperties();
    console.log("selectedFilters", selectedFilters);
  }, [selectedFilters]);

  // Fetch data from the API
  const fetchProperties = async () => {
    setLoading(true);

    const params = new URLSearchParams({
      offset: "1",
    });

    // Append community filter if selected
    if (selectedFilters.communityKey) {
      params.append("text", selectedFilters.communityKey);
    }

    // Append property type filter if selected
    if (selectedFilters.propertyType) {
      params.append("ty", selectedFilters.propertyType);
    }

    const url = `https://func-dms-searchsvc-stg-un-001.azurewebsites.net/api/search/property?${params.toString()}`;

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
      setData(result.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  // Calculate total properties found
  const totalProperties = data?.analytics.reduce(
    (total: number, item: any) => total + item.value,
    0
  );

  // Handle toggle between view more and view less
  const handleToggleView = () => {
    setIsExpanded(!isExpanded);
    setVisibleCount(isExpanded ? 5 : data?.analytics.length);
  };

  // Handle the first community click
  const handleCommunityClick = (communityKey: string) => {
    setSelectedFilters((prevFilters) => {
      if (prevFilters.communityKey) {
        return {
          ...prevFilters,
          propertyType: communityKey, // Set the clicked communityKey as propertyType if it already exists
        };
      }

      return {
        ...prevFilters,
        communityKey, // Set the clicked key as communityKey for the first time
      };
    });
  };

  // Clear all filters
  const handleClearAllFilters = () => {
    setSelectedFilters({
      communityKey: "",
      propertyType: "",
    });
  };

  if (loading)
    return (
      <div>
        <PageLoader />
        <CommunityListSkeleton />
        <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <PropertyCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-xl font-semibold mb-4">
        {totalProperties} Properties found
      </h2>

      {/* Display Selected Filters as Chips */}
      <div className="flex justify-between items-center my-3">
        <div className="flex space-x-2">
          {selectedFilters.communityKey && (
            <span className="bg-orange-600 text-white px-3 py-2 rounded-full">
              {selectedFilters.communityKey}
            </span>
          )}
          {selectedFilters.propertyType && (
            <span className="bg-orange-600 text-white px-3 py-2 rounded-full">
              {selectedFilters.propertyType}
            </span>
          )}
        </div>

        {/* Clear Filters button */}
        {(selectedFilters.communityKey || selectedFilters.propertyType) && (
          <button
            className="bg-white text-orange-600 border border-orange-600 px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 hover:bg-orange-600 hover:text-white"
            onClick={handleClearAllFilters}
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Community List */}
      {!selectedFilters.propertyType && (
        <>
          <div className="flex flex-wrap justify-around bg-gray-100 p-4">
            {data?.analytics
              .slice(0, visibleCount)
              .map((item: any, index: number) => (
                <div
                  key={index}
                  className="px-2 py-1 text-sm m-1 rounded cursor-pointer transition-colors duration-300 hover:bg-gray-300"
                  onClick={() => handleCommunityClick(item.key)}
                >
                  <span>
                    {item.key} ({item.value})
                  </span>
                </div>
              ))}
          </div>
          {data?.analytics.length > 3 && (
            <button
              onClick={handleToggleView}
              className="text-sm bg-white text-orange-500 border border-gray-300 px-4 py-2 rounded cursor-pointer mt-3 transition-colors duration-300 hover:bg-orange-500 hover:text-white hover:border-orange-500"
            >
              {isExpanded ? "View less" : "View more"}
            </button>
          )}
        </>
      )}

      {/* Property List */}
      <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.properties.map((property: any, index: number) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
