'use client'
import { CATEGORIES_OPTIONS } from "@/constants";
import ExploreDataContainer from "@/containers/ExploreDataContainer";
import useCategoryCompanyFilter from "@/hooks/useCategoryCompanyFilter";
import useCompanies from "@/hooks/useCompanies";
import { formFilterCompanySchema } from "@/lib/form-schema";
import { CompanyType, filterFormType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface FindCompaniesPageProps {}

const FILTER_FORMS: filterFormType[] = [
  {
    name: "industry",
    label: "Industry",
    items: CATEGORIES_OPTIONS,
  },
];

const dataDummy: CompanyType[] = [
    {
        image: '/images/company2.png',
        categories: 'Marketing',
        description: 'lorem',
        name: 'Twitter',
        totalJobs: 10
    },
    {
        image: '/images/company2.png',
        categories: 'Design',
        description: 'lorem',
        name: 'Facebook',
        totalJobs: 7
    },
    {
        image: '/images/company2.png',
        categories: 'Marketing',
        description: 'lorem',
        name: 'Twitter',
        totalJobs: 10
    },
    {
        image: '/images/company2.png',
        categories: 'Design',
        description: 'lorem',
        name: 'Facebook',
        totalJobs: 7
    },
]

const FindCompaniesPage: FC<FindCompaniesPageProps> = () => {
  const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
    resolver: zodResolver(formFilterCompanySchema),
    defaultValues: {
      industry: [],
    },
  });

  const {filters} = useCategoryCompanyFilter()
  const [categories, setCategories] = useState([])
  const  {companies, isLoading, mutate} = useCompanies(categories)

  useEffect(() => {
    mutate() 
  }, [categories, mutate])

  const onSubmitFormFilter = async (
    val: z.infer<typeof formFilterCompanySchema>
  ) => {
    setCategories(val.industry)
  };

  return (
    <ExploreDataContainer
      formFilter={formFilter}
      onSubmitFilter={onSubmitFormFilter}
      filterForms={filters}
      title="dream companies"
      subtitle="Find the dream companies you dream work for"
      isLoading={isLoading}
      data={companies}
      type={"company"}
    />
  );
};

export default FindCompaniesPage;
