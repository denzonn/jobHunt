"use client";
import TitleSection from "@/components/atoms/TitleSection";
import React, { FC, useMemo } from "react";
import CategoryItem from "./CategoryItem";
import useSWR from "swr";
import { fether, parsingCategories } from "@/lib/utils";
import { categoryJobType } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

interface CategoryProps {}

const Category: FC<CategoryProps> = () => {
  const { data, isLoading, error } = useSWR("/api/jobs/categories", fether);

  const categories = useMemo(
    () => parsingCategories(data, isLoading, error),
    [data, isLoading, error]
  );

  return (
    <div className="mt-32 mb-8">
      <TitleSection word1="Explore by" word2="category" />
      <div className="grid grid-cols-5 gap-9 mt-12">
        {isLoading
          ? [0, 1, 2, 3, 4].map((item: number) => (
              <Skeleton
                key={item}
                className="h-[250px] w-full rounded-xl"
              />
            ))
          : categories.map((item: categoryJobType) => {
              return (
                <CategoryItem
                  key={item.id}
                  name={item.name}
                  totalJobs={item.totalJobs}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Category;
