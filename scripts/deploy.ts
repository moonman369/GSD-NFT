import { ethers } from "hardhat";
import { deployGSDNFT } from "./utils";

async function main() {
  const [deployer] = await ethers.getSigners();
  const gsdNft = await deployGSDNFT(deployer.address, "sample_uri");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
