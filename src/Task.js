import React from "react";
import {
  differenceInDays,
  differenceInHours,
  formatDistanceToNow,
} from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const diffInDays = differenceInDays(new Date(taskObj.deadline), new Date());

  const newDate = formatDistanceToNow(new Date(taskObj.deadline), {
    locale: tr,
    includeSecond: true,
  });

  const inToday = differenceInHours(new Date(taskObj.deadline), new Date());

  return (
    <div className="p-6 bg-white rounded-lg shadow-md mt-4">
      <h3 className="text-lg">{taskObj.title}</h3>
      <div className="text-xs pt-4">
        son teslim:
        {diffInDays < 0 && (
          <span className="inline-block px-3 py-1 rounded bg-indigo-100">
            {newDate} önce
          </span>
        )}
        {diffInDays > 0 && diffInDays < 3 && (
          <span className="inline-block px-3 py-1 rounded bg-[#ffd9d4]">
            {newDate} sonra
          </span>
        )}
        {diffInDays > 3 && (
          <span className="inline-block px-3 py-1 rounded bg-indigo-100">
            {newDate} sonra
          </span>
        )}
        {diffInDays === 0 &&
          (inToday > 0 ? (
            <span className="inline-block px-3 py-1 rounded bg-indigo-100">
              {newDate} sonra{" "}
            </span>
          ) : (
            <span className="inline-block px-3 py-1 rounded bg-indigo-100">
              {newDate} önce{" "}
            </span>
          ))}
      </div>
      <br />

      <p className="px-2 text-sm text-stone-700">{taskObj.description}</p>

      <br />

      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block px-3 py-1 rounded border border-gray-400 text-gray-700 bg-gray-100 mr-2 mb-2"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block px-3 py-2 ml-auto bg-[#fecc91] shadow-md rounded-md border-0 cursor-pointer"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
