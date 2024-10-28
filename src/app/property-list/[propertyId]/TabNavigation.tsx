"use client"
import GoogleMap from "@/components/GoogleMap";
import { useState } from "react";

const TabNavigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"googleMaps" | "worldOfAldar">("googleMaps");

  const handleTabClick = (tab: "googleMaps" | "worldOfAldar") => {
    setActiveTab(tab);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold">Location</h3>

      {/* Tab Header */}
      <div className="flex space-x-4">
        <button
          className={`tab ${activeTab === "googleMaps" ? "text-blue-600 font-bold" : ""}`}
          onClick={() => handleTabClick("googleMaps")}
        >
          Google Maps
        </button>
        <button
          className={`tab ${activeTab === "worldOfAldar" ? "text-blue-600 font-bold" : ""}`}
          onClick={() => handleTabClick("worldOfAldar")}
        >
          World of Aldar
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "googleMaps" && (
          <div className="map-container">
            <GoogleMap latitude={24.4539} longitude={54.3773} />
          </div>
        )}
        {activeTab === "worldOfAldar" && (
          <div className="p-4 bg-gray-100">
            <p>World of Aldar content goes here...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabNavigation;
