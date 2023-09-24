import React from "react";
import Button from "~/components/shared/Button";
import Input from "~/components/shared/Input";

import { StakingCard, type LockDuration } from "~/routes/staking";

export default function StakingWithdraw() {
  const [lockDuration, setLockDuration] = React.useState<LockDuration>("7");

  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <WithdrawCard />
    </div>
  );
}

function WithdrawCard() {
  return (
    <div className="flex flex-1 flex-col w-full max-w-[700px] mx-auto bg-card rounded-xl py-8 px-6 gap-y-8">
      <header className="flex flex-1 justify-center items-center divide-x divide-solid divide-border">
        <div className="flex flex-col justify-center items-center text-center gap-y-1 mr-6">
          <span className="text-muted-foreground text-sm font-semibold">
            Total Token Amount
          </span>

          <span className="text-sm font-bold">100</span>
        </div>

        <div className="flex flex-col justify-center items-center text-center gap-y-1 pl-6">
          <span className="text-muted-foreground text-sm font-semibold">
            Available to Withdrawal
          </span>

          <span className="text-sm font-bold">50</span>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-y-2">
        <div className="flex flex-1 items-center justify-between gap-x-4">
          <span className="text-muted-foreground font-semibold">
            Amount to Withdraw
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

      <Button
        type="button"
        title="Withdraw"
        variant="primary"
        className="w-fit mx-auto px-8"
      >
        Withdraw
      </Button>
    </div>
  );
}
