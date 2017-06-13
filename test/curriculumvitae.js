var CurriculumVitae = artifacts.require("./CurriculumVitae.sol");

contract('CurriculumVitae', function(accounts) {
    // it('should be a placeholder test', function() {
    //     // var contractInstance;
    //     // return wallet.deployed().then(function(instance) {
    //     //     contractInstance = instance;
    //     //     return contractInstance.sendTransaction({value: web3.toWei(10, 'ether'), address: contractInstance.address, from: accounts[0]});
    //     // }).then(function(results) {
    //     //     assert.equal(web3.eth.getBalance(contractInstance.address).toNumber(), web3.toWei(10, 'ether'), 'The Balance is the same');
    //     // });

    //     assert.equal('test', 'test'), 'Sample test';
    // });

    it("setIdentity function should fill in values", function() {
        var contractInstance;
        return CurriculumVitae.deployed().then(function(instance) {
            contractInstance = instance;
            return contractInstance.setIdentity("Will Saults", "Developer", "Some guy learning Solidity", "http://example.com", "email@example.com", "0x00000000000000000000000000000000deadbeef");
        }).then(function() {
            return contractInstance.getAuthor();
        }).then(function(results) {
            var [author, email] = results;
            assert.equal(author, "Will Saults", "The authors are the same");
            assert.equal(email, "email@example.com", "The emails are the same");
        }).then(function() {
            return contractInstance.getTitle();
        }).then(function(results) {
            assert.equal(results, "Developer", "The titles are the same");
        }).then(function() {
            return contractInstance.getDescription();
        }).then(function(results) {
            assert.equal(results, "Some guy learning Solidity", "The description is the same");
        }).then(function() {
            return contractInstance.getAddress();
        }).then(function(results) {
            assert.equal(results, "http://example.com", "The urls are the same");
        }).then(function() {
            return contractInstance.getTipAddress();
        }).then(function(results) {
            assert.equal(results, "0x00000000000000000000000000000000deadbeef", "The tip address is the same");
        });
    });
});
