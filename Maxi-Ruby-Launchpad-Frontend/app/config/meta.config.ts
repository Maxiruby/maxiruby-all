// types
import type { Feature, SocialMediaLink, Tier } from "~/types/meta.types";
import { Images } from "./images.config";

export const Social: SocialMediaLink[] = [
  {
    id: 7,
    title: "Discord",
    icon: "discord",
    path: "https://discord.com/",
  },
  {
    id: 6,
    title: "Telegram",
    icon: "telegram",
    path: "https://telegram.com/",
  },
  {
    id: 5,
    title: "Twitter",
    icon: "twitter",
    path: "https://twitter.com/",
  },
  {
    id: 0,
    title: "Reddit",
    icon: "reddit",
    path: "https://reddit.com/",
  },
  {
    id: 4,
    title: "Instagram",
    icon: "instagram",
    path: "https://instagram.com/",
  },
  {
    id: 3,
    title: "Linkedin",
    icon: "linkedin",
    path: "https://linkedin.com/",
  },
  {
    id: 1,
    title: "Medium",
    icon: "medium",
    path: "https://reddit.com/",
  },
];

export const HelpfulLinks = {
  "about us": [
    {
      title: "Whitepaper",
      path: "#",
      target: "_blank",
    },
    {
      title: "Blog",
      path: "#",
      target: "_blank",
    },
    {
      title: "Terms of Use",
      path: "#",
      target: "_blank",
    },
    {
      title: "Privacy Policy",
      path: "#",
      target: "_blank",
    },
  ],
  support: [
    {
      title: "Help & Support",
      path: "#",
      target: "_blank",
    },
    {
      title: "Author Profile",
      path: "#",
      target: "_blank",
    },
    {
      title: "Contact",
      path: "#",
      target: "_blank",
    },
  ],
  community: [
    {
      title: "Twitter",
      path: "#",
      target: "_blank",
    },
    {
      title: "Telegram",
      path: "#",
      target: "_blank",
    },
    {
      title: "Discord",
      path: "#",
      target: "_blank",
    },
  ],
};

export const Features: Feature[] = [
  {
    title: "Selective Curation of Valuable Projects",
    description:
      "MaxiRuby Launchpad offers meticulously curated projects to provide the community access to the most valuable opportunities. This curation ensures secure and profitable investment opportunities for investors.",
    count: "000000",
    mark: "XXXXXXX",
  },
  {
    title: "Fast and Secure Token Purchase",
    description:
      "MaxiRuby facilitates swift and secure token purchases through smart contracts and reliable payment methods. Participants can easily acquire tokens with a high level of security.",
    count: "000000",
    mark: "XXXXXXX",
  },
  {
    title: "Accessibility with Low Gas Fees",
    description:
      "Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.01.",
    count: "000000",
    mark: "XXXXXXX",
  },
  {
    title: "Community-Centric Interaction",
    description:
      "MaxiRuby Launchpad fosters interaction between the community, projects, and teams. Users can contribute to project developments, ask questions, and provide feedback. The community plays a pivotal role in the success of projects.",
    count: "000000",
    mark: "XXXXXXX",
  },
];

export const Tiers: Tier[] = [
  {
    tier: "bronze",
    staking_requirement: "0",
    staking_length_required: "0",
    whitelist_requirement: "0",
    lottery_ticket: "0",
  },
  {
    tier: "silver",
    staking_requirement: "0",
    staking_length_required: "0",
    whitelist_requirement: "0",
    lottery_ticket: "0",
  },
  {
    tier: "gold",
    staking_requirement: "0",
    staking_length_required: "0",
    whitelist_requirement: "0",
    lottery_ticket: "0",
  },
  {
    tier: "platinum",
    staking_requirement: "0",
    staking_length_required: "0",
    whitelist_requirement: "0",
    lottery_ticket: "0",
  },
  {
    tier: "diamond",
    staking_requirement: "0",
    staking_length_required: "0",
    whitelist_requirement: "0",
    lottery_ticket: "0",
  },
  {
    tier: "blue diamond",
    staking_requirement: "0",
    staking_length_required: "0",
    whitelist_requirement: "0",
    lottery_ticket: "0",
  },
];

export const Partners = [
  {
    partner: "brave",
    source: Images.Brave,
  },
  {
    partner: "circle",
    source: Images.Circle,
  },
  {
    partner: "discord",
    source: Images.Discord,
  },
  {
    partner: "google",
    source: Images.Google,
  },
  {
    partner: "jump",
    source: Images.Jump,
  },
  {
    partner: "lolla",
    source: Images.Lolla,
  },
  {
    partner: "magiceden",
    source: Images.MagicEden,
  },
];
