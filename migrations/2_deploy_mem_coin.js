const MemeCoin = artifacts.require("MemeCoin");

module.exports = function (deployer) {
  deployer.deploy(MemeCoin, "1000000000000000000000000000000"); // Supply 1,000,000,000,000 MEME tokens with 18 decimals
};
