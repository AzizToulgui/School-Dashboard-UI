import Image from "next/image";

const SingleTeacherPage = () => {
    return (
        <div className="flex-1 p-4 gap-4 flex flex-col xl:flex-row">
            {/*Left*/}
            <div className="w-full xl:w-2/3">
                {/*Top*/}
                <div className="flex flex-col lg:flex-row gap-4">
                    {/*User Info Card*/}
                    <div className="bg-dashSky py-6 px-4 rounded-md flex-1 flex gap-4 ">
                        <div className="w-1/3 ">
                            <Image src="https://images.pexels.com/photos/3772712/pexels-photo-3772712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="professor image" width={144} height={144} className="w-36 h-36 rounded-full object-cover"/>
                        </div>
                        <div className="w-2/3 flex flex-col justify-between gap-4  ">
                            <h1 className="text-xl font-semibold ">Leonard Synder</h1>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, reprehenderit.</p>
                            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium ">
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2 ">
                                    <Image src="/blood.png" alt="" width={14} height={14}/>
                                    <span className="">A+</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2 ">
                                    <Image src="/date.png" alt="" width={14} height={14}/>
                                    <span className="">May 2025</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2 ">
                                    <Image src="/mail.png" alt="" width={14} height={14}/>
                                    <span className="">user@gmail.com</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2 ">
                                    <Image src="/phone.png" alt="" width={14} height={14}/>
                                    <span className="">+216 25 783 283</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Small Cards*/}
                    <div className="flex-1 ">

                    </div>
                </div>
                {/*Bottom*/}
                <div className="">
                    Schedule
                </div>
            </div>
            {/*Right*/}
            <div className="w-full xl:w-1/3">R</div>
        </div>
    )
}
export default SingleTeacherPage


                                            /*2:38:28*/