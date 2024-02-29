import { Input } from "@/components/ui/input";
import React, { FC } from "react";
import { IoIosSearch } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { LOCATION_OPTIONS } from "@/constants";
import { optionType } from "@/types";

interface FormSearchDynamicProps {}

const FormSearchDynamic: FC<FormSearchDynamicProps> = () => {
  return (
    <div className="mx-auto w-max">
      <div className="mt-6 bg-white rounded-sm py-4 px-6 shadow-md inline-flex items-center gap-4 relative w-max z-10 text-center">
        <div className="inline-flex gap-3 items-center">
          <IoIosSearch className="w-6 h-6" />
          <Input
            className="py-5 w-[200px] border-none"
            placeholder="Job Title or keyword"
          />
        </div>
        <div className="inline-flex gap-3 items-center">
          <SlLocationPin className="w-6 h-6" />
          <Select>
            <SelectTrigger className="w-[270px] border-none text-gray-500 outline-none py-5 ">
              <SelectValue placeholder="Select a Location" />
            </SelectTrigger>
            <SelectContent>
              {
                LOCATION_OPTIONS.map((item: optionType, index: number) => (
                    <SelectItem value={item.id} key={index}>{item.label}</SelectItem>
                ))
              }
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button className="py-5 px-7 text-base rounded-[2px]">
            Search
          </Button>
        </div>
      </div>
      <div className="text-muted-foreground mt-3">
        Popular : UI Designer, UX Research, Android, Admin
      </div>
    </div>
  );
};

export default FormSearchDynamic;
