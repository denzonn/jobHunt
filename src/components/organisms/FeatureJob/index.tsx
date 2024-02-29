import TitleSection from "@/components/atoms/TitleSection";
import React, { FC } from "react";
import JobItem from "./JobItem";

interface FeatureJobProps {}

const FeatureJob: FC<FeatureJobProps> = () => {
  return (
    <div className="mt-32 mb-10">
      <TitleSection word1="Featured" word2="jobs" />
      <div className="grid grid-cols-4 gap-8 mt-12">
        {[0, 1, 2].map((item: number, index: number) => (
          <JobItem
            key={index}
            image="/images/company.png"
            jobType="Full Time"
            name="Email Marketing"
            type="Agency"
            location="Paris, France"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat natus soluta suscipit, officiis nam perspiciatis. Adipisci ipsum ea iusto sequi eius minus dolorem soluta tenetur culpa obcaecati non, tempora earum!"
            categories={["Marketing", "Design"]}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureJob;
