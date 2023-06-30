import { ethers } from 'ethers';

let provider;
let signer;
let connected;
let account;

export function getProvider() {
  if (!provider) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
  }
  return provider;
}

export async function getSigner() {
  if (!signer) {
    await window.ethereum.enable();
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
  }
  return signer;
}
export async function checkConnection() {
  const provider = getProvider();
  if (provider) {
    const accounts = await provider.listAccounts();
    if (accounts.length > 0) {
      connected = true;
      account = accounts[0];
    }

  }
}

export function walletDetails() {
  if(connected){
    return account;
  } else return null;
}

