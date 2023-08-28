"use client";
import MobileSidebar from "@/components/Sidebar/MobileSidebar";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <div className="md:hidden">
        <MobileSidebar />
      </div>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
