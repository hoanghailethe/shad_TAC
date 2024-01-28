"use client";

import React from "react";
import { Button } from "@/components/ui/button";


import {
  FaGlobeEurope ,
  FaMicrophoneAlt ,
  FaPuzzlePiece ,
  FaHeart,
} from "react-icons/fa";

import CategoryCard from "@/components/category-card";
import { Card, CardContent } from "@/components/ui/card";


const CATEGORIES = [
  {
    img: "/image/blogs/blog-3.png",
    icon: FaHeart,
    title: "Frontend Web Development",
    desc: "300 Courses",
  },
  {
    img: "/image/blogs/blog-12.jpeg",
    icon: FaPuzzlePiece ,
    title: "Backend Web Development",
    desc: "200 Courses",
  },
  {
    img: "/image/blogs/blog-10.jpeg",
    icon: FaGlobeEurope ,
    title: "Web Security & Performance",
    desc: "240 Courses",
  },
  {
    img: "/image/blogs/blog-13.png",
    icon: FaMicrophoneAlt,
    title: "Full-Stack Web Development",
    desc: "100 Courses",
  },
];

const ServicesCategories= () => {
  return (
    <section className="container mx-auto px-8 py-36">
      <div className="mb-20 grid place-items-center text-center">
        <h2 className="my-3 text-blue-500 text-4xl">
          Courses Categories
        </h2>
        <h3 className="!text-gray-500 lg:w-6/12">
          A comprehensive selection of courses designed to empower you with the
          skills you need to thrive in the dynamic world of web development.
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardContent className="relative w-full">
            <span className="text-white text-xs font-bold opacity-50">
              HTML, CSS & Javascript
            </span>
            <h4 className="mt-9" color="white">
              Web Development Intro
            </h4>
            <span
              color="white"
              className="text-white mt-4 mb-14 font-normal opacity-50"
            >
              Ready to start your web development journey?
            </span>
            <Button size="sm" color="white">
              Enroll Now
            </Button>
          </CardContent>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesCategories;