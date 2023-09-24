import React from "react";
import type { V2_MetaFunction } from "@remix-run/node";
import { NavLink, Outlet } from "@remix-run/react";

// components
import { Container, Section } from "~/components/Layout";
import Button from "~/components/shared/Button";
import Input from "~/components/shared/Input";

// utils
import { cn } from "~/utils/cn";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Staking — Maxiruby" },
    { name: "description", content: "Staking — Maxiruby" },
  ];
};

export default function Staking() {
  return (
    <div className="flex flex-1 flex-col h-full min-h-[75vh]">
      <Section>
        <Container>
          <div className="flex flex-1 flex-col gap-y-16">
            <StakingStats />

            <div className="flex flex-1 justify-center items-center gap-x-4">
              <NavLink to="/staking" end>
                {({ isActive }) => (
                  <Button
                    type="button"
                    title="Stake"
                    variant={isActive ? "primary" : "secondary"}
                  >
                    Stake
                  </Button>
                )}
              </NavLink>

              <NavLink to="/staking/unstake" end>
                {({ isActive }) => (
                  <Button
                    type="button"
                    title="Unstake"
                    variant={isActive ? "primary" : "secondary"}
                  >
                    Unstake
                  </Button>
                )}
              </NavLink>

              <NavLink to="/staking/withdraw" end>
                {({ isActive }) => (
                  <Button
                    type="button"
                    title="Withdraw"
                    variant={isActive ? "primary" : "secondary"}
                  >
                    Withdraw
                  </Button>
                )}
              </NavLink>
            </div>

            <Outlet />
          </div>
        </Container>
      </Section>
    </div>
  );
}

export function StakingStats() {
  return (
    <div className="flex flex-1 flex-row flex-wrap items-stretch gap-y-5 gap-x-8">
      <div className="flex flex-1 flex-row items-center justify-center gap-3 px-3 py-6 border border-solid border-border rounded-xl">
        <div className="flex flex-col justify-center items-center px-3 gap-y-1">
          <strong className="text-muted-foreground font-semibold">
            Number of Stakers
          </strong>
          <span className="text-lg font-medium border-x border-solid border-border py-1 px-5">
            123456
          </span>
        </div>
        <div className="flex flex-col justify-center items-center px-3 gap-y-1">
          <strong className="text-muted-foreground font-semibold">
            Total Maxiruby Staked
          </strong>
          <span className="text-lg font-medium border-x border-solid border-border py-1 px-5">
            123456789
          </span>
        </div>
        <div className="flex flex-col justify-center items-center px-3 gap-y-1">
          <strong className="text-muted-foreground font-semibold">APY</strong>
          <span className="text-lg font-medium border-x border-solid border-border py-1 px-5">
            15%
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-row items-center justify-center gap-3 px-3 py-4 border border-solid border-border rounded-xl">
        <div className="flex flex-col justify-center items-center px-3 gap-y-1">
          <strong className="text-muted-foreground font-semibold">
            Your Staked
          </strong>
          <span className="text-lg font-medium border-x border-solid border-border py-1 px-5">
            0.00 BNB
          </span>
        </div>
        <div className="flex flex-col justify-center items-center px-3 gap-y-1">
          <strong className="text-muted-foreground font-semibold">
            Your Unstaked
          </strong>
          <span className="text-lg font-medium border-x border-solid border-border py-1 px-5">
            0.00 BNB
          </span>
        </div>
        <div className="flex flex-col justify-center items-center px-3 gap-y-1">
          <strong className="text-muted-foreground font-semibold">
            Your Rewards
          </strong>
          <span className="text-lg font-medium border-x border-solid border-border py-1 px-5">
            0.00 BNB
          </span>
        </div>
      </div>
    </div>
  );
}

export type LockDuration = "7" | "14" | "30" | "60" | "90" | "180";

interface StakingCard {
  type: "stake" | "unstake";
  lockDuration: LockDuration;
  setLockDuration: React.Dispatch<React.SetStateAction<LockDuration>>;
}

export function StakingCard({
  type,
  lockDuration,
  setLockDuration,
}: StakingCard) {
  return (
    <div className="flex flex-1 flex-col w-full max-w-[700px] mx-auto bg-card rounded-xl py-8 px-6 gap-y-8">
      <header className="flex flex-1 flex-col justify-center items-center gap-y-5">
        <h6 className="text-lg text-muted-foreground font-semibold uppercase">
          Lock Duration
        </h6>

        <div className="flex flex-1 flex-wrap items-center justify-center gap-3">
          {(["7", "14", "30", "60", "90", "180"] as LockDuration[]).map(
            (duration: LockDuration) => (
              <Button
                type="button"
                title={`${duration} Days`}
                variant="secondary"
                onClick={() => setLockDuration(duration)}
                className={cn(
                  "py-2 px-6 bg-background flex-col justify-center items-center text-center border border-solid",
                  {
                    "border-accent": lockDuration === duration,
                  }
                )}
              >
                <span className="text-base">{duration}</span>
                <span className="text-muted-foreground text-xs uppercase">
                  Days
                </span>
              </Button>
            )
          )}
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-y-2">
        <div className="flex flex-1 items-center justify-between gap-x-4">
          <span className="text-muted-foreground font-semibold">
            Amount to {type === "stake" ? "Stake" : "Unstake"}
          </span>
          <span className="text-muted-foreground font-semibold">BNB</span>
        </div>

        <div className="relative flex flex-1 items-center">
          <Input
            type="text"
            placeholder="0.00"
            value=""
            onChange={() => {}}
            className="pr-12 py-4 bg-transparent"
          />
          <Button
            type="button"
            title="MAX"
            variant="ghost"
            className="absolute right-0.5 top-0.5 bottom-0.5 hover:bg-secondary hover:text-foreground"
            size="small"
          >
            MAX
          </Button>
        </div>
      </div>

      <StakingCountdown type={type} />

      <Button
        type="button"
        title={type === "stake" ? "Stake" : "Unstake"}
        variant="primary"
        className="w-fit mx-auto px-8"
      >
        {type === "stake" ? "Stake" : "Unstake"}
      </Button>
    </div>
  );
}

function StakingCountdown({ type }: Pick<StakingCard, "type">) {
  return (
    <div className="flex flex-col py-3 px-4 gap-y-3">
      <strong className="font-semibold text-foreground/75 text-center">
        {type === "stake" ? "Staking" : "Unstaking"} ends in
      </strong>

      <div className="flex flex-wrap items-center space-x-3 space-y-3 w-full max-w-[400px] mx-auto">
        <div className="flex flex-col flex-1 justify-center items-center gap-y-1">
          <strong className="text-xl font-bold text-accent">03</strong>
          <span className="text-sm text-foreground/60 font-semibold">DAYS</span>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center gap-y-1">
          <strong className="text-xl font-bold text-accent">12</strong>
          <span className="text-sm text-foreground/60 font-semibold">
            MINUTES
          </span>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center gap-y-1">
          <strong className="text-xl font-bold text-accent">17</strong>
          <span className="text-sm text-foreground/60 font-semibold">
            HOURS
          </span>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center gap-y-1">
          <strong className="text-xl font-bold text-accent">23</strong>
          <span className="text-sm text-foreground/60 font-semibold">
            SECONDS
          </span>
        </div>
      </div>
    </div>
  );
}
