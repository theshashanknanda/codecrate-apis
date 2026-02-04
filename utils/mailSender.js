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

    console.log(info)
    return info;
  }
  catch (err) {
    console.log(`Error sending email: ${err.message}`)
  }
}

module.exports = mailSender;
