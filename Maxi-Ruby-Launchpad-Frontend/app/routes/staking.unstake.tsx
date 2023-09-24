import React from "react";

import { StakingCard, type LockDuration } from "~/routes/staking";

export default function StakingUnstake() {
  const [lockDuration, setLockDuration] = React.useState<LockDuration>("7");

  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <StakingCard
        type="unstake"
        lockDuration={lockDuration}
        setLockDuration={setLockDuration}
      />
    </div>
  );
}
