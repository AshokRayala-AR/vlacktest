import { Data } from "./processData"
import SVGcomponent from './processsvg'


function ProcessPage() {
    return (
        <div className="p-12 flex flex-col gap-10 justify-center items-center md:p-20">

            <div className=" ">
                <h1 className="text-4xl font-bold"> The process we follow </h1>
            </div>

            <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 lg:space-x-12 md:p-12">
               {Data.map(item => {
                return (
                    <div key={item.id} className="mb-8 md:mb-0">
                        <div> <SVGcomponent   /> </div>
                        <h1 className="font-semibold font-3xl mt-2 mb-2 md:mt-4 md:mb-4">{item.title}</h1>
                        <p className="text-base ">{item.content}</p>
                    </div>
                )
               })}
            </div>

        </div>

    )
}

export default ProcessPage;