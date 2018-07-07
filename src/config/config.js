"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getConfig = function () {
    var configVar = {
        local: {
            white_list_url: [
                'http://127.0.0.1:8080',
                'http://localhost:4200'
            ],
            mail: {
                sender: 'no-reply@safewave.io',
                user: "development.env",
                pass: "d3v3lopm3nt"
            }
        },
        development: {
            mail: {
                sender: 'no-reply@safewave.io',
                user: "development.env",
                pass: "d3v3lopm3nt"
            }
        },
        test: {
            mail: {
                sender: 'no-reply@safewave.io',
                user: "development.env",
                pass: "d3v3lopm3nt"
            }
        },
        production: {
            mail: {
                sender: 'no-reply@safewave.io',
                user: "development.env",
                pass: "d3v3lopm3nt"
            }
        }
    };
    return configVar[process.env.NODE_ENV || "local"];
};
var globalConfig = {
    mode: [process.env.NODE_ENV || "local"],
    locale: 'en',
    timezone: 'UTC',
    email_domain_black_list: [
        'yopmail.com',
    ]
};
var config = Object.assign(globalConfig, getConfig());
exports.default = config;
