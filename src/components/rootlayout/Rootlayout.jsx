import { Outlet } from "react-router";
import { Sidebar } from "../sidebar/Sidebar";

export default function Rootlayout() {
  return (
    <div className="w-[100%] flex">
      <div className="w-[20%]">
        <Sidebar/>
      </div>
      <div className="w-[80%]">
        <Outlet />
      </div>
    </div>
  );
}
