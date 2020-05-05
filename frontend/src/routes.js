import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import ScrollToTop from './Tags/ScrollToTop';

import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Projects from './pages/Projects';
import LearnAI from './pages/LearnAI';
import ContactUs from './pages/ContactUs';

export default function Routes(){
    return (
        <BrowserRouter>
        <ScrollToTop />
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/aboutus" exact component={AboutUs} />
                <Route path="/events" exact component={Events} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/learnai" exact component={LearnAI} />
                <Route path="/contactus" exact component={ContactUs} />
    
            </Switch>
        </BrowserRouter>
    )
}