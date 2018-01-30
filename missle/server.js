// Twilio Credentials
const accountSid = -;
const authToken = -;

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
