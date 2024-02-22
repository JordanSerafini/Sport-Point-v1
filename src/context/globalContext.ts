import  { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  axios from 'axios';


const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  const [info, setInfo] = useState([]);
  

  const showToast = (msg: string, options = {}) => {
    toast(msg, options); 
  };

  return (
    <GlobalContext.Provider value={{ fetchItemList  }}>
      {children}
        <ToastContainer />
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
