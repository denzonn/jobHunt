"use client";
import { useForm } from "react-hook-form";
import { formFilterSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { JobType, filterFormType } from "@/types";
import { CATEGORIES_OPTIONS } from "@/constants";
import ExploreDataContainer from "@/containers/ExploreDataContainer";

const FILTER_FORMS: filterFormType[] = [
  {
    name: "categories",
    label: "Categories",
    items: CATEGORIES_OPTIONS,
  },
];

const dummyData: JobType[] = [
  {
    applicants: 5,
    categories: ["Marketing", "Design"],
    description: "Test",
    image: "/images/company2.png",
    jobType: "Full-Time",
    location: "Paris, France",
    name: "Social Media Assistant",
    needs: 10,
    type: "Agency",
    skills: [],
  },
  {
    applicants: 2,
    categories: ["Marketing", "Design"],
    description: "Test",
    image: "/images/company2.png",
    jobType: "Full-Time",
    location: "Paris, France",
    name: "Social Media Assistant",
    needs: 10,
    type: "Agency",
    skills: [],
  },
];

export default function FindJobs() {
  const formFilter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: [],
    },
  });

  const onSubmitFormFilter = async (
    val: z.infer<typeof formFilterSchema>
  ) => {};

  return (
    <div>
      <ExploreDataContainer
        formFilter={formFilter}
        onSubmitFilter={onSubmitFormFilter}
        filterForms={FILTER_FORMS}
        title="dream Jobs"
        subtitle="Find your next career at companies like HubSpot, Nike and Dropbox"
        loading={false}
        type="job"
        data={dummyData}
      />
    </div>
  );
}
