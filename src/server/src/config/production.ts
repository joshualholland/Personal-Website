export default {
    mysql: {
        host: process.env.DB_HOST,
        database: process.env.DB_SCHEMA,
        user: process.env.DB_USER,
        password: process.env.DB_PASS
    }, mail: {
        apiKey: process.env.MAIL,
        domain: process.env.MAIL_DOMAIN
    }
};