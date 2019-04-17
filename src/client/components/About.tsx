import * as React from 'react';

const About = () => {
    return (
        <>
            <h1 className='text-primary mt-5' id='welcome'>About</h1>
            <hr className='bg-primary'></hr>
            <div className='container mb-5'>
                <div className='col-md-6' style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    <h5 className='json text-primary mb-0'>{'{'} "Me": {'['}</h5>
                    <h5 className='json text-primary ml-2 mb-0'>{'{'}</h5>
                    <h5 className='json text-primary ml-4 mb-0'>"Name": <span className='json text-danger'>"Josh Holland",</span></h5>
                    <h5 className='json text-primary ml-4 mb-0'>"Married": <span className='json text-white'>true,</span></h5>
                    <h5 className='json text-primary ml-4 mb-0'>"Age": <span className='json text-white'>25,</span></h5>
                    <h5 className='json text-primary ml-4 mb-0'>"Pets": {'['}</h5>
                    <h5 className='json text-danger ml-5 mb-0'>"Rory",</h5>
                    <h5 className='json text-danger ml-5 mb-0'>"Tessa"</h5>
                    <h5 className='json text-primary ml-5 mb-0'>{']'},</h5>
                    <h5 className='json text-primary ml-5 mb-0'>"Home": <span className='json text-danger'>"Birmingham, AL",</span></h5>
                    <h5 className='json text-primary ml-4 mb-0'>"Hobbies": {'['}</h5>
                    <h5 className='json text-danger ml-5 mb-0'>"Biking",</h5>
                    <h5 className='json text-danger ml-5 mb-0'>"Hiking",</h5>
                    <h5 className='json text-danger ml-5 mb-0'>"Camping",</h5>
                    <h5 className='json text-danger ml-5 mb-0'>"Guitar",</h5>
                    <h5 className='json text-danger ml-5 mb-0'>"Video Games"</h5>
                    <h5 className='json text-primary ml-4 mb-0'>{']'}</h5>
                    <h5 className='json text-primary ml-2 mb-0'>{'}'}</h5>
                    <h5 className='json text-primary'>{']}'}</h5>
                </div>
                <div className='col-md-4' style={{ display: 'inline-block', verticalAlign: 'middle' }} >
                    <img className='me' src='/images/profile.jpg' />
                </div>
            </div>
        </>
    )
};

export default About;