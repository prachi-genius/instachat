import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Home/Index';
// import Contact from './Contact'
import Register from './Register';
// import About from './About'
import NotFound from './NotFound';
import Chat from './Chat/Index'
import PersonalDetails from './Profile/PersonalDetails'
import EditProfile from './Edit';

 class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                {/* <Route path="/about" component={About} /> */}
                {/* <Route path="/contact" component={Contact} /> */}
                <Route path="/register" component={Register} />
                <Route path="/Chat" component={Chat} />
                {/* <Route component={NotFound} /> */}
                <Route path="/personaldetails" component={PersonalDetails}/>
                <Route path="/editprofile" component={EditProfile}/>
                
            </Switch>
        )
    }
}

export default Router
