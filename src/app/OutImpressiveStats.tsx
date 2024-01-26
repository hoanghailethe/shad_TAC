"use client";

import React from "react";

import {
  IoDocumentTextOutline ,
  IoPlayCircle ,
  IoPencilOutline ,
  IoPhonePortraitOutline ,
} from "react-icons/io5";

import StatsCard from "@/components/stats-card";


const STATS = [
  {
    icon: IoDocumentTextOutline,
    count: "10,200+",
    title: "Students",
  },
  { 
    icon: IoPlayCircle ,
    count: "50+",
    title: "Instructors",
  },
  {
    icon: IoPencilOutline ,
    count: "10+",
    title: "Courses",
  },
  {
    icon: IoPhonePortraitOutline ,
    count: "24/7",
    title: "Support",
  },
];

export function OutImpressiveStats() {
  return (
    <section className="px-8 pt-60 min-h-screen">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <h2 className="mb-2 text-4xl">
            Explore Our Impressive Stats
          </h2>
          <h3
            className="mx-auto mb-24 w-full !text-gray-500 lg:w-5/12"
          >
            We take pride in our commitment to excellence and our dedication to
            your success.
          </h3>
        </div>
        <div className="grid gap-y-16 gap-x-10 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default OutImpressiveStats;