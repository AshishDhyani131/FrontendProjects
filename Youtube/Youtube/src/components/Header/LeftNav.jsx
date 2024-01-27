function LeftNav() {
  return (
    <nav className="flex items-center gap-3">
      <span className="relative w-10 h-10 inline-block rounded-full  hover:bg-neutral-300 duration-75 cursor-pointer">
        <div className="absolute w-5 border border-solid border-black rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-[0.4rem] "></div>
        <div className="absolute w-5 border border-solid border-black rounded-full top-1/2 left-1/2 -translate-x-1/2 "></div>
        <div className="absolute w-5 border border-solid border-black rounded-full top-1/2 left-1/2 -translate-x-1/2 translate-y-[0.4rem] "></div>
      </span>
      <a href="#" className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="w-8 h-8 fill-red-500"
          fill=""
        >
          <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
        </svg>
        <p className="scale-y-125 font-bold tracking-tighter ">YouTube</p>
      </a>
    </nav>
  );
}

export default LeftNav;
