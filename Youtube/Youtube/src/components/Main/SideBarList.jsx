function SideBarList({ contentList }) {
  return (
    <ul className="">
      {contentList.map((data, index) => {
        return (
          <li
            key={index}
            className={`py-3 ${
              data.isActive ? "bg-neutral-200" : ""
            }  rounded-lg hover:bg-neutral-200 duration-100 mb-2`}
          >
            <a href="#" className="flex justify-start items-center gap-3 ml-2">
              {data.SVG}
              <span className="font-semibold capitalize">{data.desc}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SideBarList;
