
import React from 'react'
import { render } from 'react-dom'
import moment from 'moment'
import '../CSS/react-big-calendar.css';
import { getEvents } from '../GET/gcal.js';

// https://blog.daftcode.pl/react-calendar-with-google-calendar-as-cms-tutorial-5f5d81e425a9
// try using this cal instead aaron - https://fullcalendar.io/
// or this one .. https://www.npmjs.com/package/fullcalendar-reactwrapper

import BigCalendar from 'react-big-calendar'
// a localizer for BigCalendar
BigCalendar.momentLocalizer(moment)

class events extends React.Component {
  constructor () {
    super()
    this.state = {
      events: []
    }
  }
  componentDidMount () {
    getEvents((events) => {
      this.setState({events})
    })
  }
  render () {
    return (
      // React Components in JSX look like HTML tags
      <BigCalendar
        style={{height: '420px'}}
        events={this.state.events}
      />
    )
  }
}

export default events;
