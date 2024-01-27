import Image from "next/image";
import React from "react";
import bgHeaderDesktop from "@/assets/images/bg-header-desktop.svg";
import JobCard from "@/components/JobCard";
const page = () => {
  return (
    <div className=" bg-[hsl(180,52%,96%)] min-h-screen w-full flex flex-col gap-12">
      <div className="w-full bg-[hsl(180,29%,50%)]">
        <Image src={bgHeaderDesktop} alt="bgHeaderDesktop"></Image>
      </div>
      <main className="items-center w-full h-full flex flex-col">
        <JobCard ></JobCard>
      </main>
    </div>
  );
};

export default page;
