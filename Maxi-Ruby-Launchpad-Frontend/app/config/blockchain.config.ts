// chains
import SVG_Avalanche from "~/static/images/avalanche.svg";
import SVG_BNB from "~/static/images/bnb.svg";
import SVG_Ethereum from "~/static/images/ethereum.svg";
import SVG_Fantom from "~/static/images/fantom.svg";
import SVG_Polygon from "~/static/images/polygon.svg";

// wallets
import SVG_Coinbase from "~/static/images/coinbase.svg";
import SVG_Metamask from "~/static/images/metamask.svg";
import SVG_WalletConnect from "~/static/images/walletconnect.svg";

export const Chains: Chain[] = [
  {
    index: 0,
    id: "avax",
    title: "Avalanche",
    icon: SVG_Avalanche,
    network_id: "0xa86a",
  },
  {
    index: 1,
    id: "polygon",
    title: "Polygon",
    icon: SVG_Polygon,
    network_id: "0x89",
  },
  {
    index: 2,
    id: "fantom",
    title: "Fantom",
    icon: SVG_Fantom,
    network_id: "0xfa",
  },
  {
    index: 3,
    id: "ethereum",
    title: "Ethereum",
    icon: SVG_Ethereum,
    network_id: "0x1",
    disabled: true,
  },
  {
    index: 4,
    id: "bsc",
    title: "BNB Chain",
    icon: SVG_BNB,
    network_id: "0x38",
    disabled: true,
  },
];

export const Wallets: Wallet[] = [
  {
    id: "MetaMask",
    title: "Metamask",
    icon: SVG_Metamask,
  },
  {
    id: "CoinBase",
    title: "Coinbase Wallet",
    icon: SVG_Coinbase,
  },
  {
    id: "WalletConnect",
    title: "Wallet Connect",
    icon: SVG_WalletConnect,
  },
];
