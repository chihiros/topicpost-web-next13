import React from "react";
import Link from "next/link";
import Twemoji from "@/components/atoms/Twemoji";

export type SidebarProps = {
  icon: string;
  label: string;
  link: string;
};

export const Label: React.FC<SidebarProps> = ({ icon, label, link }) => {
  return (
    <ul className="">
      <Link href={link}>
        <li className="flex p-3 h-17 border-b-2 hover:bg-gray-100 items-center">
          <Twemoji icon={icon} />
          <span className="ml-4 text-lg text-gray-500 font-semibold">{label}</span>
        </li>
      </Link>
    </ul>
  );
}
