import React from "react";

let hydrating: boolean = true;

export function useHydrated() {
  const [hydrated, setHydrated] = React.useState<boolean>(() => !hydrating);

  React.useEffect(() => {
    hydrating = false;
    setHydrated(true);
  }, []);

  return hydrated;
}
