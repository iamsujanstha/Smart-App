"use client";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { routes } from "@/constants";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-10 h-10 mr-2">
            <Image alt="logo" src="/smartapp.png" layout="fill" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>SmartApp</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-md text-zinc-400 group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href ? "text-zinc-100 bg-white/10" : ""
              )}>
              <div className="flex items-center flex-1">
                <route.icon className={cn("mr-4", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
