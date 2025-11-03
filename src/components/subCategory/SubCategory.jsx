import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast, Toaster } from "sonner";
import axios from "axios";
import { useEffect, useState } from "react";
import GetAllCategories from "../getAllSubCategory/GetAllSubCategories";

export default function SubCategory() {
  // global state ==================
  const [refresh, setRefresh] = useState(false);

  //  auto Refresh =======================

  const handleRefresh = () => setRefresh(!refresh);

  //    SubCategory Creating sections =======================
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (!data.category) {
        toast("Category is Required!", {
          description: "Plz select a Category",
          style: {
            background: "#f62d47",
            color: "#ffffff",
            borderRadius: "8px",
            padding: "12px 16px",
          },
        });
        return;
      }

      await axios.post(
        "http://localhost:3000/api/v1/subcategory/createsubcategory",
        data
      );
      handleRefresh();
      reset({
        name: "",
        description: "",
        category: "",
      });
      toast("Subcategory created!", {
        description: "Successfully saved to database",
        style: {
          background: "#327594",
          color: "#ffffff",
          borderRadius: "8px",
          padding: "12px 16px",
        },
      });
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

  //   Fatching Category from DB========================
  const [categoriesData, setCategoriesData] = useState([]);

  const CategoryData = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/category/getcategory"
      );
      reset();
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

  console.log(categoriesData);

  return (
    <>
      <Toaster position="top-center" richColors />
      <div>
        <form
          className="border-[.5px] p-5 shadow-lg rounded-xl bg-white "
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="font-poppins font-bold text-2xl border-[.5px] inline px-5 py-0.5 rounded-[10px] text-[#327594]">
            Create Subcategory
          </h1>
          <FieldSet className="mt-5">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name" className="font-poppins">
                  Subcategory Name
                </FieldLabel>
                <Input
                  id="name"
                  autoComplete="off"
                  placeholder="Subcategory Name"
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
                  placeholder="Description"
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
              <h1 className="font-poppins text-[14px] font-medium">
                Select Category
              </h1>
              <Controller
                name="category"
                control={control}
                rules={{ required: "Category is required" }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categoriesData.map((data) => (
                        <SelectItem key={data._id} value={data._id}>
                          {data.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.category && (
                <p className="text-red-400 text-[12px] mt-1">
                  {errors.category.message}
                </p>
              )}
            </FieldGroup>
            <Button className="w-[200px] cursor-pointer bg-[#327594] duration-300">
              Create
            </Button>
          </FieldSet>
        </form>
      </div>
      <div className="mt-8">
        <GetAllCategories refresh={refresh} />
      </div>
    </>
  );
}
