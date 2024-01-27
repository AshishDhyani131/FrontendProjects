function Card({ data }) {
  return (
    <a href="#" class="group">
      <div class="rounded-xl overflow-hidden hover:rounded-none duration-300">
        <img src={data.img} alt="image" className="h-60 w-full object-cover" />
      </div>
      <div class="flex gap-4 mt-4 mr-2">
        <img
          src={data.person}
          alt="person"
          className="h-8 w-8 rounded-full object-cover"
        />
        <div className="">
          <div className="flex justify-between">
            <h3 className="font-semibold">{data.title}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 self-start opacity-0 group-hover:opacity-100 duration-150"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
              />
            </svg>
          </div>
          <p className="mt-2 text-neutral-600">{data.name}</p>
          <p className="mt-1 text-neutral-600">
            {data.views} views <span>{data.time}</span>
          </p>
        </div>
      </div>
    </a>
  );
}

export default Card;
