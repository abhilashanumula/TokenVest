import { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import PopUp from '../components/PopUp';
import RegForm from '../components/RegForm'
import Footer from '../components/Foot';

function RegisterOrg() {
  const [showPopup, setShowPopup] = useState(true);
  
  const handleClosePopup = () => {
    setShowPopup(false);
  };


  return (
    <div>
      <Navbar />
      {showPopup ? <PopUp onClose={handleClosePopup} /> : <RegForm />
      }
      <Footer />
  </div>
  );
};

export default RegisterOrg;
