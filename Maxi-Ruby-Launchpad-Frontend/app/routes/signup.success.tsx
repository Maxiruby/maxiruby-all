import { V2_MetaFunction } from "@remix-run/node";
import { NavLink, useNavigate } from "@remix-run/react";

// components
import Button from "~/components/shared/Button";
import Image from "~/components/shared/Image";
import Input from "~/components/shared/Input";

// config
import { Images } from "~/config";
import { useAppStore } from "~/store";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Create Account — Maxiruby Launchpad" },
    { name: "description", content: "Login — Maxiruby Launchpad" },
  ];
};

export default function SignupSuccess() {
  const navigate = useNavigate();
  const { profile, setProfile, token, setToken } = useAppStore(
    (store) => store
  );
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
          <header className="flex flex-col justify-center items-center gap-y-10">
            <Image
              src={Images.EmailSuccess}
              alt="Success"
              width={64}
              height={64}
            />
            <h1 className="text-[max(3vw,36px)] text-center text-foreground font-heading font-bold">
              Check your email
            </h1>
          </header>

          <div className="flex flex-col gap-y-8 w-full max-w-[600px] mx-auto">
            <div className="flex flex-col text-center text-lg">
              <p>We've sent a verification link to</p>
              <strong className="text-accent font-semibold">
                {profile?.email}
              </strong>
            </div>

            <div className="flex flex-col gap-y-4 justify-center items-center">
              <small className="text-foreground/50">
                Didn’t receive the email?{" "}
                <NavLink to="#" className="text-foreground font-bold pl-0.5">
                  Click the resend
                </NavLink>
              </small>

              <Button
                type="button"
                title="Create Account"
                variant="secondary"
                className="w-fit min-w-[160px]"
                onClick={() => navigate("/")}
              >
                Back to homepage
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
