import React from "react";
import type { V2_MetaFunction } from "@remix-run/node";

// components
import { Container, Section } from "~/components/Layout";
import Project from "~/components/Project";
import Button from "~/components/shared/Button";

// config
import { Projects as ProjectsConfig } from "~/config/projects.config";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Launchpad Projects — Maxiruby" },
    { name: "description", content: "Launchpad Projects — Maxiruby" },
  ];
};

export default function Projects() {
  const [filter, setFilter] = React.useState<
    "all" | "upcoming" | "open" | "closed"
  >("all");

  return (
    <div className="flex flex-1 flex-col h-full min-h-[75vh]">
      <Section>
        <Container>
          <div className="flex flex-1 flex-col gap-y-10">
            <header className="flex flex-1 flex-row flex-wrap items-center justify-between gap-5">
              <h1 className="text-3xl font-medium font-heading">Projects</h1>

              <div className="flex items-center gap-3">
                <Button
                  type="button"
                  title="All"
                  variant={filter === "all" ? "primary" : "secondary"}
                  onClick={() => setFilter("all")}
                >
                  All
                </Button>
                <Button
                  type="button"
                  title="Upcoming"
                  variant={filter === "upcoming" ? "primary" : "secondary"}
                  onClick={() => setFilter("upcoming")}
                >
                  Upcoming
                </Button>
                <Button
                  type="button"
                  title="Open"
                  variant={filter === "open" ? "primary" : "secondary"}
                  onClick={() => setFilter("open")}
                >
                  Open
                </Button>
                <Button
                  type="button"
                  title="Closed"
                  variant={filter === "closed" ? "primary" : "secondary"}
                  onClick={() => setFilter("closed")}
                >
                  Closed
                </Button>
              </div>
            </header>

            <main className="flex flex-1 flex-wrap items-start justify-start gap-6">
              {ProjectsConfig.map((p, i) => (
                <Project key={i} project={p} />
              ))}
            </main>
          </div>
        </Container>
      </Section>
    </div>
  );
}
