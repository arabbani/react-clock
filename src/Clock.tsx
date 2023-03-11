import { useState } from 'react';
import { useInterval } from 'usehooks-ts';

const hours = [
  {
    number: 1,
    rotation: 30,
  },
  {
    number: 2,
    rotation: 60,
  },
  {
    number: 3,
    rotation: 90,
  },
  {
    number: 4,
    rotation: 120,
  },
  {
    number: 5,
    rotation: 150,
  },
  {
    number: 6,
    rotation: 180,
  },
  {
    number: 7,
    rotation: 210,
  },
  {
    number: 8,
    rotation: 240,
  },
  {
    number: 9,
    rotation: 270,
  },
  {
    number: 10,
    rotation: 300,
  },
  {
    number: 11,
    rotation: 330,
  },
  {
    number: 12,
    rotation: 0,
  },
];

export function Clock() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useInterval(() => {
    setCurrentDate(new Date());
  }, 1000);

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-4 px-6">
      <div className="self-start font-bold text-beta-500">
        {currentDate.toLocaleString().slice(-2)}
      </div>
      <div className="relative h-56 w-56 rounded-full shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)]">
        <div className="absolute top-2/4 left-2/4 z-20 h-2 w-2 -translate-x-2/4 -translate-y-2/4 rounded-full bg-alpha-600"></div>
        {hours.map((hour) => (
          <div
            key={hour.number}
            className={`absolute h-full w-full rotate-${hour.rotation} text-center text-alpha-400`}>
            <div className={`negative-rotate-${hour.rotation}`}>
              {hour.number}
            </div>
          </div>
        ))}
        <div
          className={`absolute left-2/4 bottom-2/4 z-10 h-[25%] w-1 origin-bottom -translate-x-2/4 bg-beta-500 rotate-${
            (currentDate.getHours() % 12) * 30
          }`}></div>
        <div
          className={`absolute left-2/4 bottom-2/4 z-10 h-[34%] w-[3px] origin-bottom -translate-x-2/4 bg-gamma-900 rotate-${
            currentDate.getMinutes() * 6
          }`}></div>
        <div
          className={`absolute left-2/4 bottom-2/4 z-10 h-[39%] w-[2px] origin-bottom -translate-x-2/4 bg-delta-900 rotate-${
            currentDate.getSeconds() * 6
          }`}></div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-7xl font-bold text-beta-500">
          {currentDate.getDate()}
        </div>
        <div className="text-2xl font-bold text-gamma-900">
          {currentDate.toLocaleString('default', { month: 'long' })}
        </div>
      </div>
    </div>
  );
}
