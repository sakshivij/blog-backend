// TODO: Take these values from environment variables
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "rootpass123",
    DB: "test1",
    dialect: "mysql",
    dialectModule: require('mysql2'),
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};