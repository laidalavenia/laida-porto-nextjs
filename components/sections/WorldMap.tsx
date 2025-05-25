"use client";

import WorldMap from "@/components/ui/world-map";

export default function WorldMapSection() {
  const mapDots = [
    {
      start: { lat: -6.2088, lng: 106.8456 }, // Jakarta, Indonesia
      end: { lat: 1.3521, lng: 103.8198 }, // Singapore
    },
    {
      start: { lat: -6.2088, lng: 106.8456 }, // Jakarta, Indonesia
      end: { lat: 35.6762, lng: 139.6503 }, // Tokyo, Japan
    },
    {
      start: { lat: -6.2088, lng: 106.8456 }, // Jakarta, Indonesia
      end: { lat: 37.7749, lng: -122.4194 }, // San Francisco, USA
    },
    {
      start: { lat: 51.5074, lng: -0.1278 }, // London, UK
      end: { lat: 40.7128, lng: -74.006 }, // New York, USA
    },
    {
      start: { lat: 40.7128, lng: -74.006 }, // New York, USA
      end: { lat: -6.2088, lng: 106.8456 }, // Jakarta, Indonesia
    },
    {
      start: { lat: -33.8688, lng: 151.2093 }, // Sydney, Australia
      end: { lat: -6.2088, lng: 106.8456 }, // Jakarta, Indonesia
    },
    {
      start: { lat: 28.6139, lng: 77.209 }, // New Delhi, India
      end: { lat: -6.2088, lng: 106.8456 }, // Jakarta, Indonesia
    },
  ];

  return (
    <section className="bg-transparent w-full">
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient
            id="purple-blue-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
            <stop offset="10%" stopColor="#a855f7" stopOpacity="1" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="90%" stopColor="#a855f7" stopOpacity="1" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <WorldMap dots={mapDots} lineColor="url(#purple-blue-gradient)" />
    </section>
  );
}
