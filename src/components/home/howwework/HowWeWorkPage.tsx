import {data} from './HowWeWorkData.tsx';

export default function HowWeWorkPage () {

     return (
        <div className="mainpage bg-customwhite h-screen space-x-4  flex justify-center items-center">
            <div className=" flex justify-center items-start gap-8">
            <div className=" w-2/6 text-left ">

                <h1 className="font-bold text-3xl p-2">how we work</h1>
                <p className="p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis exercitationem laboriosam corporis nemo fugiat autem?</p>
                <a href = "#"  className=" text-customblue p-2 ">get in touch with us &#8594; </a>

            </div>
            <div className=" w-3/6 gap-y-4 grid grid-cols-2 ">
                {data.map(item => (
                    <div key={item.id} className="text-left  " >
                        <h1 className="text-2xl p-2">{item.id}</h1>
                        <h2 className="text-2xl font-medium p-2">{item.title}</h2>
                        <p className="text-balance p-2">{item.content}</p>
                        </div>
                )) }
            </div>
            </div>
        </div>
     )
}
// export default HowWeWorkPage;
