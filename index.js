const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.post('/', (req, res) => {
  const {
    name,
    occupation,
    email,
    phone,
    company,
  } = req.body;
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'gzpromnoreply@gmail.com',
      pass: 'Welcomeback2021',
    },
  });
  const message = {
    from: 'gzpromnoreply@gmail.com',
    to: 'press.conf.27.01@gmail.com, zakaz.aplana@gmail.com',
    subject: 'Новая заявка',
    text: `Новая заявка от: ${name}. Должность: ${occupation} в ${company}. E-mail: ${email}, телефон: ${phone}`,
  };
  transporter.sendMail(message);
  res.json({
    sent: true,
  });
});

app.listen(8080);
