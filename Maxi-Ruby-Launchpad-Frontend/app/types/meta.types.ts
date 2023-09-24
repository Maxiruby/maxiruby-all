export type SocialMediaLink = {
  id: number;
  title: string;
  icon: string;
  path: string;
};

export type Feature = {
  title: string;
  description: string;
  count: string;
  mark: string;
};

export type Tier = {
  tier: "bronze" | "silver" | "gold" | "platinum" | "diamond" | "blue diamond";
  staking_requirement: string;
  staking_length_required: string;
  whitelist_requirement: string;
  lottery_ticket: string;
};
