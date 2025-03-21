import Image from "next/image";
import BigCalendar from "@/components/BigCalender";
import Announcements from "@/components/Announcements";
import Link from "next/link";
import Performance from "@/components/Performance";

const SingleStudentPage = () => {
    return (
        <div className="flex-1 p-4 gap-4 flex flex-col xl:flex-row">
            {/*Left*/}
            <div className="w-full xl:w-2/3">
                {/*Top*/}
                <div className="flex flex-col lg:flex-row gap-4">
                    {/*User Info Card*/}
                    <div className="bg-dashSky py-6 px-4 rounded-md flex-1 flex gap-4 ">
                        <div className="w-1/3 ">
                            <Image src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="professor image" width={144} height={144} className="w-36 h-36 rounded-full object-cover"/>
                        </div>
                        <div className="w-2/3 flex flex-col justify-between gap-4  ">
                            <h1 className="text-xl font-semibold ">Cameron Moran</h1>
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
                    <div className="flex-1 flex gap-4 justify-between flex-wrap ">
                        {/*Card 1*/}
                        <div className="bg-white w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[47%] ">
                            <Image src="/singleAttendance.png" alt="" width={24} height={24} className="w-6 h-6 "/>
                            <div className="">
                                <h1 className="text-xl font-semibold">90%</h1>
                                <span className="text-sm text-gray-400">Attendance</span>
                            </div>
                        </div>
                        {/*Card 2*/}
                        <div className="bg-white w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[47%]">
                            <Image src="/singleBranch.png" alt="" width={24} height={24} className="w-6 h-6 "/>
                            <div className="">
                                <h1 className="text-xl font-semibold">6th</h1>
                                <span className="text-sm text-gray-400">Grade</span>
                            </div>
                        </div>
                        {/*Card 3*/}
                        <div className="bg-white w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[47%]">
                            <Image src="/singleLesson.png" alt="" width={24} height={24} className="w-6 h-6 "/>
                            <div className="">
                                <h1 className="text-xl font-semibold">18</h1>
                                <span className="text-sm text-gray-400">Lessons</span>
                            </div>
                        </div>
                        {/*Card 4*/}
                        <div className="bg-white w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[47%]">
                            <Image src="/singleClass.png" alt="" width={24} height={24} className="w-6 h-6 "/>
                            <div className="">
                                <h1 className="text-xl font-semibold">6B</h1>
                                <span className="text-sm text-gray-400">Class</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Bottom*/}
                <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
                    <h1 className="text-xl font-semibold">Student&apos;s Schedule</h1>
                    <BigCalendar/>
                </div>
            </div>
            {/*Right*/}
            <div className="w-full xl:w-1/3 flex flex-col gap-4 ">
                <div className="bg-white p-4 rounded-md ">
                    <h1 className="text-xl font-semibold">Shortcuts</h1>
                    <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500 ">
                        <Link href="/" className="p-3 rounded-md bg-dashSkyLight">Student&apos;s Lessons</Link>
                        <Link href="/" className="p-3 rounded-md bg-dashPurpleLight">Student&apos;s Teachers</Link>
                        <Link href="/" className="p-3 rounded-md bg-pink-50">Student&apos;s Exams</Link>
                        <Link href="/" className="p-3 rounded-md bg-dashSkyLight">Student&apos;s Assignments</Link>
                        <Link href="/" className="p-3 rounded-md bg-dashYellowLight">Student&apos;s Results</Link>
                    </div>
                </div>
                <Performance/>
                <Announcements/>
            </div>
        </div>
    )
}
export default SingleStudentPage