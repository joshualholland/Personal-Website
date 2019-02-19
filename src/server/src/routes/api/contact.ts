import { Router } from 'express';
import sendEmail from '../../utils/mail/mailgun';

let router = Router();

router.post('/', async (req, res) => {
    let from = req.body.from;
    let subject = req.body.subject;
    let content = req.body.content;
    try {
        await sendEmail('joshualholland@gmail.com', from, subject, content);
        res.send('Email Sent');
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

export default router;