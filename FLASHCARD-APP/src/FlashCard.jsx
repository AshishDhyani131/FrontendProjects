import { useState, useEffect, useRef } from "react";

export default function FlashCard({ data }) {
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState("initial");

  const frontEl = useRef();
  const backEl = useRef();
  function handleClick() {
    setFlip((prev) => !prev);
  }
  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height;
    const backHeight = backEl.current.getBoundingClientRect().height;
    setHeight(Math.max(frontHeight, backHeight, 100));
  }
  useEffect(setMaxHeight, [data.question, data.answer, data.options]);
  useEffect(() => {
    window.addEventListener("resize", setMaxHeight);
    return () => window.removeEventListener("resize", setMaxHeight);
  });
  return (
    <div
      className={`flex justify-center items-center relative rounded shadow-sm bg-white   transformStyle ${
        flip ? "rotateY" : "rotate0"
      } duration-300
      cursor-pointer ${flip ? "rotateY" : "rotate0"} `}
      onClick={handleClick}
      style={{ height }}
    >
      <div className="absolute p-4 backfaceVisiblity mt-2" ref={frontEl}>
        {data.question}
        <div className="">
          {data.options.map((option) => {
            return (
              <div className="mt-1 text-neutral-500 text-xs " key={option}>
                {option}
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute p-4 rotateY backfaceVisiblity" ref={backEl}>
        <div className="">{data.answer}</div>
      </div>
    </div>
  );
}
