// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract GSD_NFT is ERC1155Upgradeable, OwnableUpgradeable {
    // Initialize the contract

    uint256 constant public MAX_SUPPLY = 98000;
    uint256 public totalSupply;

    function initialize(string memory _uri) initializer public {
        totalSupply = 0;
        __ERC1155_init(_uri);
        __Ownable_init(msg.sender);
    }

    // Mint new tokens
    function mint(address account, uint256 id, uint256 amount, bytes memory data) external {
        require(totalSupply <= MAX_SUPPLY, "GSD: Maximum Token Supply reached.");
        totalSupply ++;
        _mint(account, id, amount, data);
    }

    // Burn tokens
    function burn(address account, uint256 id, uint256 amount) external onlyOwner {
        require(msg.sender == account || isApprovedForAll(account, msg.sender), "Caller is not approved");
        totalSupply--;
        _burn(account, id, amount);
    }

    // Other custom functions...
}
