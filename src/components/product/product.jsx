import { Toaster } from "sonner";
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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
export default function Product() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  return (
    <>
      <Toaster position="top-center" richColors />
      <div>
        <form className="border-[.5px] p-5 shadow-lg rounded-xl bg-white ">
          <h1 className="font-poppins font-bold text-2xl border-[.5px] inline px-5 py-0.5 rounded-[10px] text-[#327594]">
            Create Product
          </h1>
          <FieldSet className="mt-5">
            <FieldGroup>
              <div className="flex gap-x-10">
                <Field>
                  <FieldLabel htmlFor="name" className="font-poppins">
                    Product Name
                  </FieldLabel>
                  <Input
                    id="name"
                    autoComplete="off"
                    placeholder="Subcategory Name"
                  />
                  {/* {errors.name && (
                  <p className="text-red-400 text-[12px]">
                    {errors.name.message}
                  </p>
                )} */}
                </Field>
                <Field>
                  <FieldLabel htmlFor="description" className="font-poppins">
                    Product Description
                  </FieldLabel>
                  <Input
                    id="description"
                    autoComplete="off"
                    placeholder="Description"
                    className="font-poppins "
                    //   {...register("description", {
                    //     required: "Description is required",
                    //   })}
                  />
                  {/* {errors.description && (
                  <p className="text-red-400 text-[12px]">
                    {errors.description.message}
                  </p>
                )} */}
                </Field>
              </div>
              <div className="flex gap-x-10">
                <Field>
                  <FieldLabel htmlFor="price" className="font-poppins">
                    Price
                  </FieldLabel>
                  <Input id="price" autoComplete="off" placeholder="Price" />
                  {/* {errors.name && (
                  <p className="text-red-400 text-[12px]">
                    {errors.name.message}
                  </p>
                )} */}
                </Field>
                <Field>
                  <FieldLabel htmlFor="stock" className="font-poppins">
                    Stock
                  </FieldLabel>
                  <Input
                    id="stock"
                    autoComplete="off"
                    placeholder="Stock"
                    className="font-poppins "
                    //   {...register("description", {
                    //     required: "Description is required",
                    //   })}
                  />
                  {/* {errors.description && (
                  <p className="text-red-400 text-[12px]">
                    {errors.description.message}
                  </p>
                )} */}
                </Field>
                <Field>
                  <FieldLabel htmlFor="rating" className="font-poppins">
                    Rating
                  </FieldLabel>
                  <Input id="rating" autoComplete="off" placeholder="Rating" />
                  {/* {errors.name && (
                  <p className="text-red-400 text-[12px]">
                    {errors.name.message}
                  </p>
                )} */}
                </Field>
              </div>
              <div className="flex gap-x-10">
                <Field>
                  <FieldLabel htmlFor="discount" className="font-poppins">
                    Discount
                  </FieldLabel>
                  <Input
                    id="discount"
                    autoComplete="off"
                    placeholder="Discount"
                    className="font-poppins "
                    //   {...register("description", {
                    //     required: "Description is required",
                    //   })}
                  />
                  {/* {errors.description && (
                  <p className="text-red-400 text-[12px]">
                    {errors.description.message}
                  </p>
                )} */}
                </Field>

                <Field>
                  <FieldLabel htmlFor="sold" className="font-poppins">
                    Sold
                  </FieldLabel>
                  <Input
                    id="sold"
                    autoComplete="off"
                    placeholder="Sold"
                    className="font-poppins "
                    //   {...register("description", {
                    //     required: "Description is required",
                    //   })}
                  />
                  {/* {errors.description && (
                  <p className="text-red-400 text-[12px]">
                    {errors.description.message}
                  </p>
                )} */}
                </Field>
                <Field>
                  <Label htmlFor="picture">Picture</Label>
                  <Input className="mt-1" id="picture" type="file" />
                </Field>
              </div>
              <h1 className="font-poppins text-[14px] font-medium">
                Select Subcategory
              </h1>
              <Controller
                name="category"
                control={control}
                rules={{ required: "Category is required" }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Subcategory" />
                    </SelectTrigger>
                    <SelectContent>
                      {/* {categoriesData.map((data) => (
                        <SelectItem key={data._id} value={data._id}>
                          {data.name}
                        </SelectItem>
                      ))} */}
                    </SelectContent>
                  </Select>
                )}
              />
              {/* {errors.category && (
                <p className="text-red-400 text-[12px] mt-1">
                  {errors.category.message}
                </p>
              )} */}
            </FieldGroup>
            <Button className="w-[200px] cursor-pointer bg-[#327594] duration-300">
              Create
            </Button>
          </FieldSet>
        </form>
      </div>
    </>
  );
}
