import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

const CustomTabs = ({ options, selected }) => {
  const router = useRouter();
  const handleTabChange = (value) => {
    router.push(`/admin/posts?view=${value}`);
  };
  return (
    <Tabs
      defaultValue={selected}
      className="w-36"
      onValueChange={handleTabChange}
    >
      <TabsList className="grid w-full grid-cols-2">
        {options?.map((item, index) => (
          <TabsTrigger value={item?.params} key={index} className="w-full">
            {item?.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default CustomTabs;
