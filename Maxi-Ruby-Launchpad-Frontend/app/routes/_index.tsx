import type { V2_MetaFunction } from "@remix-run/node";

// components
import Banner from "~/components/home/Banner";
import LaunchFeatures from "~/components/home/LaunchFeatures";
import Partners from "~/components/home/Partners";
import TierSystem from "~/components/home/TierSystem";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Launchpad — Maxiruby" },
    { name: "description", content: "Launchpad — Maxiruby" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-1 flex-col h-full min-h-[75vh]">
      <Banner />

      <LaunchFeatures />
      <TierSystem />
      <Partners />
    </div>
  );
}
