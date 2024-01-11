import React, { useEffect, useRef } from 'react';
import { FaTelegram, FaLinkedin, FaPhone, FaFilePdf } from 'react-icons/fa';
import PhotoLogo from '../../src/assets/images/pp.jpg';
import MyResume from '../assets/Vitalyi Rabchevskyi Front-end Developer.pdf';
import ScrollReveal from 'scrollreveal';

import { IoMail } from "react-icons/io5";
import OnlineIndicator from './OnlineIndicator';
const copiedText = '@carterjames';


const handleCopyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(copiedText);
    alert(`Nickname copied to clipboard: ${copiedText}`);
  } catch (err) {
    console.error('Unable to copy text to clipboard', err);
  }
};

const ProfileCard = () => {
  const boxRef = useRef();

  useEffect(() => {
    const config = {
      origin: 'left',
      duration: 500,
      delay: 150,
      distance: '500px',
      scale: 1,
      easing: 'ease',
    };
    ScrollReveal().reveal(boxRef.current, config);
  }, []);


  return (
    
    <div className="row fixed mb-5">
      <div className="col-lg border rounded-card px-4 py-4 text-center" ref={boxRef}>
        <div className='online mb-4 border rounded-5'>
          <OnlineIndicator />
        </div>
        <div className="row">
          <div className="col-lg mb-3">
            <h1 className="display-6">Vitalyi Rabchevskyi</h1>
          </div>
        </div>
        <img className="rounded-2 avatar mb-4" src={PhotoLogo} alt="Profile" />
        <div className="row">
          <a className="h4" href="mailto:carterjames@ukr.net">
            <IoMail className='mx-2' />
            carterjames@ukr.net
          </a>
          <div className="display-7 mb-4 country">
            <div className="flag">
              <div className="flag-blue"></div>
              <div className="flag-yellow"></div>
            </div>
            Ukraine, Kiev
          </div>
          <div className="flex-row-center px-4">
            <div className="col-lg">
              <a className="h2" href="https://www.linkedin.com/in/vitalyi-rabchevskyi-902702199/">
                <FaLinkedin />
              </a>
            </div>
            <div className="col-lg">
              <a className="h2" onClick={handleCopyToClipboard} href="#!">
                <FaTelegram />
              </a>
            </div>
            <div className="col-lg">
              <a className="h2" href="tel:+380674432922">
                <FaPhone />
              </a>
            </div>
            <div className="col-lg">
              <a className="h2" href={MyResume} download="Vitalyi Rabchevskyi Front-end Developer.pdf">
                <FaFilePdf />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2"></div>
    </div>
  );
};

export default ProfileCard;
