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
export default function Category() {
  return (
    <>
      <div>
        <div className="border-[.5px] p-5 shadow-lg rounded-xl bg-white">
          <h1 className="font-poppins font-bold text-2xl border-[.5px] inline px-5 py-0.5 rounded-[10px] ">Make Category</h1>
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
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="description" className="font-poppins">
                  Category Description
                </FieldLabel>
                <Input
                  id="description"
                  autoComplete="off"
                  placeholder="Evil Rabbit"
                  className="font-poppins"
                />
              </Field>
            </FieldGroup>
            <Button>Click me</Button>
          </FieldSet>
        </div>
        <div></div>
      </div>
    </>
  );
}
