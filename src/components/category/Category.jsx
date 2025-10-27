import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { FilePenLine, Search, Trash2 } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React, { useEffect, useState } from "react";
export default function Category() {
  //  Category creating ============================================

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  //  console.log(form, "data");

  const onSubmit = async (data) => {
    try {
      await axios.post(
        "http://localhost:3000/api/v1/category/createcategory",
        data
      );
      toast("Category created!", {
        description: "Successfully saved to database",
        style: {
          background: "#327594",
          color: "#ffffff",
          borderRadius: "8px",
          padding: "12px 16px",
        },
      });
      reset();
      fatchData();
    } catch (error) {
      toast("Category not created!", {
        description: "Failed to create Category",
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

  // Data fatching from database ======================================

  const [categoryList, setCategoryList] = useState([]);

  const fatchData = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/category/getcategory"
      );
      setCategoryList(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fatchData();
  }, []);
  console.log(categoryList);

  const [position, setPosition] = React.useState("bottom");

  // Delete handle ======================================================

  const deleteHandler = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/v1/category/deletecategory/${id}`
      );
      toast("Category deleted!", {
        description: "Successfully removed from database",
        style: {
          background: "#f62d47",
          color: "#ffffff",
          borderRadius: "8px",
          padding: "12px 16px",
        },
      });
      fatchData();
    } catch (error) {
      toast("Failed to delete!", {
        description: "Something went wrong while deleting.",
        style: {
          background: "#ff9800",
          color: "#ffffff",
          borderRadius: "8px",
          padding: "12px 16px",
        },
      });
      console.log(error);
    }
  };

  // updateHandler section =====================================

  const [updateDisplay, setUpdateDisplay] = useState(false);

  const updateHandler = (id) => {
    setUpdateDisplay(true);
  };

  const popUpDisplayHandler = () => {
    setUpdateDisplay(false);
  };

  return (
    <>
      <Toaster position="top-center" richColors />
      <div>
        <form
          className="border-[.5px] p-5 shadow-lg rounded-xl bg-white "
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="font-poppins font-bold text-2xl border-[.5px] inline px-5 py-0.5 rounded-[10px] text-[#327594]">
            Create Category
          </h1>
          <FieldSet className="mt-5">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name" className="font-poppins">
                  Category Name
                </FieldLabel>
                <Input
                  id="name"
                  autoComplete="off"
                  placeholder="Evil Rabbit"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
                {errors.name && (
                  <p className="text-red-400 text-[12px]">
                    {errors.name.message}
                  </p>
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor="description" className="font-poppins">
                  Category Description
                </FieldLabel>
                <Input
                  id="description"
                  autoComplete="off"
                  placeholder="Evil Rabbit"
                  className="font-poppins "
                  {...register("description", {
                    required: "Description is required",
                  })}
                />
                {errors.description && (
                  <p className="text-red-400 text-[12px]">
                    {errors.description.message}
                  </p>
                )}
              </Field>
            </FieldGroup>
            <Button className="w-[200px] cursor-pointer bg-[#327594] duration-300">
              Create
            </Button>
          </FieldSet>
        </form>
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
                {categoryList.map((item, index) => (
                  <tr
                    key={item._id}
                    className="border-t hover:bg-gray-50 transition duration-150 "
                  >
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{item.name}</td>
                    <td className="py-2 px-4">{item.description}</td>
                    <td className="py-2 px-4 font-semibold">
                      {item.subCategory.map((data) => (
                        <DropdownMenu key={data._id}>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline">SubCategories</Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56">
                            <DropdownMenuRadioGroup
                              value={position}
                              onValueChange={setPosition}
                            >
                              <DropdownMenuRadioItem value={data._id}>
                                {data._id}
                              </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ))}
                    </td>

                    <td className="py-2 px-4">{item.Date}</td>
                    <td className="py-2 px-4">{item._id}</td>
                    <td className="px-4 ">
                      <div className="flex gap-x-5 items-center ">
                        <FilePenLine
                          onClick={() => updateHandler(item._id)}
                          size={30}
                          className="text-green-500 cursor-pointer border-[.5px] rounded-[6px] p-1 hover:bg-green-500 hover:text-white duration-300"
                        />

                        <Trash2
                          onClick={() => deleteHandler(item._id)}
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
      </div>

      {updateDisplay && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-lg bg-opacity-50 z-50">
          <div className="bg-white rounded-xl shadow-xl p-8 w-[400px] relative">
            <h2 className="text-xl font-semibold text-[#327594] mb-4 font-poppins">
              Update Category
            </h2>
            <form
              className="border-[.5px] p-5 shadow-lg rounded-xl bg-white "
              onSubmit={handleSubmit(onSubmit)}
            >
              <FieldSet className="mt-5">
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="name" className="font-poppins">
                      Category Name
                    </FieldLabel>
                    <Input
                      id="name"
                      autoComplete="off"
                      placeholder="Evil Rabbit"
                      {...register("name", {
                        required: "Name is required",
                      })}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-[12px]">
                        {errors.name.message}
                      </p>
                    )}
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="description" className="font-poppins">
                      Category Description
                    </FieldLabel>
                    <Input
                      id="description"
                      autoComplete="off"
                      placeholder="Evil Rabbit"
                      className="font-poppins "
                      {...register("description", {
                        required: "Description is required",
                      })}
                    />
                    {errors.description && (
                      <p className="text-red-400 text-[12px]">
                        {errors.description.message}
                      </p>
                    )}
                  </Field>
                </FieldGroup>
                <div>
                  <div className="flex justify-end gap-3 mt-6">
                    <Button
                      onClick={popUpDisplayHandler}
                      type="button"
                      variant="outline"
                      className="bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-[#327594] text-white hover:bg-[#285e77] cursor-pointer"
                    >
                      Update
                    </Button>
                  </div>
                </div>
              </FieldSet>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
