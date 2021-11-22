require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://matic-mumbai.chainstacklabs.com`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://matic-mainnet.chainstacklabs.com`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
