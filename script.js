

const settings = {
    apiKey: "pO1eaEyNWEM9ZrLbhBxHlmmt2fxZC4sB",
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

// get the latest block
const latestBlock = alchemy.core.getBlock("latest").then(console.log);
