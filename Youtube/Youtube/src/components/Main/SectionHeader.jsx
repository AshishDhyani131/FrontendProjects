function SectionHeader({ headerList }) {
  return (
    <div className="flex justify-between">
      <ul className="flex gap-3">
        {headerList.map((data, index) => {
          return (
            <li
              key={index}
              className={`py-2 px-3 rounded-lg ${
                data.isActive
                  ? "bg-black text-white"
                  : "bg-neutral-200 text-black"
              } font-semibold text-sm hover:bg-neutral-300 duration-100 capitalize`}
            >
              <a href="#">{data.desc}</a>
            </li>
          );
        })}
      </ul>
      <button className="rounded-full p-2  hover:bg-neutral-300 duration-75">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}

export default SectionHeader;
