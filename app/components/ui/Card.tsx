"use client";

import React from "react";

interface SensorCardProps {
  type: "temperature" | "humidity" | "sound";
  currentReading: number | null;
  previousReading?: number | null;
  sensitivityLevel?: number | null;
  title: string;
  icon: React.ReactNode;
}

const getBarStyle = (type: string, value: number | null) => {
  if (value === null) return { width: "0%", color: "bg-gray-300" };

  switch (type) {
    case "temperature": {
      if (value <= 18) return { width: "33%", color: "bg-blue-500" };
      if (value <= 28) return { width: "66%", color: "bg-yellow-500" };
      return { width: "100%", color: "bg-red-500" };
    }
    case "humidity": {
      if (value <= 30) return { width: "33%", color: "bg-blue-500" };
      if (value <= 60) return { width: "66%", color: "bg-yellow-500" };
      return { width: "100%", color: "bg-green-500" };
    }
    case "sound": {
      if (value <= 40) return { width: "33%", color: "bg-green-500" };
      if (value <= 70) return { width: "66%", color: "bg-orange-400" };
      return { width: "100%", color: "bg-red-500" };
    }
    default:
      return { width: "0%", color: "bg-gray-300" };
  }
};

const getTags = (type: string) => {
  switch (type) {
    case "temperature":
      return [
        { label: "Cool", color: "bg-blue-500" },
        { label: "Moderate", color: "bg-yellow-500" },
        { label: "Hot", color: "bg-red-500" },
      ];
    case "humidity":
      return [
        { label: "Low", color: "bg-blue-500" },
        { label: "Medium", color: "bg-yellow-500" },
        { label: "High", color: "bg-green-500" },
      ];
    case "sound":
      return [
        { label: "Quiet", color: "bg-green-500" },
        { label: "Normal", color: "bg-orange-400" },
        { label: "Loud", color: "bg-red-500" },
      ];
    default:
      return [];
  }
};

const Card: React.FC<SensorCardProps> = ({
  icon,
  type,
  title,
  currentReading,
  previousReading,
  sensitivityLevel = null,
}) => {
  const bar = getBarStyle(type, currentReading);
  const tags = getTags(type);

  return (
    <div className="p-6 rounded-2xl shadow-md bg-white w-full text-gray-900">
      <div className="flex flex-row items-center justify-between border-b border-gray-200 pb-4 mb-6">
        <div className="flex flex-row items-center gap-3">
          <div className="text-gray-400">{icon}</div>
          <h6 className="font-medium">{title || "Unknown"}</h6>
        </div>
        <p className="label-medium text-neutral-500 border border-gray-200 rounded-lg px-2.5 py-1 shadow-xs">
          Today
        </p>
      </div>

      <div className="text-5xl font-semibold mb-2">
        {currentReading !== null ? `${currentReading}` : "No data"}
      </div>

      <div className="text-xs text-gray-400 mb-4">
        {type === "sound"
          ? `Sensitivity: ${sensitivityLevel ?? "No data"}%`
          : `${previousReading !== null ? `${previousReading}` : "No data"} · 5 min ago`}
      </div>

      <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden mb-3">
        <div
          className={`h-full rounded-full transition-all duration-500 ${bar.color}`}
          style={{ width: bar.width }}
        ></div>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-600">
        {tags.map((tag) => (
          <div className="flex items-center gap-1" key={tag.label}>
            <span className={`w-2 h-2 rounded-full ${tag.color}`}></span>
            {tag.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
