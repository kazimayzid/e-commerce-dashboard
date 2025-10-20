import { Outlet } from "react-router";
import { Sidebar } from "../sidebar/Sidebar";

export default function Rootlayout() {
  return (
    <div className="w-[100%] flex h-[97vh]">
      <div className="w-[20%]">
        <Sidebar/>
      </div>
      <div className="w-[80%] bg-[#f5feff] h-screen px-20 pt-5">
        <Outlet />
      </div>
    </div>
  );
}
