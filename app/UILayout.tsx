"use client";
import clsx from "clsx";
import React from "react";

import { Inter } from "next/font/google";
import TopHeader from "@/components/header/TopHeader";

interface Props {
  // Define any props that the component will accept
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

const UILayout: React.FC<Props> = (props) => {
  // Define the component's logic and rendering here
  return (
    <div className={clsx(inter.className, "bg-p-bg text-s-text")}>
      <div className="absolute inset-0">
        <img
          src="bg-image.jpeg"
          alt="bg-image"
          className="w-screen h-screen object-cover"
        />
      </div>

      <div className="relative z-10 w-screen h-screen bg-black/90 backdrop-opacity-100 backdrop-blur-3xl overflow-auto">
        <TopHeader />
        <div className="flex flex-col items-center justify-center py-10">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default UILayout;
