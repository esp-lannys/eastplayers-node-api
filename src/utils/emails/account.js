const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendWelcomeEmailMessage = async (email, name) => {
	try {
		await sgMail.send({
			to: email,
			from: 'nphoangtu@gmail.com',
			subject: 'Thank you for using our service!',
			text: `Welcome to the app, ${name}. Let me know how you get along with the App.`
		});
	} catch (error) {
		console.error(error);
	}
};

const sendCancelationEmailMessage = async (email, name) => {
	try {
		await sgMail.send({
			to: email,
			from: 'nphoangtu@gmail.com',
			subject: `Sorry to see you go!`,
			text: `Goodbye, ${name}. I'd hope to see you back soon.`
		});
	} catch (error) {
		console.error(error);
	}
};

module.exports = { sendWelcomeEmailMessage, sendCancelationEmailMessage };
