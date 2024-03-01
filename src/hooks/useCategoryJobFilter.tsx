import { fether, parsingCategoriesToOptions } from "@/lib/utils";
import { filterFormType } from "@/types";
import { useMemo } from "react";
import useSWR from "swr";

const useCategoryJobFilter = () => {
  const { data, isLoading, error } = useSWR("/api/jobs/categories", fether);

  const categories = useMemo(
    () => parsingCategoriesToOptions(data, isLoading, error),
    [data, isLoading, error]
  );

  const filters = useMemo(() => {
    return [
      {
        name: "categories",
        label: "categories",
        items: categories,
      },
    ] as filterFormType[];
  }, [categories]);

  return {
    filters,
    isLoading,
    error,
  };
};

export default useCategoryJobFilter;
