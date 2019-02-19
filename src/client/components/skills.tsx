import * as React from 'react';

const Skills = () => {
    return (
        <>
            <h1 className='text-primary mt-5'>Skills & Abilities</h1>
            <hr className='bg-primary'></hr>
            <h5 className='text-danger mt-3'>In my time in coding bootcamp, I learned many things about being a developer besides coding. I learned about myself and my own work habits. I learned how to search and find out for myself what I need to know for any particular project. I learned that sometimes it's better to ask for help than to struggle for hours and waste time. I learned that there's so much I still need to learn, and most importantly, I learned that learning excites me.</h5>
            <div className='container'>
                <div className='col-md-2 skills'>
                    <h5 className='text-danger mt-3'>Languages:</h5>
                    <ul className='lang-ul col-md-3'>
                        <li className='text-danger lang'>JavaScript</li>
                        <li className='text-danger lang'>TypeScript</li>
                        <li className='text-danger lang'>MySQL</li>
                        <li className='text-danger lang'>HTML5</li>
                        <li className='text-danger lang'>CSS</li>
                    </ul>
                </div>
                <div className='col-md-3 skills'>
                    <h5 className='text-danger mt-3'>Frameworks & Libraries:</h5>
                    <ul className='lang-ul col-md-3'>
                        <li className='text-danger lang'>React</li>
                        <li className='text-danger lang'>ReactNative</li>
                        <li className='text-danger lang'>NodeJS</li>
                        <li className='text-danger lang'>Express</li>
                        <li className='text-danger lang'>jQuery</li>
                        <li className='text-danger lang'>Bootstrap</li>
                    </ul>
                </div>
                <div className='col-md-4 skills'>
                    <h5 className='text-danger mt-3'>Tools & Methodologies:</h5>
                    <ul className='lang-ul'>
                        <li className='text-danger lang'>Postman</li>
                        <li className='text-danger lang'>Github</li>
                        <li className='text-danger lang'>Agile Development</li>
                        <li className='text-danger lang'>AJAX Requests</li>
                        <li className='text-danger lang'>Heroku & AWS deployment</li>
                        <li className='text-danger lang'>Twilio, Mailgun, Stripe</li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Skills;