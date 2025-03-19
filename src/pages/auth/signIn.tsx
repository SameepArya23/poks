import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLogin } from "@/hooks/useAuth";
import { useZodForm } from "@/hooks/useZodFom";
import { login, LoginFormInputs } from "@/utils/schemas/login";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { mutate, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useZodForm({ schema: login });

  const onSubmit = async (data: LoginFormInputs) => {
    mutate(
      { username: data.username, password: data.password },
      { onSuccess: () => {} }
    );
  };

  const navigate = useNavigate();
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
              placeholder="johnDoe"
              autoCapitalize="none"
              autoCorrect="off"
              autoComplete="username"
              disabled={isPending}
              {...register("username")}
            />
            {errors.username && (
              <p style={{ color: "#e34444" }}>{errors.username.message}</p>
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
          <Button disabled={isPending} type="submit">
            {isPending && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In
          </Button>
        </div>
      </form>
      <div className="relative my-5">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        disabled={isPending}
        className="w-80"
      >
        {isPending ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
      <div className="mt-5 relative flex justify-center text-xs uppercase">
        <span className="bg-background px-2 text-muted-foreground">
          Don't have an account?{" "}
          <span
            className="bg-background px-1 text-foreground font-semibold cursor-pointer hover:underline"
            onClick={() => navigate("/sign-up")}
          >
            Register here!
          </span>
        </span>
      </div>
    </div>
  );
};

export default SignIn;
