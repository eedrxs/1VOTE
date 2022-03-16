const pollData = {
  pollCode: "SUG22",
  pollTitle: "SUG Election 2022",
  pollAddress: "0xa88061643dc3B00dbA8487b38e4Ba5d4003ec386",
  startTime: 1647344923.714,
  endTime: 1647345041.042,
  categories: [
    [
      0,
      "President",
      [
        [0, "Donice Ubaru", 284],
        [1, "Gbenga Kamoru", 150]
      ],
      434
    ],
    [
      1,
      "Vice-President",
      [
        [0, "Osazuwa Efosa", 89],
        [1, "Majid Ibrahim", 197],
        [2, "Stanley Ikechukwu", 56]
      ],
      342
    ]
  ],
  isBasicPoll: false
};

export function getPollDetails() {
  return pollData;
}
