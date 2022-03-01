// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
pragma experimental ABIEncoderV2;

import "./Poll.sol";
import "./PollVariables.sol";

contract OneVoteFactory is PollVariables {
    mapping(string => address) polls;
    event pollCreated(string pollTitle, string pollCode, address pollAddress);

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
            polls[_pollCode] == 0x0000000000000000000000000000000000000000,
            "Pollcode already in use!"
        );
        polls[_pollCode] = address(
            new Poll(
                _pollCode,
                _pollTitle,
                _startTime,
                _endTime,
                _categories,
                _voters,
                _isBasicPoll
            )
        );
        emit pollCreated(_pollTitle, _pollCode, polls[_pollCode]);
    }

    function getPollAddress(string memory _pollCode)
        public
        view
        returns (address)
    {
        return polls[_pollCode];
    }
}
