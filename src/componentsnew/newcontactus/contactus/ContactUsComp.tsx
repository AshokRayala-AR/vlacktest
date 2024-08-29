import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { cardVariants } from "../../../utils/scrolls/Scroll";
import axios from "axios";

const schema = z.object({
  name: z.string().min(3).max(20),
  email: z.string().email(),
  context: z.string().min(10).max(100),
  subject: z
    .string()
    .min(2, { message: "must be two or more letters" })
    .max(100),
  message: z.string().min(25).max(100),
});
type FormFields = z.infer<typeof schema>;

export default function ContactUsComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormFields) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        data
      );
      console.log("Response:", response);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const { t } = useTranslation();

  return (
    <motion.div
      className="flex flex-col bg-black gap-4 pt-5 md:gap-10 main_head"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div className="flex flex-col justify-center items-center gap-2 p-6 ">
        <h1 className="text-3xl lg:text-5xl font-semibold mb-2 bg-gradient-to-r from-[#f87005] to-[#ecbe28] bg-clip-text text-transparent">
          {t("cntct-us-ttl")}
        </h1>
        <p className="text-base text-[#f87005] text-center lg:w-2/6">
          {t("cntct-us-desc")}
        </p>
      </motion.div>

      <motion.div
        className="flex justify-center items-center rounded-xl"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div
          className="w-screen md:max-w-[961px] bg-slate-300 backdrop-blur-md bg-opacity-10 rounded-xl"
          variants={cardVariants}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 text-white  md:p-[77px] rounded-xl"
          >
            <div className="grid grid-cols-1 mb-4 sm:grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2 relative">
                <label
                  htmlFor="name"
                  className="text-slate-300 block text-base md:text-lg font-medium"
                >
                  {t("cntct-us-name")}
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  placeholder={t("cntct-us-name-plchldr")}
                  className="py-2 md:py-[18px] text-base placeholder-slate-500 p-2 bg-transparent border-4 border-slate-300 border-opacity-20 rounded-lg outline-none"
                />
                {errors.name && (
                  <span className="text-xs text-red-500 absolute -bottom-[15px] left-[10px]">
                    {t("cntct-us-name-err")}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2 relative">
                <label
                  htmlFor="email"
                  className="text-slate-300 block text-base md:text-lg font-medium"
                >
                  {t("cntct-us-email")}
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  placeholder={t("cntct-us-email-plchldr")}
                  className="py-2 md:py-[18px] text-base placeholder-slate-600 p-2 bg-transparent border-4 border-slate-300 border-opacity-20 rounded-lg outline-none"
                />
                {errors.email && (
                  <span className="text-xs text-red-500 absolute -bottom-[15px] left-[10px]">
                    {t("cntct-us-email-err")}
                  </span>
                )}
              </div>
            </div>

            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2 relative">
                <label
                  htmlFor="context"
                  className="text-slate-300 block text-base md:text-lg font-medium"
                >
                  {t("cntct-us-cntxt")}
                </label>
                <input
                  {...register("context")}
                  type="text"
                  id="context"
                  placeholder={t("cntct-us-cntxt-plchldr")}
                  className="py-2 md:py-[18px] text-base placeholder-slate-600 p-2 bg-transparent border-4 border-slate-300 border-opacity-20 rounded-lg outline-none"
                />
                {errors.context && (
                  <span className="text-xs text-red-500 absolute -bottom-[15px] left-[10px]">
                    {t("cntct-us-context-err")}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2 relative">
                <label
                  htmlFor="subject"
                  className="text-slate-300 block text-base md:text-lg font-medium"
                >
                  {t("cntct-us-subj")}
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  id="subject"
                  placeholder={t("cntct-us-subj-plchldr")}
                  className="py-2 md:py-[18px] text-base placeholder-slate-600 p-2 bg-transparent border-4 border-slate-300 border-opacity-20 rounded-lg outline-none"
                />
                {errors.subject && (
                  <span className="text-xs text-red-500 absolute -bottom-[15px] left-[10px]">
                    {t("cntct-us-subject-err")}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2 relative">
              <label
                htmlFor="message"
                className="text-slate-300 block text-base md:text-lg font-medium"
              >
                {t("cntct-us-msg")}
              </label>
              <textarea
                {...register("message")}
                id="message"
                placeholder={t("cntct-us-msg-plchldr")}
                rows={2}
                cols={20}
                className="px-[32px] py-[18px] placeholder-slate-600 mt-1 w-full border-4 border-slate-300 border-opacity-20 bg-transparent rounded-lg resize-none h-2/6 outline-none"
              ></textarea>
              {errors.message && (
                <span className="text-xs text-red-500 absolute -bottom-[15px] left-[10px]">
                  {t("cntct-us-message-err")}
                </span>
              )}
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="px-10 py-2 bg-[#f87005] text-white p-2 rounded-full"
              >
                {t("cntct-us-send-btntxt")}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
