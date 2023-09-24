import React from "react";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "@remix-run/react";
// import { useAccount } from "wagmi";
// import { signMessage } from "@wagmi/core";
// styles
import globals from "~/static/globals.css";

// components
import Image from "~/components/shared/Image";
import SearchBar from "~/components/SearchBar";
import { Container } from "~/components/Layout";
import { ToastWrapper } from "~/components/shared/ToastWrapper";
import Button from "~/components/shared/Button";
import Icon from "~/components/shared/Icon";
import ClientOnly from "~/components/ClientOnly";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/shared/Sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "~/components/shared/Dropdown";

// store
import { useAppStore } from "~/store";

// config
import { Constants, Images, Meta as MetaConfig } from "~/config";

// utils
import { cn } from "~/utils/cn";
import { storage } from "~/utils/storage";

// types
import { Theme } from "~/types/context.types";
import { truncate } from "./utils";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globals },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,400;6..12,500;6..12,600;6..12,700&display=swap",
  },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  const { pathname } = useLocation();
  const { theme, setTheme } = useAppStore((store) => store);

  // temporary way to prevent glitch
  const [appLoaded, setAppLoaded] = React.useState<boolean>(false);

  // import user global settings from storage
  React.useEffect(() => {
    const savedTheme = storage.get(Constants.Theme);

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // apply saved theme on initialize
  React.useEffect(() => {
    if (theme === Theme.Dark) {
      document.getElementsByTagName("html")[0].classList.add("dark");
    } else {
      document.getElementsByTagName("html")[0].classList.remove("dark");
    }

    setAppLoaded(true);
  }, [storage, theme]);

  const isAuthPage = React.useMemo(() => {
    return pathname.startsWith("/login") || pathname.startsWith("/signup");
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-background text-foreground">
        {appLoaded ? (
          isAuthPage ? (
            <Outlet />
          ) : (
            <AppLayout>
              <Outlet />
            </AppLayout>
          )
        ) : null}

        <ToastWrapper />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full">
      <MobileHeader />
      <AppHeader />

      <main className="relative flex flex-col h-full pt-16">{children}</main>

      <AppFooter />
    </div>
  );
}

function AppHeader() {
  return (
    <header className="hidden sm:block fixed inset-0 bottom-[initial] w-full h-16 bg-background/40 supports-backdrop-blur:bg-background-60 backdrop-blur z-10">
      <Container>
        <div className="flex flex-1 items-center justify-between w-full h-full gap-x-4">
          <NavLink to="/" className="flex">
            <Image
              src={Images.Logo}
              alt="Maxiruby"
              width={215}
              height={26}
              objectFit="contain"
            />
          </NavLink>

          <AppNavigation />

          <AppActions />
        </div>
      </Container>
    </header>
  );
}

function MobileHeader() {
  return (
    <header className="block sm:hidden fixed inset-0 bottom-[initial] w-full h-16 bg-background/90 supports-backdrop-blur:bg-background-60 backdrop-blur z-10">
      <Container>
        <div className="flex flex-1 items-center justify-between w-full h-full gap-x-4">
          <NavLink to="/" className="flex">
            <Image
              src={Images.Logo}
              alt="Balance Network"
              width={142}
              height={50}
            />
          </NavLink>
          <div>
            <ClientOnly>
              {() => (
                <Sheet>
                  <SheetTrigger>
                    <div className="flex">
                      <Button
                        variant="border"
                        type="button"
                        title="Shopping Bag"
                        className="w-11 h-11 p-0"
                      >
                        <Icon icon="search" />
                      </Button>
                      <Button
                        variant="border"
                        type="button"
                        title="Shopping Bag"
                        className="w-11 h-11 p-0"
                      >
                        <Icon icon="dashboard" />
                      </Button>
                    </div>
                  </SheetTrigger>

                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>MENU</SheetTitle>
                    </SheetHeader>
                    <div className="flex items-center justify-center">
                      <NavLink to="/" className="flex">
                        <Image
                          src={Images.Logo}
                          alt="Balance Network"
                          width={200}
                          height={76}
                        />
                      </NavLink>
                    </div>
                    <SheetFooter>
                      <div className="h-full flex items-center justify-center flex-col gap-y-20 mt-7">
                        <SearchBar />
                        <AppNavigation />
                        <AppActions />
                      </div>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              )}
            </ClientOnly>
          </div>
        </div>
      </Container>
    </header>
  );
}

function AppNavigation() {
  return (
    <nav role="navigation" className="flex items-center gap-x-8">
      <AppNavigationLink title="Home" path="/" />
      <AppNavigationLink title="Projects" path="/projects" />
      <AppNavigationLink title="Staking" path="/staking" />
    </nav>
  );
}

interface AppNavigationLinkProps {
  title: string;
  path: string;
}

function AppNavigationLink({ title, path }: AppNavigationLinkProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        cn("relative text-base font-semibold transition-colors duration-150", {
          "text-foreground/80 hover:text-foreground": !isActive,
          "text-accent hover:text-accent after:absolute after:top-full after:left-0 after:right-0 after:w-full after:h-0.5 after:mt-1 after:bg-accent after:rounded-md":
            isActive,
        })
      }
    >
      {title}
    </NavLink>
  );
}

