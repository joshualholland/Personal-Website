import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <nav className='navbar fixed-bottom navbar-dark bg-secondary'>
            <div className='mx-auto'>
                <a className='mr-5' href='https://github.com/joshualholland?tab=repositories'>
                    <FontAwesomeIcon className='text-primary' icon={faGithub} size='lg' />
                </a>
                <a className='mr-5' href='https://www.linkedin.com/in/joshua-holland-3b2747129/'>
                    <FontAwesomeIcon className='text-primary' icon={faLinkedin} size='lg' />
                </a>
                <a className='mr-3' href='https://www.instagram.com/holland.joshua/'>
                    <FontAwesomeIcon className='text-primary' icon={faInstagram} size='lg' />
                </a>
            </div>
        </nav>
    )
};

export default Footer;