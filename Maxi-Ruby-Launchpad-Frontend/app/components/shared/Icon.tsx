// utils
import { cn } from "~/utils/cn";

// lib
import * as Icons from "~/lib/icons";

const match: Record<string, JSX.Element> = {
  avalanche: <Icons.Avalanche />,
  binance: <Icons.Binance />,
  ethereum: <Icons.Ethereum />,
  fantom: <Icons.Fantom />,
  polygon: <Icons.Polygon />,

  add: <Icons.Add />,
  "arrow-down": <Icons.ArrowDown />,
  "arrow-left": <Icons.ArrowLeft />,
  "arrow-right": <Icons.ArrowRight />,
  "arrow-up": <Icons.ArrowUp />,
  bag: <Icons.Bag />,
  brush: <Icons.Brush />,
  check: <Icons.Check />,
  "chevron-down": <Icons.ChevronDown />,
  "chevron-left": <Icons.ChevronLeft />,
  "chevron-right": <Icons.ChevronRight />,
  "chevron-up": <Icons.ChevronUp />,
  copy: <Icons.Copy />,
  cross: <Icons.Cross />,
  calendar: <Icons.Calendar />,
  dashboard: <Icons.DashboardSimple />,
  discord: <Icons.Discord />,
  external: <Icons.External />,
  "filter-horizontal": <Icons.FilterHorizontal />,
  globe: <Icons.Globe />,
  grid: <Icons.Grid />,
  heart: <Icons.Heart />,
  instagram: <Icons.Instagram />,
  linkedin: <Icons.Linkedin />,
  "log-out": <Icons.LogOut />,
  mail: <Icons.Mail />,
  medium: <Icons.Medium />,
  nft: <Icons.NFT />,
  search: <Icons.Search />,
  settings: <Icons.Settings />,
  telegram: <Icons.Telegram />,
  twitter: <Icons.Twitter />,
  reddit: <Icons.Reddit />,
  verification: <Icons.Verification />,
  wallet: <Icons.Wallet />,
};

interface IconProps {
  icon: string;
  className?: string;
}

/**
 * @param {string} icon key for icon match
 * @returns {node | null} svg element || null
 */
export default function Icon({ icon, className }: IconProps) {
  if (!match[icon]) return null;

  return (
    <span className={cn("icon flex w-5 h-5", className)}>{match[icon]}</span>
  );
}
