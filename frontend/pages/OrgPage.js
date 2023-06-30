import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers';
import { checkConnection, getProvider, getSigner } from '../wallet';
import Navbar from '../components/Navbar'
import Footer from '../components/Foot';

function OrgPage() {
  const [orgAdd, setOrgAdd] = useState(undefined);
  const [empAdd, setEmpAdd] = useState(undefined);
  const [type, setType] = useState(undefined);
  const [typeEmp, setTypeEmp] = useState(undefined);
  const [amount, setAmount] = useState(0);
  const [duration, setDuration] = useState(0);
  const contractAddress = process.env.CONTRACT_ADDRESS;
  const abi = process.env.ABI;
  let contractWithSigner;
 async function getInstance(){
      try {
        await checkConnection();
        const provider = getProvider();
        const signer = await getSigner();
        const smartContract = new ethers.Contract(contractAddress, abi, provider);
        contractWithSigner = smartContract.connect(signer);

      } catch (error) {
        alert(error)
      }    

    }
  async function createOrgVestingSchedule (){
    try{
      await getInstance();
      const response = await contractWithSigner.createVestingSchedule(orgAdd,type,amount,duration);
      console.log(response);
    } catch (error) {
      alert(error);
    }
  }
  async function addEmp (){
    try{
      await getInstance();
      const response = await contractWithSigner.addEmployee(orgAdd, typeEmp, empAdd);
      console.log(response);
    } catch (error) {
      alert(error);
    }
  }
  
  return (
    <>
        <Navbar />
        

        <div>
      <h1 className='ml-2 mt-2'>Organization address:</h1>
        <input onChange={(e)=>{
          setOrgAdd(e.target.value);
        }} className="placeholder:italic transition-all w-4/6 border border-gray-500 rounded-md p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm m-2" type="text" name="store"/>
      </div>

    
        <p className='ml-10 text:bold'><b>Create a vesting Schedule here:</b></p>
        <div className=' ml-20'>
      <div className="w-1/2 mt-4">
        <input
          className="mr-4 h-10 px-4 py-2 mb-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Type of Employee"
          value={type}
          onChange={(e)=>{setType(e.target.value)}}
        />
        <input
          className=" h-10 px-4 py-2 mb-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e)=>setAmount(e.target.value)}
        /> tokens
        <input
          className="ml-4 w-72 h-10 px-4 py-2 mb-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Time Span/ Vesting period"
          value={duration}
          onChange={(e)=>{setDuration(e.target.value)}}
        /> seconds
      </div>
      <button
        className="mt-2 w-24 h-9 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={createOrgVestingSchedule}
      >
        Create
      </button>
    </div>
      

        <p className='my-4 ml-10 text:bold'><b>Add new employees here:</b></p>
        <div className='ml-20'>
      <div className="w-1/2 mt-4">
        <input
          className="mr-4 h-10 px-4 py-2 mb-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Employee Address"
          value={empAdd}
          onChange={(e)=>{setEmpAdd(e.target.value)}}
        />
        <input
          className=" h-10 px-4 py-2 mb-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Employee Type"
          value={typeEmp}
          onChange={(e)=>{setTypeEmp(e.target.value)}}
        />
        

      </div>
      <button
        className="mt-2 w-24 h-9 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={addEmp}
      >
        Add
      </button>
    </div>
    <Footer/>
    </>
  )
}

export default OrgPage