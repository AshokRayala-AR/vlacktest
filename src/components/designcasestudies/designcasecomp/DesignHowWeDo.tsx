import { DesignProjectData } from "./ProjectData";
import DesignAboutList from "./DesignAboutList";
export default function DesignHowWeDo() {
  return (
    <div className="p-14 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{DesignProjectData[1].title}</h1>
      <p className="text-base">{DesignProjectData[1].description}</p>
      <ul className="text-base">
        {DesignProjectData[1].list.map((item, index) => {
            return <DesignAboutList item={ item} key={index}/>
        })}
      </ul>
    </div>
  );
}