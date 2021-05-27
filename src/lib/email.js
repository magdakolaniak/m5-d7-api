import sgMail from '@sendgrid/mail';

export const sendEmail = async (emailAddress) => {
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: emailAddress,
      from: process.env.SENDER_EMAIL,
      subject: 'First e-mail sent!',
      text: 'Here is the very first e-mail sent by API',
    };
    await sgMail.send(msg);
  } catch (error) {
    console.log(error);
    throw new Error('Error while trying to send email');
  }
};
