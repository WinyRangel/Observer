const nodemailer = require('nodemailer');


//nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'danielamanzanorangel@gmail.com',
      pass: 'fgwn zvrn ftuf bybz',
    },
  });

  module.exports.transporter = transporter;