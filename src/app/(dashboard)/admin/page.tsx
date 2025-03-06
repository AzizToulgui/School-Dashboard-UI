import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";
import AttendanceChart from "@/components/AttendanceChart";

const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            {/*left*/}
            <div className="w-full lg:w-2/3 flex flex-col gap-8 ">
                {/*User Card*/}
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type={"student"}/>
                    <UserCard type={"teacher"}/>
                    <UserCard type={"parent"}/>
                    <UserCard type={"staff"}/>
                </div>
                {/*Middle charts*/}
                <div className="flex gap-4 flex-col lg:flex-row ">
                    {/*Count chart*/}
                    <div className="w-full lg:w-1/3 h-[450px]">
                        <CountChart/>
                    </div>
                    {/*Attendance chart*/}
                    <div className="w-full lg:w-2/3 h-[450px]">
                        <AttendanceChart/>
                    </div>
                </div>
                {/*Bottom chart*/}
                <div className=""></div>
            </div>
            {/*Right*/}
            <div className="w-full lg:w-1/3">L</div>
        </div>
    )
}
export default AdminPage
