"use client"
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MovemeterLanding() {
  const navigate = useRouter();
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCompare = () => {
    if (fromLocation && toLocation) {
      setIsLoading(true);
      // Simulate API call
      localStorage.setItem("data", JSON.stringify({
        fromLocation,
        toLocation,
      }));
      setTimeout(() => {
        setIsLoading(false);
        navigate.push("/compare",);
      }, 2000);
    }
  };

  const handleSwapLocations = () => {
    setFromLocation(toLocation);
    setToLocation(fromLocation);
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
      ></div>

      <div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <h1
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
        >
          Discover Your Next Home Destination
        </h1>
        <p
          className="text-lg md:text-xl mb-12 text-gray-200"
        >
          Get insights on affordability, quality of life, job market, and more
          with just a few clicks.
        </p>

        <div
          className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-8"
        >
          <Input
            type="text"
            placeholder="From (City, State, or Zip)"
            value={fromLocation}
            onChange={(e) => setFromLocation(e.target.value)}
            className="w-full md:w-80 bg-white text-gray-800 border-[#77003b] rounded-md py-3 px-6"
          />

          <Button
            onClick={handleSwapLocations}
            className="bg-white text-[#77003b] rounded-full p-2 hover:bg-[#77003b] hover:text-white"
          >
            <ArrowLeftRight className="h-6 w-6" />
          </Button>

          <Input
            type="text"
            placeholder="To (City, State, or Zip)"
            value={toLocation}
            onChange={(e) => setToLocation(e.target.value)}
            className="w-full md:w-80 bg-white text-gray-800 border-[#77003b] rounded-md py-3 px-6"
          />
        </div>

        <Button
          onClick={handleCompare}
          className="bg-[#77003b] hover:bg-[#550029] text-white font-bold py-4 px-16 rounded-md text-xl"
          disabled={isLoading || !fromLocation || !toLocation}
        >
          {isLoading ? (
            <div className="flex items-center">
              <div
                className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"
              ></div>
              Calculating...
            </div>
          ) : (
            "Compare/Calculate"
          )}
        </Button>
      </div>
    </div>
  );
}
