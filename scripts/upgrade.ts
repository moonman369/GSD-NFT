import { ethers } from "hardhat";
import { upgradeGSDNFT } from "./utils";

const GSD_PROXY_ADDRESS = "0xe8b1ae3131E3aeD530198d938eDa6E1c1F173970";
const GSD_UPGRADED_ARTIFACT_NAME = "GSD_NFTv2";

async function main() {
  //   const [deployer] = await ethers.getSigners();
  const gsdNftUpgraded = await upgradeGSDNFT(
    GSD_PROXY_ADDRESS,
    GSD_UPGRADED_ARTIFACT_NAME
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
