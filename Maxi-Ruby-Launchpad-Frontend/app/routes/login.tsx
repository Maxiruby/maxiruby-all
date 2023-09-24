import { V2_MetaFunction, redirect } from "@remix-run/node";
import { NavLink, useNavigate } from "@remix-run/react";
import { useState } from "react";

// components
import Button from "~/components/shared/Button";
import Image from "~/components/shared/Image";
import Input from "~/components/shared/Input";

// config
import { Images } from "~/config";
import { useAppStore } from "~/store";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Login — Maxiruby Launchpad" },
    { name: "description", content: "Login — Maxiruby Launchpad" },
  ];
};
export const backHome = () => {};
export default function Login() {
  const { profile, setProfile, token, setToken } = useAppStore(
    (store) => store
  );

  const navigate = useNavigate();
  const user = localStorage.getItem("token");

  // if (user) return navigate("/");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleLogin = async () => {
    if (!email || !password) return setError("Please fill all the fields");
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        email: email,
        password: password,
      });

      var requestOptions: any = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      const response = fetch(
        "http://api.maxiruby.com/api/users/auth/login",
        requestOptions
      );
      const data = await (await response).json();
      console.log(data);
      setLoading(false);
      setToken(data.token);
      setProfile(data.user);
      localStorage.setItem("profile", JSON.stringify(data.user));
      localStorage.setItem("token", JSON.stringify(data.token));
      navigate("/");
      console.log("Success");
      setSuccess("Success");
    } catch (error: any) {
      console.log(error);
      setError(error.message);
      setSuccess("");
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-1 flex-row flex-wrap items-start justify-start columns-1 md:columns-2 h-fit md:h-screen">
      {/* left */}
      <div className="relative flex flex-1 flex-col md:border-r md:border-solid md:border-border min-w-[400px] h-full overflow-hidden">
        <NavLink to="/" className="flex p-5 w-fit">
          <Image
            src={Images.Logo}
            alt="Maxiruby"
            width={215}
            height={26}
            objectFit="contain"
          />
        </NavLink>

        <div className="absolute top-0 w-screen h-screen md:-mt-24 -z-1 pointer-events-none">
          <div className="relative inset-0 w-full h-0 pb-[61.783525291304635%]">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={Images.HomeBackground}
                alt="MaxiRuby"
                width="100%"
                height="auto"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex flex-1 h-full min-w-[340px]">
        <div className="flex flex-1 flex-col items-center justify-center p-10 gap-y-16">
          <header className="flex justify-center items-center">
            <h1 className="text-[max(3vw,36px)] text-center text-foreground font-heading font-bold">
              Welcome
            </h1>
          </header>

          <div className="flex flex-col gap-y-8 w-full max-w-[600px] mx-auto">
            <div className="flex flex-col gap-y-2">
              <label className="font-semibold text-foreground/70 pl-1">
                Email
              </label>
              <Input
                type="text"
                placeholder="Enter your e-mail here"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="py-4 px-5 placeholder:text-muted-foreground/60"
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <label className="font-semibold text-foreground/70 pl-1">
                Password
              </label>
              <Input
                type="password"
                placeholder="•••••••••••"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="py-4 px-5 placeholder:text-muted-foreground/60"
              />
            </div>

            <div className="flex flex-col gap-y-4 justify-center items-center">
              <Button
                type="button"
                title="Log in"
                variant="invert"
                className="w-fit min-w-[160px]"
                onClick={handleLogin}
                disabled={loading}
              >
                {loading ? "Loading..." : "Log in"}
              </Button>
              <small style={{ color: "red" }}> {error}</small>
              <small style={{ color: "green" }}> {success}</small>
              <small className="text-foreground/50">
                Don’t you have an account?{" "}
                <NavLink
                  to="/signup"
                  className="text-foreground font-bold pl-0.5"
                >
                  Sign Up
                </NavLink>
              </small>
            </div>

            <div className="flex flex-col justify-center items-center pt-6">
              <strong className="text-xl font-semibold">OR</strong>
            </div>

            <div className="flex flex-row flex-wrap items-center justify-center gap-2">
              <Button
                type="button"
                title="Log in"
                variant="secondary"
                className="w-fit min-w-[100px]"
              >
                <Image
                  src={Images.GoogleG}
                  alt="Google"
                  width={24}
                  height={24}
                />
                Log in with Google
              </Button>
              <Button
                type="button"
                title="Log in"
                variant="secondary"
                className="w-fit min-w-[100px]"
              >
                <Image
                  src={Images.Twitter}
                  alt="Twitter"
                  width={24}
                  height={24}
                />
                Log in with Twitter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
