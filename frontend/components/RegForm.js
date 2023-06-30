import { useEffect, useState } from 'react';
import { checkConnection, getProvider, getSigner } from '../wallet';
import { ethers } from 'ethers';
import { redirect } from 'next/dist/server/api-utils';
function RegForm ({ instance }) {
  const [input1, setInput1] = useState(undefined);
  const [input2, setInput2] = useState(undefined);


const contractAddress = process.env.CONTRACT_ADDRESS;
const abi = process.env.ABI;


  const handleInputChange1 = (e) => {
    setInput1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setInput2(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    sendInput();
  };

  async function sendInput () {

    try {

      const provider = getProvider();
      const signer = await getSigner();
      const smartContract = new ethers.Contract(contractAddress, abi, provider);
      const contractWithSigner = smartContract.connect(signer);
  
      const response = await contractWithSigner.regOrg(input1,input2);
  
      console.log(response)
      return
    } catch (error) {
      alert(error)
      return
    }
  }

  return (
      <div className="flex justify-center items-center h-screen">
    <div className="w-3/4 h-96">
      <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input1">
            Your Organization's address:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="input1"
            type="text"
            value={input1}
            onChange={handleInputChange1}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input2">
            Token's address:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="input2"
            type="text"
            value={input2}
            onChange={handleInputChange2}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Register Your Organisation!
        </button>
      </form>
    </div>
    </div>
  );
};

export default RegForm;
