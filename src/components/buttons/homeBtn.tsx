import React from 'react';
import { useNavigate } from 'react-router-dom';

import backArrowLogo from '../../assets/backArrowLogo.png';

interface ButtonProps {
  css: string;
}

const AddBtn: React.FC<ButtonProps> = ({ css }) => {
    const navigate = useNavigate();

    const navHome = () => {
        navigate('/');
    }

  return (
    <img 
    src= {backArrowLogo}
    onClick={navHome} 
    className={`
    ${css ? css : ""}
    `}>
     
    </img>
  );
}

export default AddBtn;
