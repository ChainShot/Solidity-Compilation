// SPDX-License-Identifier: MIT
pragma solidity ^0.6.10;

import "./SafeMath.sol";

contract Example {
  using SafeMath for uint256;

  uint public x = 225;

  constructor(uint y) public {
    require(x > y, "didnt expect x to be less than y");
    x = x.add(y);
  }
}
