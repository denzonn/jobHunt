import { fether, parsingCompanies } from "@/lib/utils";
import { JobType } from "@/types";
import { useCallback, useEffect, useMemo, useState } from "react";
import useSWR from "swr";

const COMPANY_PATH = "/api/company/filters";

const useCompanies = (filter?: string[]) => {
  const paramsCategory = useMemo(() => {
    if (filter && filter.length > 0) {
      return filter.join(",");
    }
    return "";
  }, [filter]);

  const { data, error, isLoading, mutate } = useSWR(
    `${COMPANY_PATH}?category=${paramsCategory}`,
    fether,
    { revalidateOnMount: false }
  );

  const [companies, setCompanies] = useState<JobType[]>([]);

  const parseCompanies = useCallback(async () => {
    const parseData = await parsingCompanies(data, isLoading, error);
    setCompanies(parseData);
  }, [data, isLoading, error]);

  useEffect(() => {
    parseCompanies();
  }, [data, isLoading, error, parseCompanies]);

  return {
    companies,
    mutate,
    isLoading,
  };
};

export default useCompanies;
