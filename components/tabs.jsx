import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const CustomTabs = ({ options }) => {
    const redirect = ()=>{
        console.log("redirecting")
    }
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        {options?.map((item, index) => (
          <TabsTrigger value={item?.name} key={index}>
            <Link href={`/admin/posts?view=${item?.params}`} key={index}>
              {item?.name}
            </Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default CustomTabs;
