"use client";
import { useForm } from "react-hook-form";
import { formFilterSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import ExploreDataContainer from "@/containers/ExploreDataContainer";
import useCategoryJobFilter from "@/hooks/useCategoryJobFilter";
import useJobs from "@/hooks/useJobs";
import { useEffect, useMemo, useState } from "react";

export default function FindJobs() {
  const formFilter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: [],
    },
  });
  
  const {filters} = useCategoryJobFilter()
  const [categories, setCategories] = useState([])

  const {jobs, mutate, isLoading} = useJobs(categories)

  const onSubmitFormFilter = async (
    val: z.infer<typeof formFilterSchema>
  ) => {
    setCategories(val.categories)
  }
  
  useEffect(() => {
    mutate() 
  }, [categories, mutate])

  return (
    <div>
      <ExploreDataContainer
        formFilter={formFilter}
        onSubmitFilter={onSubmitFormFilter}
        filterForms={filters}
        title="dream Jobs"
        subtitle="Find your next career at companies like HubSpot, Nike and Dropbox"
        isLoading={isLoading}
        type="job"
        data={jobs}
      />
    </div>
  );
}
