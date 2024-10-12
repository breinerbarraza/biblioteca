// import { envs } from '@app/config/envs';
import * as nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { Injectable } from '@nestjs/common';
import { envs } from '@app/config/envs';
import Mail from 'nodemailer/lib/mailer';

@Injectable()
export class EmailAdapter {
  transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo>;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: envs.EMAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: envs.EMAIL_USER,
        pass: envs.EMAIL_PASSWORD,
      },
    });
  }

  async sendEmail(options: Mail.Options) {
    try {
      return await this.transporter.sendMail(options);
    } catch (error) {
      throw new Error('Error enviando email: ' + error);
    }
  }
}
