import { getDefaultConfig } from "connectkit";
import { configureChains, createConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  bscTestnet,
  avalancheFuji,
  bsc,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";

const { chains, publicClient } = configureChains([bsc], [publicProvider()]);

const walletConnectProjectId = "8b598b955027ef59e158c27e7f42a7bd";

export const config = createConfig(
  getDefaultConfig({
    autoConnect: true,
    appName: "Maxiruby",
    walletConnectProjectId,
    publicClient,
    chains,
  })
);
