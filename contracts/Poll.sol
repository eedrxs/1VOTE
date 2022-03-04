// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
pragma experimental ABIEncoderV2;

import "./PollVariables.sol";

contract Poll is PollVariables {
    string pollCode;
    string pollTitle;
    uint256 startTime;
    uint256 endTime;
    bool isBasicPoll;
    /*  ( Category[] categories )
        ( mapping(address => bool) eligibleVoters )
        ( VoteStatus[] voteStatus )
        ... are inherited from PollVaribles */

    event voteCasted(uint256 indexed categoryID, uint256 indexed candidateID);

    constructor(
        string memory _pollCode,
        string memory _pollTitle,
        uint256 _startTime,
        uint256 _endTime,
        Category[] memory _categories,
        address[] memory _voters,
        bool _isBasicPoll
    ) payable {
        pollCode = _pollCode;
        pollTitle = _pollTitle;
        startTime = _startTime;
        endTime = _endTime;
        isBasicPoll = _isBasicPoll;

        // Store categories and candidates
        for (uint256 i; i < _categories.length; i++) {
            categories.push();
            categories[i].id = _categories[i].id;
            categories[i].name = _categories[i].name;
            for (uint256 j; j < _categories[i].candidates.length; j++) {
                categories[i].candidates.push();
                categories[i].candidates[j].id = _categories[i]
                    .candidates[j]
                    .id;
                categories[i].candidates[j].name = _categories[i]
                    .candidates[j]
                    .name;
                categories[i].candidates[j].votes = 0;
            }
        }

        // Store eligible voters
        for (uint256 i; i < _voters.length; i++) {
            eligibleVoters[_voters[i]] = true;
        }

        // Create structure to store voters that have voted
        for (uint256 i; i < _categories.length; i++) {
            voteStatus.push();
        }
    }

    function vote(uint256 _categoryID, uint256 _candidateID) external {
        require(
            isEligible(msg.sender),
            "You're not eligible to participate in this poll!"
        );
        require(
            voteStatus[_categoryID].hasVoted[msg.sender] == false,
            "You've already voted!"
        );
        // require(block.timestamp >= startTime, "Poll has not started!");
        // require(block.timestamp <= startTime, "Poll has ended!");

        voteStatus[_categoryID].hasVoted[msg.sender] = true;
        categories[_categoryID].candidates[_candidateID].votes += 1;
        emit voteCasted(_categoryID, _candidateID);
    }

    function getPollDetails()
        external
        view
        returns (
            string memory,
            string memory,
            uint256,
            uint256,
            Category[] memory,
            bool
        )
    {
        return (
            pollCode,
            pollTitle,
            startTime,
            endTime,
            getPollStatus(),
            isBasicPoll
        );
    }

    function getPollStatus() public view returns (Category[] memory) {
        return (categories);
    }

    function isEligible(address _prospectiveVoter) public view returns (bool) {
        return eligibleVoters[_prospectiveVoter];
    }
}
