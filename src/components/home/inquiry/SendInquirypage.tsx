import { zodResolver } from "@hookform/resolvers/zod";
import inquiryimage from "../../../assets/images/inquiryimage.jpeg"
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object( {
    Name: z.string().min(3),
    email: z.string().email(),
    url: z.string().url(),
});

type FormFields = z.infer<typeof schema> 


function SendInquiryPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({resolver: zodResolver(schema)});

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data);
    }
    


    return (
        <div className="p-28 text-white">
    <div className="h-screen w-full flex items-center justify-center" style={{ backgroundImage: `url(${inquiryimage})` }}>
        <div className="imgb hidden md:block w-3/6 h-full bg-blue-800 px-24 bg-opacity-30 flex flex-col gap-6 items-center justify-center">
            <h1 className="text-5xl font-semibold leading-[66px]">Building stellar websites for early startups</h1>
            <p className="text-base font-medium leading-[26px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
        </div>

        <div className="w-3/6 h-full bg-[#1C1E53] flex flex-col justify-center items-center gap-2 p-2">
            <div className="text-left flex flex-col gap-4">
                <h1 className="text-3xl font-large">Send inquiry</h1>
                <p className="text-base font-normal font-medium w-[432px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 w-[432px]">
                <div className="flex flex-col gap-8 mt-4">
                    <div className="relative">
                        <input {...register("Name")} type="text" placeholder="Your Name" className="rounded-lg bg-transparent p-4 border border-white border-opacity-5 outline-none w-full" />
                        {errors.Name && <p className="text-red-500 absolute">{errors.Name?.message}</p>}
                    </div>
                    <div className="relative">
                        <input {...register("email")} type="email" placeholder="Email" className="rounded-lg bg-transparent p-4 border border-white border-opacity-5 outline-none w-full" />
                        {errors.email && <p className="text-red-500 absolute">{errors.email?.message}</p>}
                    </div>
                    <div className="relative">
                        <input {...register("url")} type="text" placeholder="Paste Your Figma Design URL" className="rounded-lg bg-transparent p-4 border border-white border-opacity-5 outline-none w-full" />
                        {errors.url && <p className="text-red-500 absolute">{errors.url?.message}</p>}
                    </div>
                </div>
                <div className="flex flex-col items-center gap-6 mt-2">
                    <button type="submit" className="bg-[#FCD980] text-black p-2 rounded-full w-full">
                        Send an Inquiry
                    </button>
                    <a href="#" className="text-white">
                        Get in touch with us &#8594;
                    </a>
                </div>
            </form>
        </div>
    </div>
</div>

    )
}

export default SendInquiryPage;