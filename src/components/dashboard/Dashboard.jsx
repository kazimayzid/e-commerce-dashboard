import {
  BadgeDollarSign,
  BanknoteArrowDown,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";

export function Dashboard() {
  const allSummaryList = [
    {
      icon: <TrendingUp />,
      title: "Total Sales",
      num: "278",
      color: "#ff7354",
      bgColor: "#ff73541A",
    },
    {
      icon: <BadgeDollarSign />,
      title: "Daily Sales",
      num: "421",
      color: "#38a0eb",
      bgColor: "#38a0eb1A",
    },
    {
      icon: <Users />,
      title: "Daily User",
      num: "4215",
      color: "#29ab91",
      bgColor: "#29ab911A",
    },
    {
      icon: <ShoppingCart />,
      title: "Product",
      num: "548",
      color: "#41518a",
      bgColor: "#41518a1A",
    },
    {
      icon: <BanknoteArrowDown />,
      title: "Expenses",
      num: "219",
      color: "#ffb759",
      bgColor: "#ffb7591A",
    },
  ];

  const orderHistory = [
    {
      Customer: "Paul Waker",
      Date: Date.now(),
      Price: "400",
      Status: "Delivered",
      Product: "laptop",
      ProductId: "#4564549849",
    },
    {
      Customer: "Paul Waker",
      Date: Date.now(),
      Price: "400",
      Status: "Pending",
      Product: "laptop",
      ProductId: "#4564549849",
    },
    {
      Customer: "Paul Waker",
      Date: Date.now(),
      Price: "400",
      Status: "Delivered",
      Product: "laptop",
      ProductId: "#4564549849",
    },
    {
      Customer: "Paul Waker",
      Date: Date.now(),
      Price: "400",
      Status: "Pending",
      Product: "laptop",
      ProductId: "#4564549849",
    },
    {
      Customer: "Paul Waker",
      Date: Date.now(),
      Price: "400",
      Status: "Delivered",
      Product: "laptop",
      ProductId: "#4564549849",
    },
  ];
  return (
    <>
      <div>
        <div className="flex justify-between gap-x-5">
          {allSummaryList.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl py-5 px-4 flex flex-col items-center justify-center text-center shadow-sm grow-1 hover:scale-105 duration-300"
              style={{ backgroundColor: item.bgColor }}
            >
              <div
                className="w-[60px] h-[60px] flex items-center justify-center rounded-full mb-3 text-white"
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </div>
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-2xl font-bold" style={{ color: item.color }}>
                {item.num}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <div className="overflow-x-auto p-4">
            <h4 className="text-lg lg:text-xl font-bold text-gray-900 my-5">
              Orders Status :
            </h4>
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="py-3 px-4 text-left">Customer</th>
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Price</th>
                  <th className="py-3 px-4 text-left">Status</th>
                  <th className="py-3 px-4 text-left">Product</th>
                  <th className="py-3 px-4 text-left">Product ID</th>
                </tr>
              </thead>

              <tbody className="text-gray-600">
                {orderHistory.map((order, i) => (
                  <tr
                    key={i}
                    className="border-t hover:bg-gray-50 transition duration-150"
                  >
                    <td className="py-2 px-4">{order.Customer}</td>
                    <td className="py-2 px-4">
                      {new Date(order.Date).toLocaleDateString()}
                    </td>
                    <td className="py-2 px-4 font-semibold">${order.Price}</td>
                    <td
                      className={`py-2 px-4 font-medium ${
                        order.Status === "Delivered"
                          ? "text-green-600"
                          : order.Status === "Pending"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {order.Status}
                    </td>
                    <td className="py-2 px-4">{order.Product}</td>
                    <td className="py-2 px-4">{order.ProductId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
