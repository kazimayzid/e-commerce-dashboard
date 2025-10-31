import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { FilePenLine, Search, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
export default function GetAllCategories() {
  //   SubCategories data fatching sections =============================
  const [subCategoriesData, setSubCategoriesData] = useState([]);
  const subCategoriesFatching = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/subcategory/getallsubcategory"
      );
      setSubCategoriesData(data.data);
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

  useEffect(() => {
    subCategoriesFatching();
  }, []);

  //   Fatching Category from DB========================
  const [categoriesData, setCategoriesData] = useState([]);

  const CategoryData = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/category/getcategory"
      );
      setCategoriesData(data.data);
    } catch (error) {
      toast("Failed", {
        description: "Failed to fatch Category",
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

  useEffect(() => {
    CategoryData();
  }, []);

  // Delete handle ======================================================

  const deleteHandler = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/v1/subcategory/deletesubcategory/${id}`
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
      subCategoriesFatching();
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
const [currentCategoryName, setCurrentCategoryName] = useState("");
  const updateHandler = (item) => {
    setUpdateDisplay(true);
    setValue("name", item.name);
    setValue("description", item.description);
    setValue("category", item.category._id); 
  setCurrentCategoryName(item.category.name);
    
  };

  const [updateDisplay, setUpdateDisplay] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.patch(
        `http://localhost:3000/api/v1/subcategory/updatesubcategory/${data._id}`,
        { name: data.name, description: data.description }
      );
      toast("Category updated!", {
        description: "Successfully updated in database",
        style: {
          background: "#327594",
          color: "#fff",
          borderRadius: "8px",
          padding: "12px 16px",
        },
      });

      setUpdateDisplay(false);
      reset();
      subCategoriesFatching();
    } catch (error) {
      toast("Update failed!", {
        description: "Something went wrong",
        style: {
          background: "#f62d47",
          color: "#fff",
          borderRadius: "8px",
          padding: "12px 16px",
        },
      });
      console.log(error);
    }
  };
  const popUpDisplayHandler = () => {
    setUpdateDisplay(false);
  };

  return (
    <>
      <Toaster position="top-center" richColors />
      <div className="mt-20">
        <div className="overflow-x-auto p-4">
          <h1 className="font-poppins font-bold text-2xl border-[.5px] inline-block px-5 py-0.5 rounded-[10px] text-[#327594] mb-5">
            Subcategory List
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
                <th className="py-3 px-4 text-left">SubcategoryName</th>
                <th className="py-3 px-4 text-left">Description</th>
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Subcategory ID</th>
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
                    {item.category.name}
                  </td>

                  <td className="py-2 px-4">{item.Date}</td>
                  <td className="py-2 px-4">{item._id}</td>
                  <td className="px-4 ">
                    <div className="flex gap-x-5 items-center ">
                      <FilePenLine
                        onClick={() => updateHandler(item)}
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

      {updateDisplay && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-lg bg-opacity-50 z-50">
          <div className="bg-white rounded-xl shadow-xl p-8 w-[400px] relative">
            <h2 className="text-xl font-semibold text-[#327594] mb-4 font-poppins">
              Update Subcategory
            </h2>
            <form
              className="border-[.5px] p-5 shadow-lg rounded-xl bg-white"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FieldSet className="mt-5">
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="name" className="font-poppins">
                      Subcategory Name
                    </FieldLabel>
                    <Input
                      id="name"
                      autoComplete="off"
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
                      Subcategory Description
                    </FieldLabel>
                    <Input
                      id="description"
                      autoComplete="off"
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
                  <input type="hidden" {...register("_id")} />
                  <h1 className="font-poppins text-[14px] font-medium">
                Select Category
              </h1>
                  <Select
                    onValueChange={(value) =>
                      setValue("category", value, { shouldValidate: true })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={currentCategoryName || "Select Category"} />
                    </SelectTrigger>
                    <SelectContent>
                      {categoriesData.map((data) => (
                        <SelectItem value={data._id} key={data._id}>
                          {data.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FieldGroup>
                <div className="flex justify-end gap-3 mt-6">
                  <Button
                    onClick={popUpDisplayHandler}
                    type="button"
                    variant="outline"
                    className="bg-gray-200 text-gray-700 hover:bg-gray-300"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-[#327594] text-white hover:bg-[#285e77]"
                  >
                    Update
                  </Button>
                </div>
              </FieldSet>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
