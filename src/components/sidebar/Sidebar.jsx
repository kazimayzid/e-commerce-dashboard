import {
  BadgeDollarSign,
  Bell,
  ChartLine,
  ClipboardMinus,
  CornerDownRight,
  LayoutDashboard,
  LayoutList,
  ShoppingCart,
  Users,
  Warehouse,
} from "lucide-react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
import SubCategory from "../subCategory/SubCategory";

export function Sidebar() {
  const menuList = [
    {
      icon: <LayoutDashboard />,
      title: "Dashboard",
    },
    {
      icon: <ChartLine />,
      title: "Analytics",
      path: "analytics",
    },
    {
      icon: <BadgeDollarSign />,
      title: "Sales",
      path: "sales",
    },
  ];

  const managementList = [
    {
      icon: <LayoutList />,
      title: "Category",
      path: "category",
    },
    {
      icon: <CornerDownRight />,
      title: "SubCategory",
      path: "subcategory",
    },
    {
      icon: <ShoppingCart />,
      title: "Products",
    },
    {
      icon: <Users />,
      title: "Customer",
    },
    {
      icon: <Warehouse />,
      title: "Warehouse",
    },
    {
      icon: <ClipboardMinus />,
      title: "Reports",
    },
  ];
  return (
    <>
      <div className="bg-[#327594] pt-5 h-screen">
        <div className="pl-5">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="mt-5">
          <h1 className="font-poppins text-white font-medium pl-5">Menu</h1>
          <div className="flex flex-col gap-y-2 mt-5 pl-3">
            {menuList.map((item, i) => (
              <div key={i} className="">
                <Link
                  to={item.path}
                  className="flex items-center gap-x-3 text-[#ffffff9d] font-poppins hover:text-white hover:bg-[#ffffff10] py-2 px-2 rounded-[6px] mr-3 duration-200"
                >
                  {item.icon} <span>{item.title}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <h1 className="font-poppins text-white font-medium pl-5">
            Management
          </h1>
          <div className="flex flex-col gap-y-2 mt-5 pl-3">
            {managementList.map((item, i) => (
              <div key={i} className="">
                <Link
                  to={item.path}
                  className="flex items-center gap-x-3 text-[#ffffff9d] font-poppins hover:text-white hover:bg-[#ffffff10] py-2 px-2 rounded-[6px] mr-3 duration-200"
                >
                  {item.icon} <span>{item.title}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 pl-3">
          <Link className="font-poppins text-white font-medium flex gap-x-3 hover:text-white hover:bg-[#ffffff10] py-2 px-2 rounded-[6px] mr-3 duration-200">
            {" "}
            <Bell />
            Notifications
          </Link>
        </div>
      </div>
    </>
  );
}
