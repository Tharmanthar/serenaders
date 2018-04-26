import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

import '../CSS/page.css';
import '../CSS/carousel.css'

import banner from '../IMG/banner.jpg';
import bannerg from '../IMG/banner_grey.png';

//https://coderjourney.com/tutorials/how-to-deploy-a-react-application/
//this app is deployed to netlify - https://app.netlify.com/
// github account a.beers972@gmail.com is the log in
// react carosel - https://www.npmjs.com/package/react-responsive-carousel

class home extends Component {
  render(){
    return(
        <div className="wrapper">
            <div className="span3 banner">

                  {/*  <img className="bannerIMG autolr" src={banner} /> */}

                  <Carousel className="bannerIMG autolr" interval={2000} showThumbs={false} centerMode={false} autoPlay={true} >
                    <div>
                        <img src={banner} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={bannerg} />
                        <p className="legend">Legend 2</p>
                    </div>

                    </Carousel>

            </div>



            <div className="content span3">

              <h1> Welcome to the Derby Serenaders Home page!</h1>

              <p className="indent">

                  Established in 1936 the Derby Serenaders International Showband have a long history and tradition.
                  We are a open and friendly band who welcome musicians of any and all levels, even if you havent played in
                  a while feel free to come along to one of our practice sessions and play along or just lisen and chat all
                  are welcome and help is on hand to get you back up to speed!

              </p>

              <p className="indent">

                  We practice on a Tuesday night between <i> 7:00 - 9:00 PM </i> in the Church Hall at <i>St. Osmunds Church, London Road, Derby, DE24 8UW </i>. 
                  The turn is easy to miss but is opposit Browns Landscaping Centre near the Navigation Inn.

              </p>

            </div>
        </div>
    );
  }
}

export default home
