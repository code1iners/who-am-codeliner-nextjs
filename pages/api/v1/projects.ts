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
    id: 0,
    name: "Ce1pers",
    icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
    skills: ["JavaScript", "TypeScript", "NPM"],
    url: "https://github.com/code1iners/ce1pers",
  },
  {
    id: 3,
    name: "Co Pass",
    icon: "M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z",
    skills: ["NextJS", "PWA", "TypeScript", "NestJS", "GraphQL"],
    url: "https://copass.codeliners.cc",
  },
  {
    id: 1,
    name: "BGM Factory",
    icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
    skills: ["NextJS", "TypeScript"],
    url: "https://bf.codeliners.cc",
  },
  {
    id: 2,
    name: "Time Stamper",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    skills: ["NextJS", "Progressive Web Application(PWA)", "TypeScript"],
    url: "https://time-stamper.codeliners.cc",
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
  res: NextApiResponse<SideProject[]>
) {
  res.status(200).json(sideProjects);
}
