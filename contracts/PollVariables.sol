// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
pragma experimental ABIEncoderV2;

contract PollVariables {
    struct Candidate {
        uint256 id;
        string name;
        uint256 votes;
    }

    struct Category {
        uint256 id;
        string name;
        Candidate[] candidates;
    }

    Category[] categories;

    mapping(address => bool) eligibleVoters;

    struct VoteStatus {
        mapping(address => bool) hasVoted;
    }

    VoteStatus[] voteStatus;
}
