module.exports = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'questAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: '_content',
        type: 'string',
      },
    ],
    name: 'QuestCreated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_content',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_terminationDate',
        type: 'uint256',
      },
      {
        internalType: 'address payable',
        name: '_aragonGovernAddress',
        type: 'address',
      },
      {
        internalType: 'address payable',
        name: '_fallbackAddress',
        type: 'address',
      },
    ],
    name: 'createQuest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
