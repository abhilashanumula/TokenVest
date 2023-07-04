TokenVest: 
_Bridging Organizations and Stakeholders through a Token Vesting DApp_
## Table of Contents

- [Table of Contents](#table-of-contents)
- [Smart Contract Overview](#smart-contract-overview)
- [Frontend](#frontend)
- [Run this Locally](#run-this-locally)


## Smart Contract Overview

This Solidity contract implements a vesting token system where organizations can create vesting schedules for their employees. The contract is based on the ERC20 token standard and utilizes the OpenZeppelin library.

Features
- Organizations can register themselves and specify the token they will use.
- Vesting schedules can be created for different employee types, specifying the token amount and duration.
- Employees can be added to organizations with their respective employee type and start time.
- Organizations can send tokens to employees once the vesting period has ended.
- Employees can request tokens once they have a positive token balance.

Contract Structure
- `VestingToken`: The main contract that manages the vesting token system.
- `vestingSchedule`: Struct defining the token amount and duration for a vesting schedule.
- `employee`: Struct defining the employee details, including their address, organization address, employee type, start time, balance, and vesting schedule.
- `organization`: Struct defining the organization details, including the organization address, ERC20 token contract, and mappings for employees and vesting schedules.
- `Orgs`: Mapping to store organizations and their associated data.

Usage
- Register an organization by calling the `regOrg` function, providing the organization's address and the address of the ERC20 token contract they will use.
- Create vesting schedules for different employee types using the `createVestingSchedule` function, specifying the organization address, employee type, token amount, and duration.
- Add employees to organizations by calling the `addEmployee` function, providing the organization address, employee type, and employee address.
- Once the vesting period has ended, organizations can send tokens to employees using the `sendTokens` function, passing the organization and employee addresses.
- Employees can request tokens by calling the `requestTokens` function, passing the organization address.

## Frontend
This is a frontend application built using Next.js for interacting with the VestingToken smart contract. It provides a user interface for organizations and employees to register, create vesting schedules, add employees, and perform token transactions.
  
  Features
- Register an organization with the contract.
- Create vesting schedules for different employee types.
- Add employees to organizations.
- Perform token transactions such as sending tokens to employees and requesting tokens.

Configuration
Before running the application, make sure to configure the following:

- Connect the frontend to a blockchain network with the VestingToken smart contract deployed.
- Update the contract address and ABI in the `next.config.js` file to match your deployed contract.
Make sure you have MetaMask installed and configured in your browser.


## Run this Locally
1. Install packages: `npm install`
2. Create a local Eth node: `npx hardhat node`
3. Deploy the contract to the local Eth network: `npx hardhat run --network local scripts/deploy.js`
4. If you want deploy the contract on testnet, check [this](https://github.com/abhilashanumula/Solidity/blob/master/DegenToken/README.md) .
5. Start the Frontend: `npm run dev`
6. Open your browser and visit http://localhost:3000 to access the application.


