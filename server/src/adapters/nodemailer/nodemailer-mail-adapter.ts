import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c21afaab49e030",
    pass: "a56a439564c8c1"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData){
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Igor Konecny <igorkonecny2@gmail.com>',
      subject,
      html: body,
    })
  }
}