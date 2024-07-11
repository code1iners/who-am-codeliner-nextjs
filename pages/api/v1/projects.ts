// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface SideProject {
  id: number;
  name: string;
  icon: string;
  skills: string[];
  url: string;
}

const sideProjects: SideProject[] = [
  {
    id: 6,
    name: "VVorkmon",
    icon: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",
    skills: ["React", "PWA", "TypeScript", "NestJS", "Graphql"],
    url: "https://vvorkmon.codeliners.cc",
  },
  {
    id: 0,
    name: "Ce1pers",
    icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
    skills: ["JavaScript", "TypeScript", "Open Source", "NPM"],
    url: "https://github.com/code1iners/ce1pers",
  },
  {
    id: 1,
    name: "BGM Factory",
    icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
    skills: ["NextJS", "TypeScript"],
    url: "https://bf.codeliners.cc",
  },
  {
    id: 5,
    name: "OOTW",
    icon: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
    skills: ["React", "PWA", "TypeScript"],
    url: "https://ootw.codeliners.cc",
  },
  {
    id: 2,
    name: "Time Stamper",
    icon: "M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5",
    skills: ["NextJS", "Progressive Web Application(PWA)", "TypeScript"],
    url: "https://time-stamper.codeliners.cc",
  },
  {
    id: 4,
    name: "Colockmon",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    skills: ["NextJS", "PWA", "TypeScript"],
    url: "https://colockmon.codeliners.cc",
  },

  // {
  //   id: 2,
  //   name: "Where is",
  //   icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
  //   skills: ["NextJS", "Typescript"],
  //   url: "https://where-is.codeliners.cc",
  // },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SideProject[]>,
) {
  res.status(200).json(sideProjects);
}
