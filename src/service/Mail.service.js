"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require("nodemailer");
const config_1 = require("@config/config");
const Ejs_service_1 = require("./Ejs.service");
class MailService {
    constructor() { }
    static sendEmail(repecientType, repicients, subject, text = '', filename, filedata) {
        let transporter = nodemailer.createTransport({
            service: 'SendGrid',
            auth: {
                user: config_1.default.mail.user,
                pass: config_1.default.mail.pass
            }
        });
        let html = Ejs_service_1.EjsService.renderHtml(repecientType, filename, filedata ? filedata : '');
        let mailOptions = {
            from: config_1.default.mail.sender,
            to: repicients,
            subject: subject,
            text: text,
            html: html // html body
        };
        transporter.sendMail(mailOptions, function (err, res) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(res);
            }
        });
    }
}
exports.MailService = MailService;
