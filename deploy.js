const fs = require('fs');
const ethers = require('ethers');
const Ganache = require('ganache-core');

const bytecode = fs.readFileSync("_Example_sol_Example.bin").toString();
const abi = fs.readFileSync("_Example_sol_Example.abi").toString();

const ganache = Ganache.provider();
const provider = new ethers.providers.Web3Provider(ganache);

const signer = provider.getSigner(0);

const factory = new ethers.ContractFactory(abi, bytecode, signer);

factory.deploy(525).then((contract) => {
  contract.x().then(console.log);
});
