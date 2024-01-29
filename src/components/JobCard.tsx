import cn from "@/utils/cn";
import Image from "next/image";
import React from "react";
import sampleImg from "@/assets/images/photosnap.svg";

type Job = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages?: string[];
  tools?: string[];
};

const JobCard = (props: Job) => {
  return (
    <div
      className={cn(
        "bg-white shadow-lg rounded md:flex justify-between w-full max-w-[950px] px-6 py-4 items-center relative mb-8",
        { "border-l-4 border-primary": props.featured }
      )}
    >
      {/* left */}
      <div className="flex gap-4 ">
        <Image
          width={100}
          height={100}
          className="h-[70px] w-[70px] absolute md:static top-[-30px] left[-20px]"
          src={props.logo}
          alt="sampleIng"
        ></Image>
        <div className="flex flex-col gap-2 pt-8">
          <div className="flex items-center text-sm gap-2">
            <p className="font-bold text-primary pr-4">{props.company}</p>
            <div className="flex items-center text-xs gap-2">
              {props.new && (
                <div className=" bg-primary text-white font-bold rounded-full px-2 py-0.5">
                  NEW!
                </div>
              )}
              {props.featured && (
                <div className=" bg-slate-800 text-white font-bold rounded-full px-2 py-0.5">
                  FEATURED
                </div>
              )}
            </div>
          </div>
          <p className=" font-bold">{props.position}</p>
          <div className="flex text-xs text-gray-600 gap-6">
            <p>{props.postedAt}</p>
            <p>{props.contract}</p>
            <p>{props.location}</p>
          </div>
        </div>
      </div>
      <hr className="md:hidden my-3 "/>
      {/* right side */}
      <div className="flex gap-3">
        {props.languages &&
          props.languages.map((languages, ind) => (
            <div className="">
              <button
                key={ind}
                className=" font-bold text-sm text-primary rounded px-2 py-0.5 bg-[hsl(180,52%,96%)]"
              >
                {languages}
              </button>
            </div>
          ))}
        {props.tools &&
          props.tools.map((tools, ind) => (
            <div className="">
              <button
                key={ind}
                className=" font-bold text-sm text-primary rounded px-2 py-0.5 bg-[hsl(180,52%,96%)]"
              >
                {tools}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default JobCard;
