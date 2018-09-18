
pragma solidity ^0.4.24;

contract Election {

    // Smoke test to ensure everything is set up correctly, such that it can be deployed and behaves as expected
    
    //  Store candidate
    //  Read candidate
    string public candidate;  

    constructor() public {
      candidate = "Candidate 1";
    }

}
