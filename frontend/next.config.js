/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    CONTRACT_ADDRESS:`${CONTRACT_ADDRESS}`,
    ABI:[
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "Orgs",
        "outputs": [
          {
            "internalType": "address",
            "name": "add",
            "type": "address"
          },
          {
            "internalType": "contract ERC20",
            "name": "token",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "orgAdd",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "type_",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "employeeAddress",
            "type": "address"
          }
        ],
        "name": "addEmployee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "orgAdd",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "type_",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "dur",
            "type": "uint256"
          }
        ],
        "name": "createVestingSchedule",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "add_",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "type_",
            "type": "string"
          }
        ],
        "name": "displayOrgVestSchedule",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "tokenAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "duration",
                "type": "uint256"
              }
            ],
            "internalType": "struct VestingToken.vestingSchedule",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "add_",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "token_add",
            "type": "address"
          }
        ],
        "name": "regOrg",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "orgAdd",
            "type": "address"
          }
        ],
        "name": "requestTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "orgAdd",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "employeeAdd",
            "type": "address"
          }
        ],
        "name": "sendTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
  }
}

module.exports = nextConfig