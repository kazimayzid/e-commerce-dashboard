import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import axios from "axios";
import { FilePenLine, Search, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
export default function GetAllCategories() {
  //   SubCategories data fatching sections =============================
  const [subCategoriesData, setSubCategoriesData] = useState([])
  const subCategoriesFatching =async () => {
    try {

      const {data} =  await axios.get("http://localhost:3000/api/v1/subcategory/getallsubcategory")
         setSubCategoriesData(data.data)
    } catch (error) {
      toast("Fatching failed", {
        description: "Failed to Fatching all subcategories data from DB",
        style: {
          background: "#f62d47",
          color: "#ffffff",
          borderRadius: "8px",
          padding: "12px 16px",
        },
      });
      console.log(error);
    }
  };

  useEffect (() => {
    subCategoriesFatching()
  }, [])
console.log(subCategoriesData);

  return (
    <>
      <Toaster position="top-center" richColors />
      <div className="mt-20">
        <div className="overflow-x-auto p-4">
          <h1 className="font-poppins font-bold text-2xl border-[.5px] inline-block px-5 py-0.5 rounded-[10px] text-[#327594] mb-5">
            Category List
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
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-3 px-4 text-left">Sr.</th>
                <th className="py-3 px-4 text-left">CategoryName</th>
                <th className="py-3 px-4 text-left">Description</th>
                <th className="py-3 px-4 text-left">SubCategory</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Category ID</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody className="text-gray-600">
              {subCategoriesData.map((item, index) => (
                <tr
                  key={item._id}
                  className="border-t hover:bg-gray-50 transition duration-150 "
                >
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{item.name}</td>
                  <td className="py-2 px-4">{item.description}</td>
                  <td className="py-2 px-4 font-semibold">
                    {
                        item.category.map((data) =>(
                             <td className="py-2 px-4">{data.name}</td>
                        ))
                    }
                  </td>

                  <td className="py-2 px-4">{item.Date}</td>
                  <td className="py-2 px-4">{item._id}</td>
                  <td className="px-4 ">
                    <div className="flex gap-x-5 items-center ">
                      <FilePenLine
                        // onClick={() => updateHandler(item)}
                        size={30}
                        className="text-green-500 cursor-pointer border-[.5px] rounded-[6px] p-1 hover:bg-green-500 hover:text-white duration-300"
                      />

                      <Trash2
                        // onClick={() => deleteHandler(item._id)}
                        size={30}
                        className="text-red-500 cursor-pointer border-[.5px] rounded-[6px] p-1 hover:bg-red-500 hover:text-white duration-300"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
