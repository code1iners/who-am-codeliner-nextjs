import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { makeCalendar, getPassedTime } from "@ce1pers/date-helpers";
import { CalendarDateItem } from "@ce1pers/date-helpers/dist/src/calendar-helpers/types";
import { GetPassedTimeOutputs } from "@ce1pers/date-helpers/dist/src/shared/types";
import MainContainer from "@/components/layouts/main-container";
import { clazz } from "@ce1pers/use-class";

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let intervalId: number | undefined = undefined;

export default function SampleCalendars() {
  const [calendar, setCalendar] = useState<CalendarDateItem[]>([]);
  const [date, setDate] = useState<number>();
  const [month, setMonth] = useState<number>();
  const [passed, setPassed] = useState<GetPassedTimeOutputs | null>();
  const now = new Date();

  useEffect(() => {
    setDate(now.getDate());
    setMonth(now.getMonth() + 1);

    intervalId = window.setInterval(() => {
      setPassed(getPassedTime(now));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const now = new Date();

    if (month) setCalendar(makeCalendar(now.getFullYear(), month));

    setDate((prev) => prev ?? undefined);
  }, [month]);

  const onDateClick = (date: CalendarDateItem) => {
    setDate(date.date);
    setMonth(date.month);
  };

  const currentDateAsString = () => {
    const __year__ = String(now.getFullYear());
    const __month__ = String(month).padStart(2, "0") ?? "?";
    const __date__ = String(date).padStart(2, "0") ?? "?";
    return `${__year__}/${__month__}/${__date__}`;
  };

  return (
    <MainContainer className="h-full">
      <main
        id="calendar-container"
        className="h-full flex flex-col gap-10 justify-center items-center"
      >
        <motion.a
          href="https://github.com/code1iners/ce1pers/tree/main/date-helpers"
          target="_blank"
          rel="noreferrer"
          className="text-3xl capitalize text-indigo-500 underline underline-offset-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          hello date helpers
        </motion.a>

        <article className="flex flex-col items-center justify-center gap-10 tracking-wider">
          {passed ? (
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span>{passed.time}</span>
              <span>{passed.unit}</span>
              <span>passed..</span>
            </div>
          ) : null}

          <div className="flex items-center gap-3 text-2xl">
            <span>{currentDateAsString()}</span>
          </div>
        </article>

        <article className="flex flex-col items-center gap-5">
          <h3 className="text-2xl capitalize">month</h3>
          <ul className="grid grid-cols-6 gap-3 text-gray-500">
            {months.map((eachMonth) => (
              <li
                key={eachMonth}
                className={clazz(
                  "text-center cursor-pointer",
                  month === eachMonth
                    ? "text-violet-500 underline underline-offset-4"
                    : ""
                )}
                onClick={() => setMonth(eachMonth)}
              >
                {eachMonth}
              </li>
            ))}
          </ul>
        </article>

        <article className="flex flex-col items-center gap-5">
          <h3 className="text-2xl capitalize">date</h3>
          <ul className="grid grid-cols-7 gap-5">
            {calendar.map((eachDate) => (
              <li
                className={clazz(
                  "cursor-pointer text-center",
                  eachDate.month !== month ? "text-gray-500" : "",
                  eachDate.month === month && eachDate.date === date
                    ? "text-violet-500 underline underline-offset-4"
                    : ""
                )}
                key={eachDate.key}
                onClick={() => onDateClick(eachDate)}
              >
                {eachDate.date}
              </li>
            ))}
          </ul>
        </article>
      </main>
    </MainContainer>
  );
}
