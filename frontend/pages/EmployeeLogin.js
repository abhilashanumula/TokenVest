import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { ethers } from 'ethers';
import { checkConnection, getProvider, getSigner } from '../wallet';
import Footer from '../components/Foot';

function EmployeeLogin(){
  const [orgAdd, setOrgAdd] = useState(undefined);
  const [empAdd, setEmpAdd] = useState(undefined);


  useEffect(()=>{
    checkConnection();
  },[])

  const contractAddress = process.env.CONTRACT_ADDRESS;
  const abi = process.env.ABI;

  async function handleFormSubmit(e) {
    e.preventDefault();
    try {

      const provider = getProvider();
      const signer = await getSigner();
      const smartContract = new ethers.Contract(contractAddress, abi, provider);
      const contractWithSigner = smartContract.connect(signer);
  
      const response = await contractWithSigner.requestTokens(orgAdd);
  
      console.log(response)
      return
    } catch (error) {
      alert(error);
      return 
    }
  }

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
    <div className="w-3/4 h-96">
      <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
       onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input1">
            Your Organization's address:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="input1"
            type="text"
            value={orgAdd}
            onChange={(e)=>setOrgAdd(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input1">
            Your wallet address:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="input1"
            type="text"
            value={empAdd}
            onChange={(e)=>setEmpAdd(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type='submit'
        >
         Get Tokens!
        </button>
      </form>
    </div>
    </div>

    <Footer />
    </div>
  );
};

export default EmployeeLogin;
