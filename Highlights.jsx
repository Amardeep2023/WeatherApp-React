import React from "react";

function Highlights({stats}) {
  return <>
  <div className="bg-slate-600 text-slate-200 flex flex-col justify-start p-3 mt-0 text-transform scale-100 hover:scale-110 duration-300 ease-in-out">
    <h2 className="text-sm font-semibold mt-1">{stats.title}</h2>
    <div className="mt-2 text-slate-200">
      <span className="text-2xl font-semibold">{stats.value}</span>
      <span className="text-xl">{stats.unit}</span>
      
      {stats.direction ? (
        <div className="ms-4 gap-2 flex mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
          <div>{stats.direction}</div>
        </div>
      ) : (null)
      
      }

      {
        stats.title=='Humidity'?

        ( <div className="mt-3 flex w-full h-3 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
          <div className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap dark:bg-blue-500 transition duration-500" style={{ width: `${stats.value}%` }}>
       
          </div>
        </div>):null

       
}
    </div>
  </div>
</>

}


export default Highlights;
