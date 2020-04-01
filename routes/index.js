const router = require('express').Router();
const axios = require('axios');
const { check, validationResult } = require('express-validator/check');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const emailTemplate = require('../templates/email');

router.post(
  '/contact',
  [
    check('email')
      .isEmail()
      .normalizeEmail(),
    check('phone').isLength({ max: '25' }),
    check('firstName').isLength({ max: '25' }),
    check('lastName').isLength({ max: '25' }),
    check('message').isLength({ max: '2500' })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }

    let { recaptcha, firstName, lastName, email, phone, message } = req.body;
    try {
      let valid = await axios.post(
        'https://www.google.com/recaptcha/api/siteverify',
        `secret=${process.env.RECAPTCHA}&response=${recaptcha}`
      );

      if (!valid.data.success) {
        return res.json({
          errors: [{ param: 'Recaptcha', msg: 'Invalid Value' }]
        });
      }

      const msg = {
        to: 'Nick Bisignano <nicholas.bisignano@gmail.com>',
        from: `${firstName}${' ' + lastName} <${email}>`,
        subject: 'Sent from website contact Form',
        text: `Name:${firstName} ${lastName}, Email: ${email}, Phone: ${phone}, Message: ${message}`,
        html: emailTemplate(firstName, lastName, email, phone, message)
      };
      await sgMail.send(msg);
      return res.json({
        success: [
          {
            msg: 'Form successfully submitted. We will be in contact with you.'
          }
        ]
      });
    } catch (err) {
      console.error(err.response.body.errors);
      return res.json({ errors: [{ param: 'server', msg: err.message }] });
    }
  }
);

module.exports = router;
