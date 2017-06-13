pragma solidity ^0.4.8;

import "./CVExtender.sol";

contract CurriculumVitae is CVExtender {
    
    struct Identity {
        string _name;
        string _title;
        string _description;
        string _url;
        string _email;
    }

    Identity identity;

    function setIdentity(string name, string title, string description, string url, string email) {
        identity = Identity(name, title, description, url, email);
    }
     
    /**
     * Below is for our CV!
     **/
    function getAddress() constant returns(string) {
        return identity._url; //"http://www.example.org";
    }
    
    function getDescription() constant returns(string) {
        return identity._description; //"This is an example";
    }

    function getTitle() constant returns(string) {
        return identity._title; //"SimpleExample";
    }

    function getAuthor() constant returns(string, string) {
        return (identity._name, identity._email); 
        // ("Thomas", "thomas@example.org");
    }
}