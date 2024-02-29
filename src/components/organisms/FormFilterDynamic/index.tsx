import { Form } from "@/components/ui/form";
import React, { FC } from "react";
import CheckboxForms from "./CheckboxForms";
import { filterFormType } from "@/types";
import { CATEGORIES } from "@/constants";
import { Button } from "@/components/ui/button";

interface FormFilterDynamicProps {
  formFilter: any;
  onSubmitFilter: (val: any) => Promise<void> | undefined;
  filterForms: filterFormType[];
}

const FormFilterDynamic: FC<FormFilterDynamicProps> = ({
  formFilter,
  onSubmitFilter,
  filterForms,
}) => {
  return (
    <Form {...formFilter}>
      <form onSubmit={formFilter.handleSubmit(onSubmitFilter)}>
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
        <Button variant={'outline'} className="mt-3 w-full">Reset Filter</Button>
      </form>
    </Form>
  );
};

export default FormFilterDynamic;
