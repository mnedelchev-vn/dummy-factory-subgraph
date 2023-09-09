# Subgraph DEMO on Goerli

### Project commands:
* ```npm install``` - Downloading required packages.
* ```node js/index.js``` - send query and read data from the subgraph.
    
### PURPOSE:
This is a **DEMO** Subgraph project deployed on Goerli testnet just to test the functionality of subgraph crawling, because the default event reading provided by web3.js or ethers.js is very limited when it comes to filtering the data and flexibility. Folder ```dummy-factory-contract``` contains dummy factory contract which deploys dummy proxy contracts. By the time new proxy is deployed a new event is fired on-chain *(```event ProxyCreation(address creator, address proxy)```)* and because we rely on Subgraph we don't have to mark the event parameters with the ```indexed``` keyword which will also save us some gas.

Thanks to Subgraph it's very easy to make relations between entities, sorting & filtering the data ( in our example that would be the proxy and the proxy creator ).

File ```node/index.js``` represents an example of how we can send queries to the deployed subgraph.

### Links:
* [Link for queries](https://api.studio.thegraph.com/query/52030/dummy-factory/version/latest)