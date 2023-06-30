import React from 'react';
import { useEffect, useState } from 'react';
import { checkConnection } from '../wallet.js'
import Navbar from '../components/Navbar';
import OrgPage from './OrgPage.js';
import Footer from '../components/Foot.js';

export default function Home() {


  return (
    <>
    <div>
      <Navbar />
       {/* <p>Connected: {connected ? 'Yes' : 'No'}</p>
       <p>Account: {account? account : "Connect your Wallet!"}</p> */}
       <Footer />
    </div>
  </>
  );
}
