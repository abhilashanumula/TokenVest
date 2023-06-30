import { useState, useEffect } from 'react';
import { BiCheckCircle, BiXCircle } from 'react-icons/bi';
import { checkConnection, walletDetails } from '../wallet';

const Footer = () => {
  let account = walletDetails(); 
  const [walletStatus, setWalletStatus] = useState((account!==null));
  const [walletAddress, setWalletAddress] = useState(account);

  async function handleConnection(){
     await checkConnection();
     account = walletDetails();
    if(account!==null){
        setWalletStatus(true)
        setWalletAddress(account)
      }
  }

  useEffect(()=>{
    handleConnection();
  },[walletStatus]);

  return (
    <div>
        
<footer class="fixed bottom-0 left-0 z-20 w-full p-2 bg-gray-800 text-white border-t border-gray-200">          
      <div className='flex justify-center items-center'>
        { !walletStatus && <button className="bg-orange-400 hover:bg-blue-600 text-white px-4 py-1 rounded" onClick={handleConnection}>
            Connect Wallet
          </button>}
        <div className="mr-2 ml-2">
          {walletStatus ? (
            <BiCheckCircle className="text-green-500" />
          ) : (
            <BiXCircle className="text-red-500" />
          )}
        </div>
        <p className="mr-2">{walletStatus ? 'Connected' : 'Not Connected'}</p>
        <p>{walletAddress}</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
