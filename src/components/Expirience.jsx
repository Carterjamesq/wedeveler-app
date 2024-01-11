import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

import { IoDocumentText } from "react-icons/io5";

const Expirience = () => {

    const boxRef = useRef();

    useEffect(() => {
        const config = {
          origin: 'bottom',
          duration: 750,
          delay: 150,
          distance: '500px',
          scale: 1,
          easing: 'ease',
        };
        ScrollReveal().reveal(boxRef.current, config);
    }, []);
  return (
    <div className='section-padding' ref={boxRef}>
        <div className="col d-flex icon">
            <div className='border rounded-5 px-4 py-2 mb-5'>
                <IoDocumentText />
                <p>Expirience</p>
            </div>
        </div>
        <div className="expirience-row">
            <div className="col-lg-1">
                <div className="line">
                    <div className="dot active"></div>
                </div>
            </div>
            <div className="col-lg">
                <div className="expirience-content">
                    <p className='grey-text'>Sep 2022 - Apr 2023</p>
                    <p className='display-6'>Front-end Developer</p>
                    <p className='mb-3'>Augment</p>
                    <p className="mb-3">As a Front-end Developer (Wordpress), were responsible for developing and maintaining 
                    visually appealing and user-friendly website layouts using HTML, CSS, and JavaScript. This 
                    included customizing Wordpress themes and plugins using PHP and APIs. Worked closely 
                    with project management and design teams to meet client requirements, conducted quality 
                    assurance checks, and ensured web accessibility standards were met.</p>
                </div>
            </div>
        </div>
        <div className="expirience-row">
            <div className="col-lg-1">
                <div className="line">
                    <div className="dot active"></div>
                </div>
            </div>
            <div className="col-lg">
                <div className="expirience-content">
                    <p className='grey-text'>Jan 2022 - Sep 2022</p>
                    <p className='display-6'>Chief Technology Officer</p>
                    <p className='mb-3'>HR Vision</p>
                    <p className="mb-3">During my tenure as a Front-end Developer (Wordpress) in company, main role was to 
                    create and maintain the front-end of websites on the Wordpress platform, ensuring that they 
                    were visually appealing, user-friendly, and responsive. You achieved this by using your skills 
                    in HTML, CSS, and JavaScript to develop website layouts, and customizing Wordpress 
                    themes and plugins using PHP and Wordpress APIs.</p>
                </div>
            </div>
        </div>
        <div className="expirience-row">
            <div className="col-lg-1">
                <div className="line">
                    <div className="dot active"></div>
                </div>
            </div>
            <div className="col-lg">
                <div className="expirience-content">
                    <p className='grey-text'>Dec 2019 - Jun 2022</p>
                    <p className='display-6'>Front-end Developer</p>
                    <p className='mb-3'>IAT AluTec GmbH</p>
                    <p className="mb-3">I was responsible for implementing any necessary customizations to Wordpress themes and 
                    plugins to meet the client's specific needs. This required a good understanding of PHP and 
                    Wordpress APIs.
                    Also I been responsible for maintaining the company's internal's Wordpress 
                    website's and ensuring that it was up to date with the latest security patches and themes 
                    updates.</p>
                </div>
            </div>

        </div>
        <div className="dot-fixed active"></div>
    </div>
  )
}

export default Expirience