import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegister } from "@/hooks/useAuth";
import { useZodForm } from "@/hooks/useZodFom";
import { RegisterFormInputs, signUp } from "@/utils/schemas/register";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { mutate, isPending } = useRegister();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useZodForm({ schema: signUp });

  const onSubmit = async (data: RegisterFormInputs) => {
    const { username, password, email } = data;
    mutate(
      { username, email, password, role: "USER" },
      {
        onSuccess: () => {
          navigate("/sign-in");
        },
      }
    );
  };

  return (
    <div
      style={{ minHeight: "100vh" }}
      className="w-full flex flex-col justify-center items-center"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="w-80">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label className="" htmlFor="email">
              Username
            </Label>
            <Input
              id="username"
              placeholder="John Doe"
              type="text"
              autoCapitalize="none"
              autoComplete="username"
              autoCorrect="off"
              disabled={isPending}
              {...register("username")}
            />
            {errors.username && (
              <p style={{ color: "#e34444" }}>{errors.username.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label className="" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isPending}
              {...register("email")}
            />
            {errors.email && (
              <p style={{ color: "#e34444" }}>{errors.email.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label className="" htmlFor="email">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Your password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isPending}
              {...register("password")}
            />
            {errors.password && (
              <p style={{ color: "#e34444" }}>{errors.password.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label className="" htmlFor="email">
              Confirm password
            </Label>
            <Input
              id="confirmPassword"
              placeholder="Your confirmPassword"
              type="password"
              autoCapitalize="none"
              autoComplete="confirmPassword"
              autoCorrect="off"
              disabled={isPending}
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p style={{ color: "#e34444" }}>
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <Button disabled={isPending} type="submit">
            {isPending && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
