import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  return (
    <div className={cn("flex flex-col gap-6")}>
      <form>
        <FieldGroup>
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold">Forgot Password</h1>
          </div>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </Field>

          <Field>
            <Button type="submit">Submit</Button>
            <Button
              onClick={() => {
                navigate("/");
              }}
            >
              Back
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
