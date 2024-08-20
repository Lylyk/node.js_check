const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'karelle43@gmail.com',
    pass: 'Zallolydia02'
  }
});

// Email options
const mailOptions = {
  from: 'karelle43@gmail.com',
  to: 'karelle43@gmail.com',
  subject: 'Testing NodeMailer',
  text: 'Hello Node, this is a test email!'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
