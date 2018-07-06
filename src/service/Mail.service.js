"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer = require("nodemailer");
var config_1 = require("@config/config");
var Ejs_service_1 = require("./Ejs.service");
var MailService = /** @class */ (function () {
    function MailService() {
    }
    MailService.sendEmail = function (repecientType, repicients, subject, filename, filedata) {
        var transporter = nodemailer.createTransport({
            service: 'SendGrid',
            auth: {
                user: config_1.default.mail.user,
                pass: config_1.default.mail.pass
            }
        });
        var html = Ejs_service_1.EjsService.renderHtml(repecientType, filename, filedata ? filedata : '');
        var mailOptions = {
            from: config_1.default.mail.sender,
            to: repicients,
            subject: subject,
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
    };
    return MailService;
}());
exports.MailService = MailService;
