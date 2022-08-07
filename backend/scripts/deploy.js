
const {ethers} = require("hardhat")


async function main(){

  const whitelistContract = await ethers.getContractFactory("whitelist");

  const deployedContract = await whitelistContract.deploy(10);

  await deployedContract.deployed();


  console.log("The Whitelist Contract is deployed to address : ",deployedContract.address );


}


main()
    .then(()=>process.exit(0))
    .catch((er)=>{
      console.log("Error while deploying : ",err)
    })

    