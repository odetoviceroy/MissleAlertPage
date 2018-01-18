// Twilio Credentials
const accountSid = 'ACf71b3103510c65ab8a2661f03e5cf837';
const authToken = '1514d431d65f8e36dc56d0b38eb54596';

function meh(){
  const client = require('twilio')(accountSid, authToken);
  client.messages
  .create({
    to: '+13472339894',
    from: '+12034098820',
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
  })
  .then((message) => console.log(message.sid));
}