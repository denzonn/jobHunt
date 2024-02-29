"use client";
import TitleSection from "@/components/atoms/TitleSection";
import React, { FC} from "react";
import JobItem from "./JobItem";
import { JobType } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import useFeaturedJobs from "@/hooks/useFeaturedJobs";

interface FeatureJobProps {}

const FeatureJob: FC<FeatureJobProps> = () => {
  const {jobs, isLoading, error} = useFeaturedJobs()

  return (
    <div className="mt-32 mb-10">
      <TitleSection word1="Featured" word2="jobs" />
      <div className="grid grid-cols-4 gap-8 mt-12">
        {isLoading
          ? [0, 1, 2, 3].map((item: number) => (
              <div className="flex flex-col space-y-3" key={item}>
                <Skeleton className="h-[200px] w-full rounded-xl" />
              </div>
            ))
          : jobs.map((item: JobType) => <JobItem key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default FeatureJob;
