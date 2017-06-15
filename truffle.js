// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    live: {
        network_id: 1, // Ethereum public network
        host: '127.0.0.1',
        port: '8545',
        gas: 3000000,
        from: "0x05bC223f5fBd2dca548a070C19d6F183671C76a1"
    },
    morden: {
        network_id: 2, // Official Ethereum test network
        host: '127.0.0.1',
        port: '8545',
        gas: 3000000,
        from: "0x92440b258C944AB5136C82963E1452793CD90eb0"
    },
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    }
  }
}
