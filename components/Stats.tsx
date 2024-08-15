"use client";
import CountUp from "react-countup";
const stats = [
  {
    title: "Years of Experience",
    count: 1,
  },
  {
    title: "Projects Completed",
    count: 100,
  },
  {
    title: "Technologies Mastered",
    count: 50,
  },
  {
    title: "Code commits",
    count: 40,
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80px] mx-auto xl:max-w-none ">
          {" "}
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={item.count}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <span
                  className={`${
                    item.title.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  }`}
                >
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
