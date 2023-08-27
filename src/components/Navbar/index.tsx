import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
