module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  },
  compilers: {
    solc: {
       version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
       settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,    // abbassa anche i costi del deploy dei contratti perchè a livello macchina rende le operazioni più semplici
          runs: 100
        },
      
      }
    }
  }
};

//0x798a2716190888ce9ba5baccb9f071cb2e1b08235d72a6025d854db3ef9ab34e
