"use client"
import { Movemeter } from "@/components/movemeter";
import React, { useState, useEffect } from "react";


export default function MovemeterPage() {
  const [selectedCities, setSelectedCities] = useState([ "Madison, Wisconsin", "San Francisco, California" ]);

  useEffect(() => {
    if (window) {
    //   setSelectedCities([
    //     location.state.fromLocation,
    //     location.state.toLocation,
    //   ]);
    const LocalData = localStorage.getItem("data");
    const data = JSON.parse(LocalData);
    setSelectedCities([data.fromLocation,data.toLocation]);
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <h1
          className="text-3xl font-bold text-center mb-8 text-[#77003b]"
        >
          RelocationRadar MoveMeter
        </h1>
        <Movemeter
          fromLocation={selectedCities[0]}
          toLocation={selectedCities[1]}
        />
      </div>
    </div>
  );
}
