import LeftNav from "./LeftNav";
import InputBar from "./InputBar";
import RightNav from "./RightNav";
function Header() {
  return (
    <div className="flex justify-between">
      <LeftNav></LeftNav>
      <InputBar></InputBar>
      <RightNav></RightNav>
    </div>
  );
}

export default Header;
