import React from "react";
import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

// components
import { Container, Section } from "~/components/Layout";
import Button from "~/components/shared/Button";

// config
import { Projects as ProjectsConfig } from "~/config/projects.config";
import Icon from "~/components/shared/Icon";
import Image from "~/components/shared/Image";
import {
  ProjectCountdown,
  ProjectCurrency,
  ProjectSocialLinks,
  ProjectStatus,
} from "~/components/Project";
import ClaimModal from "~/components/project/ClaimModal";
import JoinModal from "~/components/project/JoinModal";

export const loader: LoaderFunction = ({ params }) => {
  const projectId = Number(params.project);
  const project = ProjectsConfig.at(projectId);

  if (!project) {
    return {
      statusCode: 404,
      message: "Project not found",
    };
  }

  return { project };
};

export const meta: V2_MetaFunction = ({ data }) => {
  const { project } = data;

  return [
    { title: `${project.name} — Maxiruby` },
    { name: "description", content: "Launchpad Projects — Maxiruby" },
  ];
};

export default function Project() {
  const { project } = useLoaderData<typeof loader>();
  const [projectStatus, setProjectStatus] = React.useState<
    "open" | "upcoming" | "closed"
  >(project.status);

  return (
    <div className="flex flex-1 flex-col h-full min-h-[75vh]">
      <Container>
        <Section className="pb-3">
          <div className="flex flex-1 flex-col gap-y-5">
            <header>
              <Link to="/projects">
                <Button
                  type="button"
                  title="Back to projects"
                  variant="secondary"
                  size="small"
                  className="text-muted-foreground"
                >
                  <Icon icon="arrow-left" className="w-4 h-4" />
                  Back to projects
                </Button>
              </Link>
            </header>

            <div className="flex flex-1 flex-col border border-solid border-border rounded-xl py-6 px-5 gap-y-8">
              <div className="flex flex-row flex-wrap items-center justify-between gap-5">
                <div className="flex flex-wrap items-start gap-4">
                  <div className="flex w-24 h-24 rounded-full bg-secondary overflow-hidden">
                    {/* <Image /> */}
                  </div>

                  <div className="flex flex-col gap-y-3">
                    <h1 className="text-xl font-semibold">{project.name}</h1>

                    <div className="flex flex-row items-center gap-2">
                      <div className="flex flex-row flex-wrap items-center gap-3">
                        <ProjectStatus status={project.status} />

                        <ProjectCurrency currency={project.currency} />
                      </div>
                    </div>

                    <div className="mt-1">
                      <ProjectSocialLinks />
                    </div>
                  </div>
                </div>

                <ProjectCountdown project={project} />

                <div className="flex flex-col items-center justify-center gap-y-4 md:items-end md:justify-end">
                  <Link
                    to="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-2 text-muted-foreground text-sm font-semibold hover:text-foreground transition-colors duration-150"
                  >
                    Whitepaper
                    <Icon icon="external" className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex flex-row items-center gap-x-2">
                    {project.status === "closed" ? (
                      <ClaimModal
                        project={project}
                        trigger={
                          <Button type="button" title="Claim" variant="primary">
                            Claim
                          </Button>
                        }
                      />
                    ) : (
                      <React.Fragment>
                        <Button
                          type="button"
                          title="View Whitelist"
                          variant="invert"
                        >
                          View Whitelist
                        </Button>

                        <JoinModal
                          project={project}
                          trigger={
                            <Button
                              type="button"
                              title="Join"
                              variant="primary"
                              disabled={project.status !== "open"}
                            >
                              Join
                            </Button>
                          }
                        />
                      </React.Fragment>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-y-3 text-foreground/80">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Odio vivamus in eu
                  gravida maecenas felis faucibus adipiscing. Amet leo augue
                  bibendum magnis ridiculus. In sagittis vitae dictum lectus
                  venenatis malesuada dolor eu. In mi commodo arcu mattis
                  sagittis sed adipiscing rhoncus. Ultricies tempus sed lectus
                  adipiscing in augue.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Odio vivamus in eu
                  gravida maecenas felis faucibus adipiscing. Amet leo augue
                  bibendum magnis ridiculus. In sagittis vitae dictum lectus
                  venenatis malesuada dolor eu. In mi commodo arcu mattis
                  sagittis sed adipiscing rhoncus. Ultricies tempus sed lectus
                  adipiscing in augue.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section className="py-3">
          <div className="flex flex-1 flex-row flex-wrap gap-6">
            <div className="flex flex-1 flex-col border border-solid border-border rounded-xl py-6 px-5 gap-y-5 min-w-[340px]">
              <h3 className="text-xl text-foreground/80 font-bold">
                Pool Information
              </h3>

              <div className="flex flex-1 flex-col gap-y-4">
                <li className="flex flex-1 flex-wrap items-center justify-between gap-2">
                  <strong className="text-foreground/60 font-medium uppercase">
                    TOKEN DISTRIBUTION
                  </strong>
                  <span className="text-foreground font-semibold">
                    Date UTC
                  </span>
                </li>

                <li className="flex flex-1 flex-wrap items-center justify-between gap-1.5">
                  <strong className="text-foreground/60 font-medium uppercase">
                    MIN. ALLOCATION
                  </strong>
                  <span className="text-foreground font-semibold">
                    0.01 BNB
                  </span>
                </li>

                <li className="flex flex-1 flex-wrap items-center justify-between gap-1.5">
                  <strong className="text-foreground/60 font-medium uppercase">
                    MAX. ALLOCATION
                  </strong>
                  <span className="text-foreground font-semibold">
                    1111.11 BNB
                  </span>
                </li>

                <li className="flex flex-1 flex-wrap items-center justify-between gap-1.5">
                  <strong className="text-foreground/60 font-medium uppercase">
                    TOKEN PRICE
                  </strong>
                  <span className="text-foreground font-semibold">
                    1 BUSD = 11.11 LRM
                  </span>
                </li>

                <li className="flex flex-1 flex-wrap items-center justify-between gap-1.5">
                  <strong className="text-foreground/60 font-medium uppercase">
                    ACCESS TYPE
                  </strong>
                  <span className="text-foreground font-semibold">
                    <div className="py-1 px-3 rounded-full bg-accent text-accent-foreground text-sm font-semibold">
                      Public
                    </div>
                  </span>
                </li>
              </div>
            </div>

            <div className="flex flex-1 flex-col border border-solid border-border rounded-xl py-6 px-5 gap-y-5 min-w-[340px]">
              <h3 className="text-xl text-foreground/60 font-bold">
                Token Information
              </h3>

              <div className="flex flex-1 flex-col gap-y-4">
                <li className="flex flex-1 flex-wrap items-center justify-between gap-2">
                  <strong className="text-foreground/60 font-medium uppercase">
                    NAME
                  </strong>
                  <span className="text-foreground font-semibold">
                    Lorem Ipsum
                  </span>
                </li>

                <li className="flex flex-1 flex-wrap items-center justify-between gap-1.5">
                  <strong className="text-foreground/60 font-medium uppercase">
                    SYMBOL
                  </strong>
                  <span className="text-foreground font-semibold">LRM</span>
                </li>

                <li className="flex flex-1 flex-wrap items-center justify-between gap-1.5">
                  <strong className="text-foreground/60 font-medium uppercase">
                    DECIMALS
                  </strong>
                  <span className="text-foreground font-semibold">18</span>
                </li>

                <li className="flex flex-1 flex-wrap items-center justify-between gap-1.5">
                  <strong className="text-foreground/60 font-medium uppercase">
                    ADDRESS
                  </strong>
                  <span className="text-foreground font-semibold">
                    0x475fvb898y908tu098908t90
                  </span>
                </li>

                <li className="flex flex-1 flex-wrap items-center justify-between gap-1.5">
                  <strong className="text-foreground/60 font-medium uppercase">
                    TOTAL SUPPLY
                  </strong>
                  <span className="text-foreground font-semibold">
                    100000000
                  </span>
                </li>
              </div>
            </div>
          </div>
        </Section>

        <Section className="pt-3">
          <div className="flex flex-1 flex-col border border-solid border-border rounded-xl py-6 px-5 gap-y-5">
            <h3 className="text-xl text-foreground/80 font-bold">
              Total Raised
            </h3>

            <div className="flex flex-1 flex-row flex-wrap items-center justify-between">
              <h6 className="text-2xl text-foreground font-bold">
                300000.00 BNB
              </h6>

              <span className="text-foreground font-semibold">Filled</span>
            </div>

            <div className="flex flex-col gap-y-3">
              <div className="flex flex-1 flex-row flex-wrap items-center justify-between">
                <strong className="flex items-center gap-x-1.5 text-foreground/60 uppercase">
                  PROGRESS
                  <span className="text-foreground font-bold">100%</span>
                </strong>

                <span className="text-foreground font-medium">
                  129222922 /{" "}
                  <span className="text-foreground/60">129222922 LRM</span>
                </span>
              </div>

              {/* progressbar */}
              <div className="w-full h-4 mb-4 bg-secondary/50 rounded-full">
                <div
                  className="h-4 rounded-full bg-gradient-to-l from-bg-background from-accent"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="flex flex-1 flex-row flex-wrap items-center justify-between">
              <strong className="flex flex-col gap-y-1.5 text-foreground/60">
                Limited
                <span className="text-foreground">Participants: 6069</span>
              </strong>

              <span className="py-2.5 px-4 rounded-xl bg-secondary/70 text-secondary-foreground text-sm font-semibold">
                1 BNB = 11.11 LRM
              </span>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
}
