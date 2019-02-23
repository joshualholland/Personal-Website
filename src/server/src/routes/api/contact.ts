import { Router } from 'express';
import sendEmail from '../../utils/mail/mailgun';

let router = Router();

router.post('/', async (req, res) => {
    let from = req.body.from;
    let subject = req.body.subject;
    let html = req.body.html;
    try {
        await sendEmail('joshualholland@gmail.com', from, subject, html);
        res.json('Email Sent');
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

export default router;