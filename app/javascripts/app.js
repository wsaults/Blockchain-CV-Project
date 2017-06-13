// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";

import "bootstrap/dist/css/bootstrap.css";

// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'

// Import our contract artifacts and turn them into usable abstractions.
import curriculumvitae_artifacts from '../../build/contracts/CurriculumVitae.json'

// CurriculumVitae is our usable abstraction, which we'll use through the code below.
var CurriculumVitae = contract(curriculumvitae_artifacts);

// The following code is simple to show off interacting with your contracts.
// As your needs grow you will likely need to change its form and structure.
// For application bootstrapping, check out window.addEventListener below.
var accounts;
var account;

window.App = {
  start: function() {
    var self = this;

    // Bootstrap the CurriculumVitae abstraction for Use.
    CurriculumVitae.setProvider(web3.currentProvider);

    // Get the initial account balance so it can be displayed.
    web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }

      if (accs.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }

      accounts = accs;
      account = accounts[0];

      self.showInfo();
      self.showTitle();
      self.showDescription();
      self.showTipAddress();
    });

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
      particlesJS.load('particles-js', '../app/assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
      });
  },

  showInfo: function() {
    var self = this;

    self.showAuthor();
    self.showTitle();
    self.showDescription();
    self.showWebsite();
    self.showTipAddress();
  },

  showAuthor: function() {
    var self = this;

    var contract;
    CurriculumVitae.deployed().then(function(instance) {
      contract = instance;
      return contract.getAuthor.call();
    }).then(function(value) {
      let [author, email] = value
      document.getElementById("author").innerHTML = author;
      document.getElementById("email").innerHTML = email;
    }).catch(function(e) {
      console.log(e);
      self.setStatus("Error getting author or email; see log.");
    });
  },

  showTitle: function() {
    var self = this;

    var contract;
    CurriculumVitae.deployed().then(function(instance) {
      contract = instance;
      return contract.getTitle.call();
    }).then(function(value) {
      document.getElementById("title").innerHTML = value;
    }).catch(function(e) {
      console.log(e);
      self.setStatus("Error getting title; see log.");
    });
  },

  showDescription: function() {
    var self = this;

    var contract;
    CurriculumVitae.deployed().then(function(instance) {
      contract = instance;
      return contract.getDescription.call();
    }).then(function(value) {
      document.getElementById("description").innerHTML = value;
    }).catch(function(e) {
      console.log(e);
      self.setStatus("Error getting title; see log.");
    });
  },

  showWebsite: function() {
    var self = this;

    var contract;
    CurriculumVitae.deployed().then(function(instance) {
      contract = instance;
      return contract.getAddress.call();
    }).then(function(value) {
      document.getElementById("website").innerHTML = value;
      var link = document.getElementById("websiteAnchor");
      link.setAttribute("href", value);
    }).catch(function(e) {
      console.log(e);
      self.setStatus("Error getting website url; see log.");
    });
  },

  showTipAddress: function() {
    var self = this;

    var contract;
    CurriculumVitae.deployed().then(function(instance) {
      contract = instance;
      return contract.getTipAddress.call();
    }).then(function(value) {
      document.getElementById("tipAddress").innerHTML = value;
    }).catch(function(e) {
      console.log(e);
      self.setStatus("Error getting tip address; see log.");
    });
  }

};

window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  App.start();
});
