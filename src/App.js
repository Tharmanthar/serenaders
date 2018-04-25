import React, { Component } from 'react';
import './CSS/App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// grid css https://medium.freecodecamp.org/a-beginners-guide-to-css-grid-3889612c4b35
// https://coderjourney.com/tutorials/how-to-deploy-a-react-application/
// this app is deployed to netlify - https://app.netlify.com/
// github account a.beers972@gmail.com is the log in

// Pages import

import home       from './Pages/Home.js'
import band       from './Pages/Band.js'
import events     from './Pages/Events.js'
import contact    from './Pages/Contact.js'

const router = () => (
    <Router>
    <div className="wrapper">

        <div className="item header borderB">
            {/* Header Row */}
            <Link to="/"> <h2>The Derby Serenaders </h2> </Link>
        </div>


        <div className="item span2 header borderB">
            {/* Nav */}
              <div >
                  <ul className='nav header'>
                      <li>      <Link to="/">         <h2>Home</h2>         </Link>       </li>
                      <li>      <Link to="/band">     <h2>The Band</h2>     </Link>       </li>
                      <li>      <Link to="/contact">  <h2>Contact Us</h2>    </Link>      </li>
                  </ul>
              </div>
        </div>

        <div className="item span3">

            <div>
              <Route exact path="/"    component={home} />
              <Route path="/band"      component={band} />
              <Route path="/contact"   component={contact} />
            </div>

        </div>

        <div className="item span3 footer">

            <div className="span3 footcontent">
               {'\u00A9'} Designed and Built by Aaron Beers for the Derby Serendars Showband 2018
            </div>

        </div>
    </div>
    </Router>

)

export default router;
