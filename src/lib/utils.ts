import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import bycrpt from "bcryptjs";
import { CompanyType, JobType, categoryJobType, optionType } from "@/types";
import { supabasePublicUrl } from "./supabase";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const hashPassword = async (password: string) => {
  const hashedPasswords = await bycrpt.hash(password, 10);

  return hashedPasswords;
};

export const comparePassword = async (
  password: string,
  hashPassword: string
) => {
  const isMatch = await bycrpt.compare(password, hashPassword);

  return isMatch;
};

export async function fether<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);

  return res.json() as Promise<JSON>;
}

export const parsingCategories = (
  data: any,
  isLoading: boolean,
  error: any
) => {
  if (!isLoading && !error && data) {
    return data?.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        totalJobs: item._count.Job,
      };
    }) as categoryJobType[];
  }

  return [];
};

export const parsingJobs = async (
  data: any,
  isLoading: boolean,
  error: any
) => {
  if (!isLoading && !error && data) {
    return await Promise.all(
      data.map(async (item: any) => {
        let imageName = item.Company?.Companyoverview[0]?.image;
        let imageUrl;

        if (imageName) {
          imageUrl = await supabasePublicUrl(imageName, "company");
        } else {
          imageUrl = "/images/company.png";
        }

        const job: JobType = {
          id: item.id,
          name: item.roles,
          applicants: item.applicants,
          category: item.CategoryJob,
          desc: item.description,
          jobType: item.jobType,
          image: imageUrl,
          location: item.Company?.Companyoverview[0]?.location,
          needs: item.needs,
          type: item.CategoryJob.name,
          skills: item.requiredSkills,
        };

        return job;
      })
    );
  }

  return [];
};

export const parsingCompanies = async (
  data: any,
  isLoading: boolean,
  error: any
) => {
  if (!isLoading && !error && data) {
    return await Promise.all(
      data.map(async (item: any) => {
        let imageName = item.Companyoverview[0]?.image;
        let imageUrl;

        if (imageName) {
          imageUrl = await supabasePublicUrl(imageName, "company");
        } else {
          imageUrl = "/images/company.png";
        }

        const companyDetail = item.Companyoverview[0];

        const company: CompanyType = {
          id: item.id,
          name: companyDetail?.name,
          image: imageUrl,
          dateFounded: companyDetail?.dateFounded,
          description: companyDetail?.description,
          employee: companyDetail?.employee,
          industry: companyDetail?.industry,
          location: companyDetail?.location,
          techStack: companyDetail?.techStack,
          website: companyDetail?.website,
          sosmed: item.CompanySocialMedia[0],
          teams: item?.CompanyTeam,
          totalJobs: item._count.Job,
        };

        return company;
      })
    );
  }

  return [];
};

export const parsingCategoriesToOptions = (
  data: any,
  isLoading: boolean,
  error: any,
  isIndustry?: boolean
) => {
  if (!isLoading && !error && data) {
    return data.map((item: any) => {
      return {
        id: isIndustry ? item.name : item.id,
        label: item.name,
      } as optionType;
    }) as optionType[];
  }

  return [];
};
