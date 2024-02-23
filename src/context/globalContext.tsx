import React, { createContext, useState } from 'react';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Info {
  id: number;
  name: string;
  description: string;
  adresse: string;
  longitude: number;
  latitude: number;
  image: string;
  type: string;
  note: number;
  horaires: string;
  site: string;
  open: boolean;
}

interface GlobalContextState {
  infos:Info[]; 
  showToast: (msg: string, options?: ToastOptions) => void;
  setInfos: React.Dispatch<React.SetStateAction<Info[]>>; 
}

export const GlobalContext = createContext<GlobalContextState>({
  infos: [],
  showToast: () => {}, 
  setInfos: () => {}, 
});

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [infos, setInfos] = useState<Info[]>([]);

  const showToast = (msg: string, options: ToastOptions = {}) => { 
    toast(msg, options);
  };

   return (
    <GlobalContext.Provider value={{ infos, setInfos, showToast }}>
      {children}
      <ToastContainer />
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
