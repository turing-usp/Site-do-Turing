import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Projects from './pages/Projects';
import LearnAI from './pages/LearnAI';
import ContactUs from './pages/ContactUs';


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/AboutUs" exact component={AboutUs} />
                <Route path="/Events" exact component={Events} />
                <Route path="/Projects" exact component={Projects} />
                <Route path="/LearnAI" exact component={LearnAI} />
                <Route path="/ContactUs" exact component={ContactUs} />

            </Switch>
        </BrowserRouter>
    )
}