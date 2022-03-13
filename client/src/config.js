export const POLLFACTORY_ADDRESS = "0xa2A2a3BAe98414e89568A172553853d4067A77De";

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
