import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { cardVariants } from "../../../utils/scrolls/Scroll";

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

  const onSubmit = () => {
    reset();
  };
  const { t } = useTranslation();
  return (
    <motion.div className="flex flex-col gap-4 md:gap-10" 
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.1 }}>
      <motion.div className="flex flex-col justify-center items-center gap-2 p-6" variants={cardVariants}>
        <h1 className="text-3xl lg:text-5xl font-semibold mb-2">
          {t("cntct-us-ttl")}
        </h1>
        <p className="text-base text-center lg:w-2/6">{t("cntct-us-desc")}</p>
      </motion.div>

      <motion.div className="flex justify-center items-center " 
      initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.4 }}>
        <motion.div className="w-screen md:max-w-[961px] bg-[#F4F6FC] rounded-md" variants={cardVariants}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-[#000000] p-6 md:p-[77px]"
          >
            <div className="grid grid-cols-1 mb-4 sm:grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2 relative ">
                <label
                  htmlFor="name"
                  className=" text-[#000000] block text-base md:text-lg font-medium "
                >
                  {t("cntct-us-name")}
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  placeholder={t("cntct-us-name-plchldr")}
                  className="py-2  md:py-[18px] text-base placeholder-black p-2  border bg-transparent outline-none"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid rgba(0, 0, 0, 0.12)",
                  }}
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
                  className=" text-[#000000] block text-base md:text-lg font-medium text"
                >
                  {t("cntct-us-email")}
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  placeholder={t("cntct-us-email-plchldr")}
                  className=" py-2 md:py-[18px] placeholder-black p-2 border bg-transparent outline-none"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid rgba(0, 0, 0, 0.12)",
                  }}
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
                  className=" text-[#000000] block text-base md:text-lg font-medium "
                >
                  {t("cntct-us-cntxt")}
                </label>
                <input
                  {...register("context")}
                  type="text"
                  id="context"
                  placeholder={t("cntct-us-cntxt-plchldr")}
                  className="py-2 md:py-[18px] placeholder-black mt-1 p-2 border bg-transparent outline-none"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid rgba(0, 0, 0, 0.12)",
                  }}
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
                  className=" text-[#000000] block text-base md:text-lg font-medium "
                >
                  {t("cntct-us-subj")}
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  id="subject"
                  placeholder={t("cntct-us-subj-plchldr")}
                  className="py-2 md:py-[18px] placeholder-black mt-1 p-2 border bg-transparent outline-none "
                  style={{
                    borderRadius: "8px",
                    border: "1px solid rgba(0, 0, 0, 0.12)",
                  }}
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
                className=" text-[#000000] block text-base md:text-lg font-medium "
              >
                {t("cntct-us-msg")}
              </label>
              <textarea
                {...register("message")}
                id="message"
                placeholder={t("cntct-us-msg-plchldr")}
                rows={2}
                cols={20}
                className="px-[32px] py-[18px]  placeholder-black mt-1  w-full border rounded-md resize-none h-2/6 bg-transparent  outline-none"
                style={{
                  borderRadius: "8px",
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                }}
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
                className=" px-10 py-2 bg-[#282938] text-white p-2 rounded-full"
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
