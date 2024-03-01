import { Form } from "@/components/ui/form";
import React, { FC } from "react";
import CheckboxForms from "./CheckboxForms";
import { filterFormType } from "@/types";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

interface FormFilterDynamicProps {
  formFilter: any;
  onSubmitFilter: (val: any) => Promise<void> | undefined;
  filterForms: filterFormType[];
  isLoading: boolean;
}

const FormFilterDynamic: FC<FormFilterDynamicProps> = ({
  formFilter,
  onSubmitFilter,
  filterForms,
  isLoading,
}) => {
  return (
    <Form {...formFilter}>
      <form onSubmit={formFilter.handleSubmit(onSubmitFilter)}>
        {isLoading ? (
          <>
            <div className="space-y-6 font-semibold mb-5">Filters</div>
            <div className="space-y-4">
            {[0, 1, 2, 3, 4].map((item: number) => (
              <div className="w-full h-8 flex flex-row gap-2" key={item}>
                <Skeleton className="w-2/12 rounded-md" />
                <Skeleton className="w-10/12 rounded-md" />
              </div>
            ))}
            </div>
            <Separator className="mt-6"/>
            <Button className="mt-5 w-full">Apply Filter</Button>
            <Button variant={"outline"} className="mt-3 w-full">
              Reset Filter
            </Button>
          </>
        ) : (
          <>
            {filterForms.map((item: filterFormType, index: number) => (
              <CheckboxForms
                key={index}
                formFilter={formFilter}
                label={item.label}
                items={item.items}
                name={item.name}
              />
            ))}
            <Button className="mt-5 w-full">Apply Filter</Button>
            <Button variant={"outline"} className="mt-3 w-full">
              Reset Filter
            </Button>
          </>
        )}
      </form>
    </Form>
  );
};

export default FormFilterDynamic;
