import DesignListDot from "./DesignListDot";

export default function DesignAboutList({ item }: any) {
  return (
    <div className="flex gap-4 items-center">
      <DesignListDot />
      <li className="leading-10">{item}</li>
    </div>
  );
}
