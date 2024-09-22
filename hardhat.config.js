require("@nomicfoundation/hardhat-toolbox");

// Replace this private key with your Sonic account private key
const SONIC_PRIVATE_KEY = "YOUR SONIC TEST ACCOUNT PRIVATE KEY";

module.exports = {
  solidity: "0.8.19",
  networks: {
    sonic: {
      url: "https://rpc.testnet.soniclabs.com",
      accounts: [SONIC_PRIVATE_KEY]
    }
  }
};