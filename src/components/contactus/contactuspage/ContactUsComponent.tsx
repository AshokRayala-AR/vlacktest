import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="flex flex-col  gap-10">
      <div className="flex flex-col justify-center items-center gap-2 ">
        <h1 className="text-5xl font-semibold mb-2">Contact Us</h1>
        <p className="text-base text-center w-2/6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>

      <div className="flex justify-center items-center ">
        <div className="w-[961px] bg-[#F4F6FC] rounded-md">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-[#000000] p-[77px]"
          >
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2 relative">
                <label
                  htmlFor="name"
                  className=" text-[#000000] block text-lg font-medium "
                >
                  Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  className="px-[32px] py-[18px] text-base placeholder-black  w-full border bg-transparent outline-none"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid rgba(0, 0, 0, 0.12)",
                  }}
                />
                {errors.name && (
                  <span className="text-xs text-red-500 absolute -bottom-[15px] left-[10px]">
                    Name is required
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2 relative">
                <label
                  htmlFor="email"
                  className=" text-[#000000] block text-lg font-medium text"
                >
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className=" px-[32px] py-[18px] placeholder-black w-full border bg-transparent outline-none"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid rgba(0, 0, 0, 0.12)",
                  }}
                />
                {errors.email && (
                  <span className="text-xs text-red-500 absolute -bottom-[15px] left-[10px]">
                    Valid email is required
                  </span>
                )}
              </div>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2 relative">
                <label
                  htmlFor="context"
                  className=" text-[#000000] block text-lg font-medium "
                >
                  Context
                </label>
                <input
                  {...register("context")}
                  type="text"
                  id="context"
                  placeholder="Provide Context"
                  className="px-[32px] py-[18px] placeholder-black mt-1  w-full border bg-transparent outline-none"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid rgba(0, 0, 0, 0.12)",
                  }}
                />
                {errors.context && (
                  <span className="text-xs text-red-500 absolute -bottom-[15px] left-[10px]">
                    context is required to be atleast 10 letters
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2 relative">
                <label
                  htmlFor="subject"
                  className=" text-[#000000] block text-lg font-medium "
                >
                  Subject
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  id="subject"
                  placeholder="Select Subject"
                  className="px-[32px] py-[18px] placeholder-black mt-1 w-full border bg-transparent outline-none "
                  style={{
                    borderRadius: "8px",
                    border: "1px solid rgba(0, 0, 0, 0.12)",
                  }}
                />
                {errors.subject && (
                  <span className="text-xs text-red-500 absolute -bottom-[15px] left-[10px]">
                    subject is must be atleast 2 letters
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2 relative">
              <label
                htmlFor="message"
                className=" text-[#000000] block text-lg font-medium "
              >
                Message
              </label>
              <textarea
                {...register("message")}
                id="message"
                placeholder="Write your question here"
                rows="3"
                cols="20"
                className="px-[32px] py-[18px]  placeholder-black mt-1  w-full border rounded-md resize-none h-2/6 bg-transparent  outline-none"
                style={{
                  borderRadius: "8px",
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                }}
              ></textarea>
              {errors.message && (
                <span className="text-xs text-red-500 absolute -bottom-[15px] left-[10px]">
                  Message must be greater than 20 letters
                </span>
              )}
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className=" px-10 py-2 bg-[#282938] text-white p-2 rounded-full"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>{" "}
      </div>
    </div>
  );
}
