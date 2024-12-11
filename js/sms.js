// Load the Twilio module
const twilio = require('twilio');

// Your Twilio credentials
const accountSid = 'your_account_sid'; // Replace with your Twilio Account SID
const authToken = 'your_auth_token';   // Replace with your Twilio Auth Token

// Create a Twilio client
const client = twilio(accountSid, authToken);

// Send an SMS
client.messages
  .create({
    body: 'Hello, this is a message from JavaScript!',
    from: '+1234567890', // Your Twilio phone number
    to: '+9876543210'    // Recipient's phone number
  })
  .then(message => console.log(`Message sent successfully! SID: ${message.sid}`))
  .catch(error => console.error('Error sending message:', error));
  