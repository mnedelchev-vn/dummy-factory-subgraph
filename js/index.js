#!/usr/bin/ nodejs
const axios = require("axios");

async function init() {
    const graphLink = 'https://api.studio.thegraph.com/query/52030/dummy-factory/version/latest';
    const graphQuery = `
    {
        proxyCreations(
              orderBy: blockNumber
        ) {
            id
            blockNumber
            blockTimestamp
            transactionHash
            gasPrice
            creator {
                id
            }
        }
        users {
            id
            proxyCreations(
                orderBy: blockNumber
            ) {
                id
                blockNumber
                blockTimestamp
                transactionHash
                gasPrice
            }
        }
    }
    `;

    const graphDeposits = await axios({
        url: graphLink,
        method: 'post',
        data: {
            query: graphQuery
        }
    });

    if (graphDeposits.data.data != undefined && (graphDeposits.data.data.hasOwnProperty('proxyCreations') || graphDeposits.data.data.hasOwnProperty('users'))){
        console.log(graphDeposits.data.data.proxyCreations, 'proxyCreations');
        console.log(graphDeposits.data.data.users, 'users');
    } else {
        console.error('ERROR: No deploys found!');
        return false;
    }
}
init();