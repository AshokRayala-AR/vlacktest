import { DesignProjectData } from "./ProjectData";
import DesignAboutList from "./DesignAboutList";
import { useTranslation } from "react-i18next";
export default function DesignHowWeDo() {
  const {t}=useTranslation()
  return (
    <div className="p-5 md:p-14 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{t(`${DesignProjectData[1].title}`)}</h1>
      <p className="text-base">{t(`${DesignProjectData[1].title}`)}</p>
      <ul className="text-base">
        {DesignProjectData[1].list.map((item, index) => {
            return <DesignAboutList item={ item} key={index}/>
        })}
      </ul>
    </div>
  );
}