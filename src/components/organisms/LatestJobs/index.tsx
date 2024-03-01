"use client";
import TitleSection from "@/components/atoms/TitleSection";
import React, { FC } from "react";
import JobItem from "./JobItem";
import useFeaturedJobs from "@/hooks/useFeaturedJobs";
import { JobType } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

interface LatestJobsProps {}

const LatestJobs: FC<LatestJobsProps> = () => {
  const { jobs, isLoading, error } = useFeaturedJobs();

  return (
    <div className="py-16 mt-32 mb-10 relative">
      <TitleSection word1="Latest" word2="jobs opens" />

      <div className="mt-12 grid grid-cols-3 gap-8">
        {isLoading
          ? [0, 1, 2].map((item: number) => (
              <Skeleton key={item} className="h-[150px] w-full rounded-xl" />
            ))
          : jobs.map((item: JobType, index: number) => (
              <JobItem key={item.id} {...item} />
            ))}
      </div>
    </div>
  );
};

export default LatestJobs;
