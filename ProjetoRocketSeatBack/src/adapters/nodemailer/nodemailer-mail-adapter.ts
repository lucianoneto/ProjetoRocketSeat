import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth:{
        user: "7b989ac1e1fed2",
        pass: "d6943dd2b4b498"
    }
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Luciano Ferreira <lucianoneto1033@gmail.com>',
            subject: subject,
            html: body,
        });
    };
}