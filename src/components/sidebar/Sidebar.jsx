import { BadgeDollarSign, ChartLine, LayoutDashboard } from "lucide-react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
export function Sidebar() {
  const menuList = [
    {
      icon: <LayoutDashboard />,
      title: "Dashboard",
    },
    {
      icon: <ChartLine />,
      title: "Analytics",
    },
    {
      icon: <BadgeDollarSign />,
      title: "Sales",
    },
  ];
  return (
    <>
      <div className="bg-[#43548f] pt-5 pl-10">
        <div>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="mt-5">
          <h1 className="font-poppins text-white font-medium">Menu</h1>
          <div className="flex flex-col gap-y-4 mt-5">
            {menuList.map((item, i) => (
              <div key={i}>
                <Link className="flex items-center gap-x-3 text-[#ffffff9d] font-poppins">
                  {item.icon} <span>{item.title}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
