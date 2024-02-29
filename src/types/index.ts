export type JobType = {
  image: string;
  jobType: string;
  name: string;
  type: string;
  location: string;
  description: string;
  categories: string[];
  needs: number;
	applicants: number;
	skills: string[];
};

export type optionType = {
	id: string;
	label: string;
};

export type filterFormType = {
	label: string;
	name: string;
	items: optionType[];
};

export type CompanyType = {
	// id: string;
	image: string;
	name: string;
	totalJobs: number;
	description: string;
	// website: string;
	// location: string;
	// industry: string;
	// employee: string;
	// dateFounded: Date;
	// techStack: string[];
	categories: string
	// sosmed: CompanySocmedType;
	// teams: CompanyTeamType[];
};