# 1VOTE
### The Polling Platform of the Decentralise Web

![chrome_htyvZbS9zI](https://user-images.githubusercontent.com/76642653/160803618-3d179c79-a5b9-46f8-b093-b1a415e2e91e.png)



A free-for-all, blockchain-based polling platform built on the Ethereum Kovan testnet. With so much discussion around the potential of blockchain technology in conducting elections and seeing the absence of any substantial effort to exploit this potential over the years, this project was a move towards establishing an actual working implementation of a polling system that was blockchain-based and that was usable and open to all.




### Usage

All you need to access this platform is an an ethereum account with Kovan test ETH (you can get some from Kovan faucets like https://faucets.chain.link) and an ethereum-enabled browser. For PC users, you need to have the Metamask plugin installed in your browser.

The interface of the Dapp is intuitive and there isn't much to explain. When setting up a poll, ensure you leave no field unfilled. Upload the ethereum addresses of accounts that would be allowed to participate in a poll as a single array in a JSON document. E.g.

```
  {
    "votersAdrresses": [
      "0xa6dcDeA787B1DE2eC2C43726e890B5686e3e479D",
      "0x77040d57a4C0878e7F5b0132075E398238E29802",
      "0x34fd4ec1281A76D7eF102709f6eDc93741d51948",
      "0xEa60695620eaC0A8274E106A498c4805F51E2227",
      "0x6332764372752Bd79C003eD8C1AE9cD6af2ea2A7",
      "0x89B0d11D895608f1D883010d221084095Ee9a1E6",
      "0x442e00Be0d03543bD6D43f72DC1dcE9e20e2091a",
      "0xa0BD1A6c76D240b0da6ed77517acA06640959c45",
      "0x80eA0401a37fd3bc662aDDAa5A0e075acFE0c4f1",
      "0x4C1B5AC2734C4f74480Ad6efeD93c6c75EbF8A3B"
    ]
  }
```


The JSON document should have only one entry and that should be the array of ethereum account addresses that would be eligible to participate in the poll. You can name the entry however you please — just ensure the document contains just one entry!




### Donations

There is so much that can be done to improve this project. I'd continue working on it and making it better and extending its capabilities.

Please, donate to support me as I work on this project.

Ethereum: 0xa6dcDeA787B1DE2eC2C43726e890B5686e3e479D
