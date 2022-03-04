// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
pragma experimental ABIEncoderV2;

import "./Poll.sol";
import "./PollVariables.sol";

contract OneVoteFactory is PollVariables {
    mapping(string => Poll) polls;
    event pollCreated(
        string indexed pollTitle,
        string indexed pollCode,
        address indexed pollAddress
    );

    constructor() payable {}

    function createPoll(
        string memory _pollCode,
        string memory _pollTitle,
        uint256 _startTime,
        uint256 _endTime,
        Category[] memory _categories,
        address[] memory _voters,
        bool _isBasicPoll
    ) public payable {
        require(
            polls[_pollCode] ==
                Poll(0x0000000000000000000000000000000000000000),
            "Pollcode already in use!"
        );
        polls[_pollCode] = new Poll(
            _pollCode,
            _pollTitle,
            _startTime,
            _endTime,
            _categories,
            _voters,
            _isBasicPoll
        );
        emit pollCreated(_pollTitle, _pollCode, address(polls[_pollCode]));
    }

    function getPollAddress(string memory _pollCode)
        public
        view
        returns (address)
    {
        require(
            polls[_pollCode] !=
                Poll(0x0000000000000000000000000000000000000000),
            "Poll doesn't exist! Check your spelling and try again."
        );
        require(
            polls[_pollCode].isEligible(msg.sender),
            "You're not eligible to participate in this poll!"
        );
        return address(polls[_pollCode]);
    }
}
