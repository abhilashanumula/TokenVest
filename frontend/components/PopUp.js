import React from 'react'
import { BiCopy } from 'react-icons/bi'
const PopUp = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="bg-slate-200 p-4 shadow-lg shadow-gray-500/50 rounded">
        <h2 className="text-lg font-bold mb-2">Registration instructions:</h2>
        <p className="text-gray-800">
         <li>Make sure you're the token's owner!</li>
         <li>Ensure that this contract has enough allowances to spend tokens!</li>
         <li>Address of this contract:</li>
        <div className='flex align-center justify-center m-1'>
          <code>{process.env.CONTRACT_ADDRESS}{' '}</code>
          <button>
          <BiCopy className='ml-2' onClick={()=>navigator.clipboard.writeText(`${process.env.CONTRACT_ADDRESS}`)}/>
          </button>
        </div>
        </p>
        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Understood
          </button>
        </div>
    </div>
    </div>
  )
}

export default PopUp