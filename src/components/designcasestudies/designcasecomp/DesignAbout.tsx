import { DesignProjectData } from "./ProjectData";
import DataAboutList from "./DesignAboutList";
export default function DesignAboutProject() {
  return (
    <div className="p-20 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{DesignProjectData[0].title}</h1>
      <p className="text-base">{DesignProjectData[0].description}</p>
      <ul className="text-base">
        {DesignProjectData[0].list.map((item, index) => {
          return <DataAboutList item={item} key={index}/>;
        })}
      </ul>
    </div>
  );
}
