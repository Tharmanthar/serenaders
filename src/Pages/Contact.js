import React, {Component} from 'react';
import { SocialIcon } from 'react-social-icons'

import '../CSS/page.css';

var social = 'https://www.facebook.com/derby.serenaders/';

class contact extends Component {
  render() {
    return(
        <div className="content span3">

            <div className="social">
                <SocialIcon url={social} />
            </div>

            <h1 className="pad5top"><u> Contact Us </u> </h1>

            <p className="indent">
                <br />
                Please feel free to contact us throught our facebook page <a href='https://www.facebook.com/derby.serenaders/'>The Derby Serenaders</a>.
                Please contact us throught our facebook page if you are looking to book us for an event
            </p>

            <p className="indent">

                We practise on a Tuesday night between <i> 7:00 - 9:00 PM </i> in the Church Hall at <i>St. Osmunds Church, London Road, Derby, DE24 8UW </i>. 
                The turn is easy to miss but is opposit Browns Landscaping Centre near the Navigation Inn.

            </p>

        </div>
    );
  }
}

export default contact;
