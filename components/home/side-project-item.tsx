import { SideProject } from "@/pages/api/v1/projects";
import { motion } from "framer-motion";

interface SideProjectItemProps extends SideProject {}

export default function SideProjectItem({
  id,
  icon,
  name,
  skills,
  url,
}: SideProjectItemProps) {
  /**
   * On item click event handler.
   */
  const onItemClick = () => window.open(url, "_blank");

  return (
    <motion.div
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.9,
      }}
      key={id}
      className="shadow-md rounded-md overflow-hidden cursor-pointer"
      onClick={onItemClick}
    >
      <div className="h-44 flex justify-center items-center bg-slate-100 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="font-semibold tracking-wider">{name}</span>
        <span className="py-1 text-sm text-gray-400 text-center">
          {skills.join(", ")}
        </span>
      </div>
    </motion.div>
  );
}
