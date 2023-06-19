// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/*  

Entity ===> Data Structure :

    1) Proposal ==> struct
    2) list of proposals ==> struct[]
    3) voter ==> struct 
    4) Voters ==> mapping(address => struct)
    5) chairperson => address

Functionality ===> function

    1) register
    2) vote
    3) count    

*/

contract Ballot{

    struct Proposal {

        uint voteCount;

    }

    Proposal[] proposals ;

    struct Voter {

        uint vote_id;

        uint voteWeidth;

        bool voted;

    }

    mapping( address => Voter ) public voters;

    address chairPerson ;

    uint[] sameVoteCount ;

    uint public WinnerID;

    uint public WinnerCount;



    constructor( uint8 proposalValue ){

        chairPerson = msg.sender ;

        for(uint i=0 ; i<proposalValue ; i++){

            proposals.push(Proposal({voteCount:0}));

        }

        voters[chairPerson].voteWeidth=2;

    }


    function register(address newVoter) public  {

        require(msg.sender==chairPerson , "you are not owner !");  // only owner can register new voter !

        require(newVoter != msg.sender , "owner was registerd already !");  // owner can not register twice !

        require( voters[newVoter].voted == false , "new voter must not vote already !");  // register only new voter  !!

        voters[newVoter].voteWeidth = 1;  // register complited !

    }


    function vote_(uint voteId) public {

        require( voters[msg.sender].voted == false , " you  voted already !!");  // voter must not vote already !

        require( voters[msg.sender].voteWeidth !=0 , " you have not registerd yet !"); // voter must have registerd already !

        proposals[voteId].voteCount += voters[msg.sender].voteWeidth ; 

        voters[msg.sender].voted = true ;

        voters[msg.sender].vote_id = voteId ;

    }



    function count() public {

        require(msg.sender == chairPerson , " you are not owner !") ; // only owner can count the votes !



        // sameVoteCount.push(proposals[0].voteCount);

        for(uint i = 0 ; i < proposals.length ; i++){

                if(proposals[i].voteCount > WinnerCount){

                    WinnerCount = proposals[i].voteCount;

                    WinnerID = i ;

                    while(sameVoteCount.length !=0){

                        sameVoteCount.pop();

                    }

                    sameVoteCount.push(i);

                }

                else if (proposals[i].voteCount == WinnerCount){
                    
                        sameVoteCount.push(i);

                }



        }

        WinnerID = sameVoteCount[uint(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % sameVoteCount.length] ;
        WinnerCount = proposals[WinnerID].voteCount ;

    }

}
