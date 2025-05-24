import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CustomTabs = ({ options, selected, setDisplayType }) => {
  const handleTabChange = (value) => {
    setDisplayType(value);
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
