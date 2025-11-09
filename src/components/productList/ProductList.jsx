import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import axios from "axios";
import { Eye, FilePenLine, Heart, Search, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import { BiSolidStar } from "react-icons/bi";
export default function ProductList() {
  //product data fatching ========================
  const [data, setData] = useState([]);
  async function productData() {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/product/getallproduct"
      );
      setData(data.data);
    } catch (error) {
      toast("Failed", {
        description: "Failed to fatch productData",
        style: {
          background: "#f62d47",
          color: "#ffffff",
          borderRadius: "8px",
          padding: "12px 16px",
        },
      });
      console.log(error);
    }
  }
  console.log(data, "da");

  useEffect(() => {
    productData();
  }, []);
  return (
    <>
      <Toaster position="top-center" richColors />
      <div className="border-[.5px] p-5 shadow-lg rounded-xl bg-white ">
        <div>
          <h1 className="font-poppins font-bold text-2xl border-[.5px] inline-block px-5 py-0.5 rounded-[10px] text-[#327594] mb-5">
            Product List
          </h1>
          <div className="my-1 ml-30 inline-block">
            <InputGroup>
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
              <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
            </InputGroup>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-between">
          {data.map((item) => (
            <div key={item.id}>
              <div className="overflow-hidden">
                <div className="relative group bg-[#F5F5F5] w-[270px] h-[250px] flex items-center justify-center rounded-[4px]">
                  <img
                    className="group-hover:scale-125 duration-300"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="absolute top-[12px] left-[12px] font-poppins font-normal text-[12px] leading-[18px] text-white py-[4px] px-[12px] bg-secondary rounded-[4px]">
                    -
                    {Math.round(
                      ((item.mainprice - item.offerprice) / item.mainprice) *
                        100
                    )}
                    %
                  </div>
                  <div className="w-[34px] h-[34px] rounded-full bg-white absolute right-[12px] top-[12px] flex items-center justify-center hover:bg-secondary hover:text-white duration-300">
                    <Heart />
                  </div>
                  <div className="w-[34px] h-[34px] rounded-full bg-white absolute right-[12px] top-[54px] flex items-center justify-center hover:bg-secondary hover:text-white duration-300">
                    <Eye />
                  </div>
                  <button
                    className="absolute bottom-0 w-full py-2 bg-secondary hover:bg-primary text-white 
                     transform translate-y-full opacity-0 
                     group-hover:translate-y-0 group-hover:opacity-100 
                     transition-all duration-300 cursor-pointer"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="mt-[16px]">
                <h1 className="font-poppins font-medium text-[16px] leading-[24px] text-black">
                  {item.name}
                </h1>
                <div className="mt-2 flex gap-x-3">
                  <span className="font-poppins font-medium text-[16px] leading-[24px] text-secondary">
                    ${item.offerprice}
                  </span>
                  <span className="font-poppins font-medium text-[16px] leading-[24px] text-[rgba(0,0,0,0.5)] line-through">
                    ${item.price}
                  </span>
                </div>
                <div className="mt-2 flex gap-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, index) =>
                      index < item.stars ? (
                        <BiSolidStar key={index} color="#FFAD33" />
                      ) : (
                        <BiSolidStar key={index} className="text-black/25" />
                      )
                    )}
                  </div>
                  <span className="font-poppins font-semibold text-[14px] leading-[21px] text-[rgba(0,0,0,0.5)]">
                    ({item.rating})
                  </span>
                </div>
                <div>
                  {item.colors && (
                    <div className="flex gap-2 mt-2">
                      {item.colors.map((color, i) => (
                        <div
                          key={i}
                          className="w-5 h-5 rounded-full border p-0.5 cursor-pointer"
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
