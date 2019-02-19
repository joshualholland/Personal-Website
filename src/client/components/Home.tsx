import * as React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Skills from './skills';
import Projects from './Projects';
import About from './About';

export default class Home extends React.Component {

    render() {
        return (
            <>
                <main className='container mx-auto w-100 mb-5'>
                    <section className='row my-5'>
                        <div className="col-md-12">
                            <About />
                            <Skills />
                            <Projects />
                        </div>
                        <Link to='/blogs' className='btn btn-outline-primary mt-5 mx-auto mb-5'>See Blogs <FontAwesomeIcon icon={faArrowRight} /></Link>
                    </section>
                </main>
            </>
        )
    }
};