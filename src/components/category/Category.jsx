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
import { useForm } from "react-hook-form"
export default function Category() {

   const {
    register,
    handleSubmit,
    watch,
    formState: {errors}
   } = useForm()
  //  console.log(form, "data");
console.log();

  const onSubmit = (data) => {
    console.log(data);
    
  }
   
  return (
    <>
      <div>
        <form className="border-[.5px] p-5 shadow-lg rounded-xl bg-white " onSubmit={handleSubmit(onSubmit)}>
          <h1 className="font-poppins font-bold text-2xl border-[.5px] inline px-5 py-0.5 rounded-[10px] text-[#327594]">Create Category</h1>
          <FieldSet className= "mt-5">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="CategoryName" className="font-poppins">
                  Category Name
                </FieldLabel>
                <Input
                  id="CategoryName"
                  autoComplete="off"
                  placeholder="Evil Rabbit"
                  {...register("CategoryName", {required: "Name is required"})}
                />
                {
                  errors.message && 
                }
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
                  {...register("description")}
                />
              </Field>
            </FieldGroup>
            <Button className="w-[200px] cursor-pointer">Create</Button>
          </FieldSet>
        </form>
        <div></div>
      </div>
    </>
  );
}
