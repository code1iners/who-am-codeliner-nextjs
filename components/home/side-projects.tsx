import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useSWR from "swr";
import { useScreen } from "@ce1pers/use-window";
import { SideProject } from "@/pages/api/v1/projects";
import ArrowButton from "@/components/commons/arrow-button";
import SideProjectItem from "@/components/home/side-project-item";

export default function SideProjects() {
  const { data: sideProjects } = useSWR("/api/v1/projects");

  const { windowSize, subscribe, unsubscribe } = useScreen();

  const [isSliding, setIsSliding] = useState(false);
  const [projectPage, setProjectPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [hasPreviousPage, setPreviousNextPage] = useState(false);
  const [isPageDirectionRight, setIsPageDirectionRight] = useState(true);
  const [paginatedProjects, setPaginatedProjects] = useState<SideProject[]>([]);
  const offset = 2;

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
    if (sideProjects?.length) {
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
