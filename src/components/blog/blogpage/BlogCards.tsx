import { BlogCardData } from "./BlogData";
import { useTranslation } from "react-i18next";
export default function BlogCard() {
  const { t } = useTranslation();
  return (
    <div className="py-8 w-full ">
      <h1 className="text-3xl font-semibold text-center pb-6">
        {t("blog-ttl")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {BlogCardData.map((item, index) => {
          return (
            <div className="flex flex-col gap-3 mb-4" key={index}>
              <img src={item.img} alt="" />
              <p className="text-sm">{ t(`${item.date}`)}</p>
              <h1 className="text-lg font-semibold">{ t(`${item.headline}`)}</h1>
              <p className="text-sm">{t(`${item.description}`)}</p>
              <a className="font-medium" href="">
                {item.readmore}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
