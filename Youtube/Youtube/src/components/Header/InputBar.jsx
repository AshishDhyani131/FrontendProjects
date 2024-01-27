function InputBar() {
  return (
    <div className="flex justify-center items-center gap-3 basis-4/5">
      <form className="flex justify-center items-center basis-1/2 ">
        <input
          type="search"
          name="searchBar"
          id="searchBar"
          className="border-solid border-y border-s border-neutral-500 rounded-s-full p-2 pb-[0.45rem] ps-4 shadow-inset focus:outline-none focus:border-blue-400 basis-full"
          placeholder="Search"
        />

        <button
          type="button"
          className="border-solid border-y border-e border-s border-neutral-500  rounded-e-full  py-[0.42rem]   px-5 bg-neutral-200 shadow-inset hover:bg-neutral-300 duration-75"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 stroke-[0.8px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </form>
      <button className="rounded-full p-2 bg-neutral-200 hover:bg-neutral-300 duration-75">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 "
        >
          <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
          <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
        </svg>
      </button>
    </div>
  );
}

export default InputBar;
