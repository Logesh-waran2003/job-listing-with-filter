"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import bgHeaderDesktop from "@/assets/images/bg-header-desktop.svg";
import bgHeaderMobile from "@/assets/images/bg-header-mobile.svg";
import { IoCloseSharp } from "react-icons/io5";
import JobCard, { Job } from "@/components/JobCard";
import data from "@/assets/data.json";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const page = () => {
  const [activeTags, setActiveTags] = React.useState<String[]>([]);
  const [filteredData, setFilteredData] = useState<Job[]>(data);
  const [animationParent] = useAutoAnimate();

  useEffect(() => {
    const newFilteredData =
      activeTags.length > 0
        ? data.filter(
            (data) =>
              data.languages.some((language) =>
                activeTags.includes(language)
              ) || data.tools.some((tool) => activeTags.includes(tool))
          )
        : data;
    setFilteredData(newFilteredData);
  }, [activeTags]);

  const handleClick = (tag: String) => {
    if (!activeTags.includes(tag)) {
      setActiveTags([...activeTags, tag]);
    } else {
      setActiveTags(activeTags.filter((t) => t !== tag));
    }
  };

  function handleClear() {
    setActiveTags([]);
  }

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
      <main
        ref={animationParent}
        className="items-center w-full h-full flex flex-col gap-10 md:gap-5 mx-auto max-w-[950px] relative"
      >
        {/* filter */}
        {activeTags.length > 0 && (
          <div className="w-full bg-white shadow-lg py-4 px-6 rounded-md absolute top-[-80px] flex justify-between">
            <div className="flex gap-4 overflow-hidden">
              {activeTags.map((tag, ind) => (
                <button
                  onClick={() => handleClick(tag)}
                  className="flex items-center rounded overflow-hidden"
                >
                  <p className=" font-bold text-sm text-primary rounded px-2 py-0.5 bg-[hsl(180,52%,96%)] ">
                    {tag}
                  </p>
                  <div className=" bg-primary text-white hover:bg-slate-800 px-2 py-1">
                    <IoCloseSharp />
                  </div>
                </button>
              ))}
            </div>
            <button
              onClick={handleClear}
              className=" text-sm text-grey-500 font-semibold hover:text-primary hover:underline"
            >
              Clear
            </button>
          </div>
        )}

        {filteredData.map((data, ind) => (
          <JobCard handleClick={handleClick} key={ind} {...data} />
        ))}
      </main>
    </div>
  );
};

export default page;
