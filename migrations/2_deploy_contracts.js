var User1 = artifacts.require("./User1.sol");
var User2 = artifacts.require("./User2.sol");
var User3 = artifacts.require("./User3.sol");
module.exports = function(deployer) {
  deployer.deploy(User1);
  deployer.deploy(User2);
  deployer.deploy(User3);
};
