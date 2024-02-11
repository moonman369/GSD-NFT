// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract MyNFT is ERC1155Upgradeable, OwnableUpgradeable {
    // Initialize the contract
    function initialize(string memory _uri) initializer public {
        __ERC1155_init(_uri);
        __Ownable_init(msg.sender);
    }

    // Mint new tokens
    function mint(address account, uint256 id, uint256 amount, bytes memory data) external onlyOwner {
        _mint(account, id, amount, data);
    }

    // Burn tokens
    function burn(address account, uint256 id, uint256 amount) external {
        require(msg.sender == account || isApprovedForAll(account, msg.sender), "Caller is not approved");
        _burn(account, id, amount);
    }

    // Other custom functions...
}
