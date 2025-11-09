import { toast, Toaster } from "sonner";
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
import { Spinner } from "@/components/ui/spinner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "../productList/ProductList";
export default function Product() {
  // Product create Section ================================
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const [spiner, setSpiner] = useState(false);
  const onSubmit = async (data) => {
    try {
      setSpiner(true);
      const formData = new FormData();

      const formattedData = {
        ...data,
        price: Number(data.price) || 0,
        stock: Number(data.stock) || 0,
        rating: Number(data.rating) || 0,
        discount: Number(data.discount) || 0,
        sold: Number(data.sold) || 0,
      };

      const { image, ...fields } = formattedData;

      Object.entries(fields).forEach(([key, value]) => {
        formData.append(key, value);
      });

      if (image && image[0]) {
        formData.append("image", image[0]);
      }

      await axios.post(
        "http://localhost:3000/api/v1/product/createproduct",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      toast("Product created!", {
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
      const errorMessage =
        error.response?.data?.message || "Failed to create Product";
      toast(errorMessage, {
        description: "Check your input or try again",
        style: {
          background: "#f62d47",
          color: "#ffffff",
          borderRadius: "8px",
          padding: "12px 16px",
        },
      });
      console.log(error.message);
    } finally {
      setSpiner(false);
    }
  };

  // SubcategoryData fatching from database ======================================

  const [subcategoryList, setSubcategoryList] = useState([]);

  const fatchData = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/subcategory/getallsubcategory"
      );
      setSubcategoryList(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fatchData();
  }, []);
  return (
    <>
      <Toaster position="top-center" richColors />
      <div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border-[.5px] p-5 shadow-lg rounded-xl bg-white "
          >
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
                      Product Description
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
                </div>
                <div className="flex gap-x-10">
                  <Field>
                    <FieldLabel htmlFor="price" className="font-poppins">
                      Price
                    </FieldLabel>
                    <Input
                      id="price"
                      autoComplete="off"
                      placeholder="Price"
                      {...register("price", {
                        required: "Price is required",
                      })}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-[12px]">
                        {errors.price.message}
                      </p>
                    )}
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
                      {...register("stock")}
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="rating" className="font-poppins">
                      Rating
                    </FieldLabel>
                    <Input
                      id="rating"
                      autoComplete="off"
                      placeholder="Rating"
                      {...register("rating")}
                    />
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
                      {...register("discount")}
                    />
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
                      {...register("sold")}
                    />
                  </Field>
                  <Field>
                    <Label htmlFor="picture">Picture</Label>
                    <Input
                      className="mt-1"
                      id="picture"
                      type="file"
                      {...register("image", {
                        required: "Need to seclect a Picture",
                      })}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-[12px]">
                        {errors.image.message}
                      </p>
                    )}
                  </Field>
                </div>
                <h1 className="font-poppins text-[14px] font-medium">
                  Select Subcategory
                </h1>
                <Controller
                  name="subCategory"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Subcategory is required" }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Subcategory" />
                      </SelectTrigger>
                      <SelectContent>
                        {subcategoryList.map((data) => (
                          <SelectItem key={data._id} value={data._id}>
                            {data.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.subCategory && (
                  <p className="text-red-400 text-[12px] mt-1">
                    {errors.subCategory.message}
                  </p>
                )}
              </FieldGroup>
              {spiner ? (
                <Button className="w-[200px] cursor-pointer bg-[#327594] duration-300">
                  <Spinner />
                  Processing
                </Button>
              ) : (
                <Button className="w-[200px] cursor-pointer bg-[#327594] duration-300">
                  Create
                </Button>
              )}
            </FieldSet>
          </form>
        </div>
        <div className="mt-10">
          <ProductList/>
        </div>
      </div>
    </>
  );
}
