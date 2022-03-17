export const POLLFACTORY_ADDRESS = "0x0EA9DE307E7eEc6C1d35a6975A16b3dC27493d46"; //"0xaA1D1614BC7b632803CA74Bb5130A342F0489290";

export const POLLFACTORY_ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_pollCode",
        type: "string"
      },
      {
        internalType: "string",
        name: "_pollTitle",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256"
          },
          {
            internalType: "string",
            name: "name",
            type: "string"
          },
          {
            internalType: "uint256",
            name: "totalVotes",
            type: "uint256"
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "id",
                type: "uint256"
              },
              {
                internalType: "string",
                name: "name",
                type: "string"
              },
              {
                internalType: "uint256",
                name: "votes",
                type: "uint256"
              }
            ],
            internalType: "struct PollVariables.Candidate[]",
            name: "candidates",
            type: "tuple[]"
          }
        ],
        internalType: "struct PollVariables.Category[]",
        name: "_categories",
        type: "tuple[]"
      },
      {
        internalType: "address[]",
        name: "_voters",
        type: "address[]"
      },
      {
        internalType: "bool",
        name: "_isBasicPoll",
        type: "bool"
      }
    ],
    name: "createPoll",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "pollTitle",
        type: "string"
      },
      {
        indexed: true,
        internalType: "string",
        name: "pollCode",
        type: "string"
      },
      {
        indexed: true,
        internalType: "address",
        name: "pollAddress",
        type: "address"
      }
    ],
    name: "pollCreated",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_pollCode",
        type: "string"
      }
    ],
    name: "getPollAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

export const POLL_ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_pollCode",
        type: "string"
      },
      {
        internalType: "string",
        name: "_pollTitle",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256"
          },
          {
            internalType: "string",
            name: "name",
            type: "string"
          },
          {
            internalType: "uint256",
            name: "totalVotes",
            type: "uint256"
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "id",
                type: "uint256"
              },
              {
                internalType: "string",
                name: "name",
                type: "string"
              },
              {
                internalType: "uint256",
                name: "votes",
                type: "uint256"
              }
            ],
            internalType: "struct PollVariables.Candidate[]",
            name: "candidates",
            type: "tuple[]"
          }
        ],
        internalType: "struct PollVariables.Category[]",
        name: "_categories",
        type: "tuple[]"
      },
      {
        internalType: "address[]",
        name: "_voters",
        type: "address[]"
      },
      {
        internalType: "bool",
        name: "_isBasicPoll",
        type: "bool"
      }
    ],
    stateMutability: "payable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "categoryID",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "candidateID",
        type: "uint256"
      }
    ],
    name: "voteCasted",
    type: "event"
  },
  {
    inputs: [],
    name: "getPollDetails",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      },
      {
        internalType: "string",
        name: "",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256"
          },
          {
            internalType: "string",
            name: "name",
            type: "string"
          },
          {
            internalType: "uint256",
            name: "totalVotes",
            type: "uint256"
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "id",
                type: "uint256"
              },
              {
                internalType: "string",
                name: "name",
                type: "string"
              },
              {
                internalType: "uint256",
                name: "votes",
                type: "uint256"
              }
            ],
            internalType: "struct PollVariables.Candidate[]",
            name: "candidates",
            type: "tuple[]"
          }
        ],
        internalType: "struct PollVariables.Category[]",
        name: "",
        type: "tuple[]"
      },
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPollStatus",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256"
          },
          {
            internalType: "string",
            name: "name",
            type: "string"
          },
          {
            internalType: "uint256",
            name: "totalVotes",
            type: "uint256"
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "id",
                type: "uint256"
              },
              {
                internalType: "string",
                name: "name",
                type: "string"
              },
              {
                internalType: "uint256",
                name: "votes",
                type: "uint256"
              }
            ],
            internalType: "struct PollVariables.Candidate[]",
            name: "candidates",
            type: "tuple[]"
          }
        ],
        internalType: "struct PollVariables.Category[]",
        name: "",
        type: "tuple[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_prospectiveVoter",
        type: "address"
      }
    ],
    name: "isEligible",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_categoryID",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_candidateID",
        type: "uint256"
      }
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
