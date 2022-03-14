var SimpleStorage = artifacts.require("./PollFactory.sol");

module.exports = function (deployer) {
  deployer.deploy(PollFactory);
};
