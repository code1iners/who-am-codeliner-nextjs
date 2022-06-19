import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useScreen } from "@ce1pers/use-window";
import ArrowButton from "@/components/arrow-button";
import SideProjectItem from "@/components/side-project-item";

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
    name: "BGM Factory",
    icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
    skills: ["NextJS", "Typescript"],
    url: "https://bf.codeliners.cc",
  },
  {
    id: 1,
    name: "Where is",
    icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
    skills: ["NextJS", "Typescript"],
    url: "https://where-is.codeliners.cc",
  },
];

export default function SideProjects() {
  const offset = 2;

  const { windowSize, subscribe, unsubscribe } = useScreen();

  const [isSliding, setIsSliding] = useState(false);
  const [projectPage, setProjectPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [hasPreviousPage, setPreviousNextPage] = useState(false);
  const [isPageDirectionRight, setIsPageDirectionRight] = useState(true);
  const [paginatedProjects, setPaginatedProjects] = useState<SideProject[]>([]);

  const rowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleIsSliding = () => setIsSliding((curr) => !curr);

  /**
   * On Mounted.
   */
  useEffect(() => {
    subscribe();

    return () => {
      unsubscribe();
    };
  }, [subscribe, unsubscribe]);

  useEffect(() => {
    if (sideProjects.length) {
      const currentPageItems = sideProjects.slice(
        projectPage * offset,
        projectPage * offset + offset
      );
      const nextPageItems = sideProjects.slice(
        (projectPage + 1) * offset,
        (projectPage + 1) * offset + offset
      );
      const previousPageItems = sideProjects.slice(
        (projectPage - 1) * offset,
        (projectPage - 1) * offset + offset
      );
      if (!nextPageItems.length) setHasNextPage(false);
      else setHasNextPage(true);

      if (!previousPageItems.length) setPreviousNextPage(false);
      else setPreviousNextPage(true);

      setPaginatedProjects(currentPageItems);
    }
  }, [sideProjects, projectPage, containerRef, rowRef]);

  useEffect(() => {
    if (containerRef.current && rowRef.current) {
      containerRef.current.style.height = `${rowRef.current.clientHeight}px`;
    }
  }, [windowSize]);

  const onProjectNextClick = async () => {
    if (isSliding) return;
    if (hasNextPage) {
      await toggleIsSliding();
      await setIsPageDirectionRight(true);
      await setProjectPage((curr) => curr + 1);
    }
  };
  const onProjectPreviousClick = async () => {
    if (isSliding) return;
    if (hasPreviousPage) {
      await toggleIsSliding();
      await setIsPageDirectionRight(false);
      await setProjectPage((curr) => curr - 1);
    }
  };

  return windowSize ? (
    <div ref={containerRef} className="relative h-full flex items-center">
      <AnimatePresence initial={false} onExitComplete={toggleIsSliding}>
        {
          <motion.div
            ref={rowRef}
            key={projectPage}
            initial={{
              x: isPageDirectionRight ? +windowSize.width : -windowSize.width,
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: isPageDirectionRight ? -windowSize.width : +windowSize.width,
            }}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
            className="grid grid-cols-2 grid-rows-1 gap-5 absolute w-full"
          >
            {paginatedProjects.map((project) => (
              <SideProjectItem key={project.id} {...project} />
            ))}
          </motion.div>
        }
      </AnimatePresence>

      {/* Next & Previous buttons */}
      <ArrowButton
        classNames="ml-2 absolute left-0"
        direction="left"
        isVisible={hasPreviousPage}
        onClick={onProjectPreviousClick}
      />
      <ArrowButton
        classNames="mr-2 absolute right-0"
        direction="right"
        isVisible={hasNextPage}
        onClick={onProjectNextClick}
      />
    </div>
  ) : null;
}
