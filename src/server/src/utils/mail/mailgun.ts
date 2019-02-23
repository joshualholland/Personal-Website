import * as mailgunLoader from 'mailgun-js';
import config from '../../config';

let mailgun = mailgunLoader({
    apiKey: config.mail.apiKey,
    domain: config.mail.domain
});

const sendEmail = (to: string, from: string, subject: string, html: string) => {
    let data = {
        to,
        from,
        subject,
        html
    };
    return mailgun.messages().send(data);
};

export default sendEmail;