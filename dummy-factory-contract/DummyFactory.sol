// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.2;

import "./DummyProxy.sol";

contract DummyFactory {
    event ProxyCreation(address creator, address proxy);

    function deploy(
        uint _dummyNum
    ) external {
        DummyProxy dummyProxy = new DummyProxy(_dummyNum);
        emit ProxyCreation(msg.sender, address(dummyProxy));
    }
}