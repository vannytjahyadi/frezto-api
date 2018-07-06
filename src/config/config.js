"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getConfig = function () {
    var configVar = {
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
                user: "user",
                pass: "pass"
            }
        }
    };
    return configVar[process.env.NODE_ENV || "development"];
};
var globalConfig = {
    locale: 'en',
    timezone: 'UTC',
    domain_black_list: [
        'yopmail.com',
    ]
};
var config = Object.assign(globalConfig, getConfig());
exports.default = config;