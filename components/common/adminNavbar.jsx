import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full border-b shadow h-18 flex items-center">
      <SidebarTrigger />
      <ul className="w-full flex items-center justify-between pr-5">
        <li><Link href="/">Ulerna</Link></li>
        <li className="w-2/3">
          <Input placeholder="search"/>
        </li>
        <li>
          <Avatar>
            <AvatarImage src="https://cdn-icons-png.freepik.com/256/17740/17740782.png?ga=GA1.1.127494702.1740897268&semt=ais_hybrid"/>
            <AvatarFallback>UL</AvatarFallback>
          </Avatar>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
