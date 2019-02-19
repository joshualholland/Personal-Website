import * as React from 'react';
import '../scss/app.scss';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Contact from './mail/contact';
import Blogs from './blog/blogs';
import SingleBlog from './blog/SingleBlog';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/contact' component={Contact} />
                        <Route exact path='/blogs' component={Blogs} />
                        <Route exact path='/blogs/:id' component={SingleBlog} />
                    </Switch>
                    <Footer />
                </>
            </Router>
        )
    }
};