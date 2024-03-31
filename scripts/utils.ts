import { ethers, upgrades } from "hardhat";

export const deployGSDNFT = async (
  deployerAddress: string,
  baseUri: string
  // totalSupply: number
) => {
  const gas = await ethers.provider.getFeeData();
  const deployer = await ethers.getSigner(deployerAddress);

  const GsdNft = await ethers.getContractFactory("GSD_NFT");

  // const gsdNft = await GsdNft.connect(deployer).deploy(baseUri, totalSupply);
  const gsdNft = await upgrades.deployProxy(GsdNft, [baseUri]);

  await gsdNft.waitForDeployment();

  console.log(
    `GSD NFT contract has been deployed at address: ${gsdNft.target} .....`
  );

  return gsdNft;
};

export const upgradeGSDNFT = async (
  gsdAddress: string,
  artifactName: string
) => {
  const GsdNft2 = await ethers.getContractFactory(artifactName);
  console.log(`Upgrading GSD NFT contract @ address: ${gsdAddress}`);
  const gsdNft2 = await upgrades.upgradeProxy(gsdAddress, GsdNft2);
  await gsdNft2.waitForDeployment();
  console.log("GSD NFT has been successfully upgraded.");
  return gsdNft2;
};

module.exports = {
  deployGSDNFT,
  upgradeGSDNFT,
};
