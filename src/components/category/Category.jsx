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
import { Button } from "@/components/ui/button"
export default function Category() {
  return (
    <>
      <div>
        <FieldSet>
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
                className = "font-poppins"
              />
            </Field>
          </FieldGroup>
          <Button>Click me</Button>
        </FieldSet>
      </div>
    </>
  );
}
