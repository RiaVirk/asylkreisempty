"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const statsData = [
  {
    endCountNum: 945,
    endCountText: "+",
    text: "Personen unterstützt",
  },
  {
    endCountNum: 43,
    endCountText: "+",
    text: "Projekte",
  },
  {
    endCountNum: 865,
    endCountText: "+",
    text: "Aktivitäten",
  },
  {
    endCountNum: 80,
    endCountText: "+",
    text: "Mitglieder",
  },
  {
    endCountNum: 11,
    endCountText: "+",
    text: "Jahre aktiv",
  },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { treshold: 0.2 });

  return (
    <div
      ref={ref}
      className="mt-16 xl:mt-32 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-10 w-full"
    >
      <div className="container mx-auto h-full ">
        <div className="text-white flex flex-col items-center justify-between xl:flex-row h-full gap-12 text-center xl:text-left">
          {statsData.map((item, index) => {
            return (
              <div className="w-full" key={index}>
                <div className="text-5xl font-semibold">
                  {inView && (
                    <CountUp
                      start={0}
                      end={item.endCountNum}
                      delay={0.5}
                      duration={3}
                    />
                  )}
                  <span>{item.endCountText}</span>
                </div>
                <p>{item.text}</p>
              </div>
            );
          })}{" "}
        </div>
      </div>
    </div>
  );
};

export default Stats;
