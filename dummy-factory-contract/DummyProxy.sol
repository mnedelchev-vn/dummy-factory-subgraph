// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.2;

contract DummyProxy {
    uint public dummyNum;

    constructor(
        uint _dummyNum
    ) {
        dummyNum = _dummyNum;
    }
}