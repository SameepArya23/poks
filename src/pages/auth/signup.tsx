import { useApi } from "@/api/apiHooks";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const SignUp = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");

  const { post } = useApi();

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    post("sign-up", { name, email, password, confirmPassword });
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="w-full flex flex-col justify-center items-center"
    >
      <form onSubmit={onSubmit} className="w-80">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label className="" htmlFor="email">
              Name
            </Label>
            <Input
              id="name"
              placeholder="John Doe"
              type="text"
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(e) => setName(e.target.value)}
            />
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
              disabled={isLoading}
              onChange={(e) => setEmail(e.target.value)}
            />
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
              disabled={isLoading}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label className="" htmlFor="email">
              Confirm password
            </Label>
            <Input
              id="confirmPassword"
              placeholder="Your confirmPassword"
              type="confirmPassword"
              autoCapitalize="none"
              autoComplete="confirmPassword"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
