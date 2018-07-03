"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getConfig = () => {
    let configVar = {
        development: {
            mail: {
                sender: 'no-reply@example.com',
                user: "user",
                pass: "pass"
            }
        },
        test: {
            mail: {
                sender: 'no-reply@example.com',
                user: "user",
                pass: "pass"
            }
        },
        production: {
            mail: {
                sender: 'no-reply@example.com',
                user: "user",
                pass: "pass"
            }
        }
    };
    return configVar[process.env.NODE_ENV || "development"];
};
var globalConfig = {
    domain_black_list: [
        'yopmail.com',
    ]
};
var config = Object.assign(globalConfig, getConfig());
exports.default = config;
