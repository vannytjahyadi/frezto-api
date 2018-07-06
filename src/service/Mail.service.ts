import * as nodemailer from 'nodemailer';
import config from '@config/config';

import { EjsService } from './Ejs.service';

export class MailService {
    
    constructor() {}
    
    static sendEmail(repecientType: "user" | "admin", repicients:string|string[], subject:string, filename:string, filedata:Object) {

        let transporter = nodemailer.createTransport({
            service: 'SendGrid',
            auth: {
              user: config.mail.user,
              pass: config.mail.pass
            }
          });

        let html = EjsService.renderHtml(repecientType, filename, filedata ? filedata : '');

        let mailOptions = {
            from: config.mail.sender, // sender address
            to: repicients, // list of receivers
            subject: subject, // Subject line
            html: html // html body
        };

        transporter.sendMail(mailOptions, function(err, res) {
            if (err) { 
                console.log(err) 
            } else {
                console.log(res);
            }
        });
    }
}