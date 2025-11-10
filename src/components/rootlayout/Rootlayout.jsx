import { Outlet } from "react-router";
import { Sidebar } from "../sidebar/Sidebar";

export default function Rootlayout() {
  return (
    <div className="w-[100%] flex  w-full">
      <div className="w-[20%] h-screen fixed top-0 left-0 ">
        <Sidebar/>
      </div>
      <div className="ml-[20%] w-[80%] bg-[#f5feff] h-screen  px-20 pt-5">
        <Outlet />
      </div>
    </div>
  );
}
