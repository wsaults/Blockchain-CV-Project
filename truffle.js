// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    live: {
        network_id: 1, // Ethereum public network
    },
    morden: {
        network_id: 2, // Official Ethereum test network
        host: '127.0.0.1',
        port: '8545',
        network_id: '*',
        gas: 3000000
    },
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    }
  }
}
