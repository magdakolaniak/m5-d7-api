import express from 'express';
import { sendEmail } from '../lib/email.js';

const usersRouter = express.Router();

usersRouter.post('/sendEmail', async (req, res, next) => {
  try {
    const { emailAddress } = req.body;
    await sendEmail(emailAddress);
    res.send('Email sent!');
  } catch (error) {
    next(error);
  }
});
export default usersRouter;
