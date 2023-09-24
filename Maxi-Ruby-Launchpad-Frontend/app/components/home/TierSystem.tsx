import React from "react";

// components
import { Container, Section } from "~/components/Layout";
import Image from "~/components/shared/Image";

// config
import { Meta, Images } from "~/config";

// types
import type { Tier as TierType } from "~/types/meta.types";

export default function TierSystem() {
  return (
    <React.Fragment>
      <Section>
        <Container>
          <div className="flex flex-1 flex-col gap-y-10">
            <header className="flex flex-col gap-y-2">
              <h3 className="text-foreground text-[max(2vw,24px)] font-medium font-heading">
                Tier System
              </h3>
              <h4 className="flex items-center gap-x-3 text-muted-foreground text-[max(1.75vw,18px)] font-medium font-heading">
                <span className="text-foreground">Round 1</span>
                <span>—</span>
                <span>Allocation Round</span>
              </h4>
            </header>

            <div className="grid grid-cols-3 place-items-center w-full max-w-4/5 mx-auto gap-8">
              {Meta.Tiers.map((tier, index) => (
                <Tier key={index} tier={tier} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="relative">
        <Container>
          <div className="flex flex-1 flex-col gap-y-3">
            <header className="flex flex-col">
              <h4 className="flex items-center gap-x-3 text-muted-foreground text-[max(1.75vw,18px)] font-medium font-heading">
                <span className="text-foreground">Round 2</span>
                <span>—</span>
                <span>FCFS Round</span>
              </h4>
            </header>

            <div className="flex flex-1 flex-wrap items-center justify-between gap-x-24">
              <div className="flex flex-1">
                <p className="text-lg leading-6 text-muted-foreground font-medium">
                  Lorem ipsum dolor sit amet consectetur. Nec at aliquet eu amet
                  nullam magna nisl. Sed ut sit scelerisque vulputate consequat.
                  Sit et volutpat varius ullamcorper nec pellentesque. Nunc
                  porta magna facilisi maecenas amet netus vitae nisi neque.
                  Gravida in eget nisl nisi malesuada dis mauris. Fermentum a
                  lacus sem ipsum cursus non elit hac gravida. Hac amet lacinia
                  elit donec lacus lorem nibh facilisi libero. Justo purus
                  praesent venenatis at ipsum morbi nisl eu.
                  <br />
                  <br />
                  Molestie et tempor amet cras tristique. Suspendisse morbi urna
                  arcu sed. Quis et fringilla sagittis porta ac nisl malesuada.
                  Scelerisque malesuada sit a condimentum porta. Parturient
                  pharetra pharetra enim elementum quam praesent mauris cras
                  velit. Ut condimentum augue urna euismod elementum in et ac.
                  Feugiat duis arcu enim urna in phasellus.
                </p>
              </div>

              <div className="flex flex-1 justify-center items-center">
                <Image
                  src={Images.FCFS}
                  alt="FCFS Round"
                  width={306}
                  height={363}
                  objectFit="contain"
                />
              </div>
            </div>
          </div>

          <div className="absolute right-0 -top-16 w-screen -z-1 pointer-events-none">
            <div className="relative inset-0 w-full h-0 pb-[61.783525291304635%]">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={Images.FCFS_BG}
                  alt="MaxiRuby"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </React.Fragment>
  );
}

function Tier({ tier }: { tier: TierType }) {
  return (
    <div className="flex flex-1 flex-col w-full bg-card/80 rounded-3xl p-5 gap-y-8">
      <header className="flex items-center justify-center bg-accent rounded-2xl py-3 px-6">
        <strong className="text-xl text-accent-foreground font-bold capitalize">
          {tier.tier}
        </strong>
      </header>

      <main className="flex flex-1 flex-col">
        <ul className="flex flex-col justify-center items-center gap-y-6">
          <li className="flex flex-col gap-y-1 text-center">
            <span className="text-sm text-muted-foreground font-medium">
              Staking Requirement
            </span>
            <strong className="text-2xl font-bold">
              {tier.staking_requirement}
            </strong>
          </li>

          <li className="flex flex-col gap-y-1 text-center">
            <span className="text-sm text-muted-foreground font-medium">
              Staking Length Required
            </span>
            <strong className="text-2xl font-bold">
              {tier.staking_length_required}
            </strong>
          </li>

          <li className="flex flex-col gap-y-1 text-center">
            <span className="text-sm text-muted-foreground font-medium">
              Whitelist Requirement Twitter
            </span>
            <strong className="text-2xl font-bold">
              {tier.whitelist_requirement}
            </strong>
          </li>

          <li className="flex flex-col gap-y-1 text-center">
            <span className="text-sm text-muted-foreground font-medium">
              Lottery Tickets
            </span>
            <strong className="text-2xl font-bold">
              {tier.lottery_ticket}
            </strong>
          </li>
        </ul>
      </main>
    </div>
  );
}
