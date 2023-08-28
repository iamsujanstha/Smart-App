"use client";

import Sidebar from "@/components/Sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/Ui/sheet";
import { Menu } from "lucide-react";
import React from "react";

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = React.useState(false)
  
  /* For NextJs Hydration issue */
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-72 bg-purple-900">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
