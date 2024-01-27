import { mainBodyData } from "../../data";
import Card from "./Card";
function SectionBody() {
  return (
    <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-8">
      {mainBodyData.map((data) => {
        return <Card data={data}></Card>;
      })}
    </div>
  );
}

export default SectionBody;
