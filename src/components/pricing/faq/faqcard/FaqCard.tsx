import { motion } from "framer-motion";

export default function AccordionItem({
  title,
  content,
  isActive,
  onClick,
  indexCount,
}: any) {
  return (
    <motion.div
      initial={{ opacity: 1, height: "auto" }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 1, height: "auto" }}
      transition={{ duration: 1, delay: 0.2 }}
      className="border-b border-gray-200"
    >
      <div
        className="flex justify-between gap-5 items-center py-4 cursor-pointer"
        onClick={onClick}
      >
        <div className="flex gap-8 items-baseline">
          <p className="text-[#2405F2]">{`0${indexCount + 1}`}</p>
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
        <div>
          <svg
            className={`w-6 h-6 transition-transform duration-300 transform ${
              isActive ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
      {isActive && (
        <motion.p
          initial={{ opacity: 1, height: "auto" }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 1, height: "auto" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-sm pb-6 px-16"
        >
          {content}
        </motion.p>
      )}
    </motion.div>
  );
}
