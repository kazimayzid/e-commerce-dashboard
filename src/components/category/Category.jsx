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
export default function Category() {
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
      console.log(data);

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
    } catch (error) {
      toast.error("Failed to create category. Please try again.");
      console.log(error);
    }
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
                <FieldLabel htmlFor="CategoryName" className="font-poppins">
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
                {errors.CategoryName && (
                  <p className="text-red-400 text-[12px]">
                    {errors.CategoryName.message}
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
        <div></div>
      </div>
    </>
  );
}
