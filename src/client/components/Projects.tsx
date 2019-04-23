import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';

const Projects = () => {
    return (
        <>
            <h1 className='text-primary mt-5'>Projects</h1>
            <hr className='bg-primary'></hr>
            <div>
                <h3 className='text-primary'>Synesthesia Spotify</h3>
                <ul className='lang-ul'>
                    <li className='text-danger lang'>Takes user's Spotify data through Spotify's API and turns it into visual aids such as charts and graphs.</li>
                    <li className='text-danger lang'>Custom made svg logos with animations.</li>
                    <li className='text-danger lang'>Can alter the playback state from inside the application.</li>
                    <li className='text-danger lang'>Tokens expire after 1 hour and refresh tokens can be requested.</li>
                </ul>
                <img className='col-md-3 mr-3 p-0 sbu' src='images/synesthesia.png' alt='Smash' height='200' width='300' />
                <img className='col-md-3 p-0 sbu' src='images/genres.png' alt='Register' height='200' width='400' />
                <div className='col-md-3' style={{ display: 'inline-block' }}>
                    <span className='badge badge-primary text-secondary m-2'>JavaScript</span>
                    <span className='badge badge-primary text-secondary m-2'>React</span>
                    <span className='badge badge-primary text-secondary m-2'>Illustrator</span>
                    <span className='badge badge-primary text-secondary m-2'>SVG</span>
                    <span className='badge badge-primary text-secondary m-2'>Express</span>
                    <span className='badge badge-primary text-secondary m-2'>CSS animations</span>
                </div>
                <div className='col-md-4'>
                    <a className='mr-3' target='_blank' href='https://github.com/joshualholland/final-spotify-product'><FontAwesomeIcon icon={faEye} /> View Source Code</a>
                    <a target='_blank' href='http://synesthesiaspotify.herokuapp.com'><FontAwesomeIcon icon={faEye} /> View Live Demo</a>
                </div>
                <h3 className='text-primary mt-5'>Smash Bros. Ultimate Tournament Utility</h3>
                <ul className='lang-ul'>
                    <li className='text-danger lang'>Built to help professional Smash Bros. Tournament Operators with running tournaments.</li>
                    <li className='text-danger lang'>Walks players through rules for stage striking and allows them to strike stages via my application.</li>
                    <li className='text-danger lang'>Allows players to register with avatars, usernames, emails, and passwords.</li>
                    <li className='text-danger lang'>Authenticated admins are allowed to text players to get to meeting area via Twilio.</li>
                </ul>
                <img className='col-md-3 mr-3 p-0 sbu' src='images/SBU.png' alt='Smash' height='200' width='300' />
                <img className='col-md-3 p-0 sbu' src='images/SBUreg.png' alt='Register' height='200' width='300' />
                <div className='col-md-3' style={{ display: 'inline-block' }}>
                    <span className='badge badge-primary text-secondary m-2'>TypeScript</span>
                    <span className='badge badge-primary text-secondary m-2'>React</span>
                    <span className='badge badge-primary text-secondary m-2'>Twilio</span>
                    <span className='badge badge-primary text-secondary m-2'>MySQL</span>
                    <span className='badge badge-primary text-secondary m-2'>NodeJS</span>
                    <span className='badge badge-primary text-secondary m-2'>Express</span>
                    <span className='badge badge-primary text-secondary m-2'>Passport</span>
                </div>
                <div className='col-md-4'>
                    <a className='mr-3' target='_blank' href='https://github.com/joshualholland/smashbros_tournament'><FontAwesomeIcon icon={faEye} /> View Source Code</a>
                    <a target='_blank' href='https://protected-caverns-96816.herokuapp.com/'><FontAwesomeIcon icon={faEye} /> View Live Demo</a>
                </div>
                <h3 className='text-primary mt-5'>Just My Type</h3>
                <ul className='lang-ul'>
                    <li className='text-danger lang'>A typing game that measures wpm.</li>
                    <li className='text-danger lang'>Gives live feedback and css animations for knowing which letter to type.</li>
                    <li className='text-danger lang'>Score is reported at the end and the user can choose to play again.</li>
                </ul>
                <img className='col-md-3 mr-3 p-0 sbu' src='images/JMT.png' alt='Typing game' height='200' width='300' />
                <img className='col-md-3 p-0 sbu' src='images/JMT2.png' alt='Feedback' height='200' width='300' />
                <div className='col-md-3' style={{ display: 'inline-block' }}>
                    <span className='badge badge-primary text-secondary m-2'>jQuery</span>
                    <span className='badge badge-primary text-secondary m-2'>HTML5</span>
                    <span className='badge badge-primary text-secondary m-2'>CSS</span>
                </div>
                <div className='col-md-4'>
                    <a className='mr-3' target='_blank' href='https://github.com/joshualholland/just-my-type'><FontAwesomeIcon icon={faEye} /> View Source Code</a>
                    <a target='_blank' href='https://joshualholland.github.io/'><FontAwesomeIcon icon={faEye} /> View Live Demo</a>
                </div>

            </div>
        </>
    )
};

export default Projects;