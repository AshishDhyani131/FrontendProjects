import SideBarList from "./SideBarList";
import { list, yourList } from "../../data";

function SideBar() {
  return (
    <aside className=" basis-[13%] ">
      <SideBarList contentList={list}></SideBarList>
      <div className="border-solid border-y w-full my-3"></div>

      <SideBarList contentList={yourList}></SideBarList>
    </aside>
  );
}

export default SideBar;
