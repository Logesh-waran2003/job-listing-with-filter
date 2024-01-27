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
  languages: string[];
  tools: string[];
};

const JobCard = () => {
  return (
    <div
      className={cn(
        "bg-white shadow-lg rounded flex justify-between w-full max-w-[950px] p-4 items-center border-l-4 border-primary"
      )}
    >
      {/* left */}
      <div className="flex gap-2">
        <Image src={sampleImg} alt="sampleIng"></Image>
        <div className="flex flex-col gap-2">
          <div className="flex items-center text-sm gap-2">
            <p className="font-bold text-primary">Photosnap</p>
            <div className="flex items-center text-xs gap-2">
              <div className=" bg-primary text-white font-bold rounded-full px-2 py-0.5">NEW</div>
              <div className=" bg-slate-800 text-white font-bold rounded-full px-2 py-0.5">FEATURED</div>
            </div>
          </div>
          <p className=" font-bold">SDE</p>
          <div className="flex text-xs text-gray-600 gap-6">
            <p>1day ago</p>
            <p>1day ago</p>
            <p>1day ago</p>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="">
        <button className=" font-bold text-sm text-primary rounded px-2 py-0.5 bg-[hsl(180,52%,96%)]">HTML</button>
      </div>
    </div>
  );
};

export default JobCard;
