// Allows us to use ES6 in our migrations and tests.
require('babel-register')
// var dotenv = require('dotenv');
// dotenv.load();

// var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    live: {
      network_id: 1, // Ethereum public network
      // provider: new HDWalletProvider(process.env.MAIN, "https://mainnet.infura.io/"),
      from: "0x05bc223f5fbd2dca548a070c19d6f183671c76a1",
      gas: 4000000,
      gasPrice: 25000000000
    },
    morden: {
      network_id: 2, // Official Ethereum test network
      host: '127.0.0.1',
      port: 8545,
      gas: 3000000,
      from: ""
    },
    ropsten: {
      // provider: new HDWalletProvider(process.env.ROPSTEN, "https://ropsten.infura.io/"),
      network_id: 3,
      host: '127.0.0.1',
      port: 8545,
      gas: 3000000,
      from: "0x92440b258C944AB5136C82963E1452793CD90eb0"
    },
    // rinkeby: {
    //   // provider: new HDWalletProvider(process.env.RINKEBY, "https://www.rinkeby.io/"),
    //   network_id: 4
    // },
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    }
  }
}
