var registrazione = artifacts.require("registrazione");
var login = artifacts.require("login");
var Allevamento = artifacts.require("Allevamento");
var analisi = artifacts.require("analisi");
var produzione= artifacts.require("produzione");

module.exports = function(deployer) {
  deployer.deploy(registrazione);
  deployer.deploy(login);
  deployer.deploy(Allevamento);
  deployer.deploy(analisi);
  deployer.deploy(produzione);
};


