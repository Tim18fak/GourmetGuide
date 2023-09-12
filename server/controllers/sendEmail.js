const nodemailer = require('nodemailer');

const SendEmail = async (req, res) => {
  try {
    // Extract email data from the request body
    const { to, subject, text } = req.body;

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Replace with your email service provider
      auth: {
        user: 'gourmetguide23@gmail.com', // Replace with your email
        pass: 'gourmet@guide@', // Replace with your email password or app-specific password
      },
    });

    // Define email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Replace with your email
      to: to, // Recipient's email address
      subject: subject, // Email subject
      text: text, // Email text content
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Email sending failed' });
      } else {
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Email sent successfully!' });
      }
    });
  } catch (error) {
    // Handle errors here
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

module.exports = { SendEmail };
