import Image from "next/image";
import React from "react";
import bgHeaderDesktop from "@/assets/images/bg-header-desktop.svg";
import bgHeaderMobile from "@/assets/images/bg-header-mobile.svg";
import { IoCloseSharp } from "react-icons/io5";

import JobCard from "@/components/JobCard";
import data from "@/assets/data.json";

const page = () => {
  return (
    <div className=" bg-[hsl(180,52%,96%)] min-h-screen w-full flex flex-col gap-12">
      <div className="w-full bg-[hsl(180,29%,50%)]">
        <Image
          className="w-full md:hidden "
          src={bgHeaderMobile}
          alt="bg-header-mobile"
        />
        <Image
          className="w-full hidden md:flex"
          src={bgHeaderDesktop}
          alt="bg-header-desktop"
        />
      </div>
      <main className="items-center w-full h-full flex flex-col gap-5 px-6 border mx-auto">
        <div className="w-full bg-white shadow-lg py-4 px-6">
          <button
            // key={ind}
            className="flex items-center"
          >
            <p className=" font-bold text-sm text-primary rounded px-2 py-0.5 bg-[hsl(180,52%,96%)] ">
              Frontend
            </p>
            <div className=" bg-primary text-white hover:bg-slate-800">
              <IoCloseSharp />
            </div>
          </button>
        </div>
        {data.map((data, ind) => (
          <JobCard key={ind} {...data} />
        ))}
      </main>
    </div>
  );
};

export default page;
