import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  css: string;
}

const AddBtn: React.FC<ButtonProps> = ({ text, onClick, css }) => {
  return (
    <button 
    onClick={onClick} 
    className={`
    text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800    
    w-9/10
    ${css ? css : ""}
    `}>
      {text}
    </button>
  );
}

export default AddBtn;
