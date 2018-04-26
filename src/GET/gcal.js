import request from 'superagent'
import moment from 'moment'

const CALENDAR_ID = '602uhk0aem1tbknt1ohvio8o84@group.calendar.google.com'
const API_KEY = 'AIzaSyBJJ84sP7NlAMRNHgHXdrZOkH-84bUY3yo'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?singleEvents=true&key=${API_KEY}`

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map(event => {
         let sTime = event.start.date || event.start.dateTime;
         let eTime = event.end.date || event.end.dateTime;

         let csTime = moment(sTime).toDate();
         let ceTime = moment(eTime).toDate();

        return events.push({
         start: csTime,
         end: ceTime,
         title: event.summary,
         description: event.description,
         location: event.location,
         });
         });
        callback(events)
      }
    })
}