function AppActions() {
  const auth = useAppStore((store) => store.token);
  const navigate = useNavigate();
  const user = localStorage.getItem("profile");
  const userToken = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("profile");
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="flex items-center justify-center gap-x-3">
      {/* <Button
        type="button"
        title="Connect Wallet"
        variant="border"
        className="bg-background"
      >
        Connect Wallet
      </Button> */}
      {user ? (
        <React.Fragment>
          <Button
            type="button"
            title="0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326"
            variant="ghost"
            className="border border-solid border-accent text-accent hover:bg-accent hover:text-background"
          >
            {truncate("0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326")}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                type="button"
                title="My Account"
                variant="secondary"
                className="pl-4 pr-2 gap-1"
              >
                My Account
                <Icon icon="chevron-down" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link to="/profile" className="flex flex-1 py-2">
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/portfolio" className="flex flex-1 py-2">
                    <span>Portfolio</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div
                    onClick={handleLogout}
                    role="button"
                    className="flex flex-1 items-center gap-x-1.5 py-2"
                  >
                    <Icon icon="log-out" className="w-4 h-4" />
                    Log Out
                  </div>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </React.Fragment>
      ) : (
        <NavLink
          to="/login"
          className="text-sm font-semibold py-3 px-5 rounded-xl border border-solid border-border hover:bg-secondary transition-colors duration-150"
        >
          Log In / Sign Up
        </NavLink>
      )}
    </div>
  );
}

function AppFooter() {
  return (
    <footer className="relative w-full border-t border-solid border-border pt-12 mt-8">
      <Container>
        <div className="flex flex-1 flex-col">
          {/* main */}
          <div className="flex sm:flex-row flex-col flex-wrap items-start justify-start gap-5 pb-24">
            {/* logo */}
            <div className="flex flex-col flex-1 min-w-[200px] max-w-[460px]">
              <div className="flex flex-col gap-y-5">
                <NavLink to="/" className="flex">
                  <Image
                    src={Images.Logo}
                    alt="Maxiruby"
                    width={238}
                    height={36}
                  />
                </NavLink>

                <p className="text-muted-foreground text-sm font-medium">
                  A Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            {/* navigation */}
            <nav
              role="navigation"
              className="flex flex-1 flex-wrap items-start justify-center gap-5"
            >
              {Object.entries(MetaConfig.HelpfulLinks).map(
                ([key, values], index) => (
                  <div
                    key={index}
                    className="flex flex-col min-w-[150px] gap-y-4"
                  >
                    <h6 className="text-xl font-semibold capitalize">{key}</h6>

                    <ul className="flex flex-col gap-y-2">
                      {values.map((v, i) => (
                        <Link
                          key={i}
                          to={v.path}
                          target={v.target}
                          rel={
                            v.target === "_blank" ? "norefeerer noopenner" : ""
                          }
                          className="text-muted-foreground text-sm font-medium hover:text-foreground transition-colors duration-150"
                        >
                          {v.title}
                        </Link>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </nav>
          </div>

          {/* copyright */}
          <div className="flex items-center justify-between flex-col sm:flex-row gap-3 py-3 border-t border-solid border-border text-xs text-muted-foreground font-medium">
            <pre>
              © 2023{"  "}—{"  "}All rights reserved
            </pre>

            <div className="flex items-center gap-x-3">
              <Link
                to="https://docs.balancenetwork.io/views/About/aboutus.html"
                target="_blank"
                rel="norefeerer noopenner"
                className="hover:text-foreground transition-colors duration-150"
              >
                Disclaimer
              </Link>
              <Link
                to="https://docs.balancenetwork.io/views/About/privacypolicy.html"
                target="_blank"
                rel="norefeerer noopenner"
                className="hover:text-foreground transition-colors duration-150"
              >
                Privacy Policy
              </Link>
              <Link
                to="https://docs.balancenetwork.io/views/About/termsofuse.html"
                target="_blank"
                rel="norefeerer noopenner"
                className="hover:text-foreground transition-colors duration-150"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
