const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();

sgMail.setApiKey('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');


app.use(cors());

app.get('/', (req, res)=>{
    res.send('Welcome to the Sendergrid Email Server');
});

app.get('/send-email', (req, res)=>{
    const {recipient, sender, topic, text} = req.query;

    const msg = {
        to: recipient,
        from: sender,
        subject: topic,
        text: text,
    }

    sgMail.send(msg)
    .then((msg) => console.log(text))


});

app.listen(400, ()=> console.log('running on port 400'));