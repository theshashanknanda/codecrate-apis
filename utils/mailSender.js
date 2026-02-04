const nodemailer = require('nodemailer')

const mailSender = async (email, subject, body) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      }
    })

    let info = await transporter.sendMail({
      from: "shashank8can@gmail.com",
      to: email,
      subject: `${subject}`,
      html: `${body}`
    })

    console.log('Email sent successfully:', info.messageId)
    return info;
  }
  catch (err) {
    console.error(`Error sending email: ${err.message}`)
    throw err; // Re-throw the error so caller knows it failed
  }
}

module.exports = mailSender;
