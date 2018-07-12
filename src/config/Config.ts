var getConfig = () => {

    let configVar = {
        local: {
            token: {
                webKey: "fr3t0w3bl0c",
                expiration_for_access_token: "1d",
                expiration_for_refresh_token: "1d"
            },
            white_list_url:  [
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
            token: {
                webKey: "fr3t0w3bd3v"
            },
            mail: {
                sender: 'no-reply@safewave.io',
                user: "development.env",
                pass: "d3v3lopm3nt"
            }
        },
        test: {
            token: {
                webKey: "fr3t0w3bt3st"
            },
            mail: {
                sender: 'no-reply@safewave.io',
                user: "development.env",
                pass: "d3v3lopm3nt"
            }
        },
        production: {
            token: {
                webKey: "fr3t0w3bpr0d"
            },
            mail: {
                sender: 'no-reply@safewave.io',
                user: "development.env",
                pass: "d3v3lopm3nt"
            }
        }
    }

    return configVar[process.env.NODE_ENV || "local"];
}

var globalConfig = {
    mode: [process.env.NODE_ENV || "local"],
    locale: 'en',
    timezone: 'UTC',
    email_domain_black_list: [
        'yopmail.com',
    ]
}

var config = Object.assign(globalConfig, getConfig());

export default config;
  