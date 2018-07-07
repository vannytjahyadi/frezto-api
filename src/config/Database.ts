var getDBConfig = () => {

  let configVar = {
      local: {
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: null,
        database: "frezto_dev",
    },
    development: {
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: null,
        database: "frezto_dev",
    },
    test: {
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "test",
        password: "test",
        database: "test"
    },
    production: {
        type: "mysql",
        host: "tuy8t6uuvh43khkk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        username: "bgooq8l26xd8xu8w",
        password: "jif3290giohx08fq",
        database: "frezto_dev"
    }
  }

  return configVar[process.env.NODE_ENV || "local"];
}

var globalConfig = {
    synchronize: false,
    logging: true,
    entities: [
        "src/entity/*.js"
    ],
    migrations: [
        "src/migration/*.js"
    ],
    subscribers: [
        "src/subscriber/**/*.ts"
    ],
    cli: {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
    }
}

var dbConfig = Object.assign(globalConfig, getDBConfig());

export default dbConfig;
