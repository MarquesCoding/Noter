import { cleanEnv, num, port, str, url } from 'envalid';
require('dotenv').config()
export default cleanEnv(process.env, {
    PORT: port({ default: 3000 }),
    PASSWORD_SALT_ROUNDS: num({ default: 12 }),
    PASSWORD_RESET_EXPIRY_MINS: num({ default: 15 }),
    NODE_ENV: str( { example: "DEVELOPMENT"}),
    DATABASE_URI: url({ example: 'postgresql://postgres:password@localhost:5432/postgres?schema=public' }),

    ST_CORE_URL: url({
        devDefault: 'http://127.0.0.1:3567/',
        desc: 'The API domain for the SuperTokens Core service'
    }),
    ST_CORE_API_KEY: str({ desc: 'The API key for the SuperTokens Core service' }),

    SENTRY_DSN: str({ desc: 'The DSN for Sentry error reporting' }),
    APP_NAME: str({ default: 'My App', desc: 'The name of your app or service' }),
    API_DOMAIN: url({ devDefault: `localhost:3000` }),
    WEB_DOMAIN: url({ example: 'localhost:8080' }),

    SMTP_HOST: str({ example: 'email-smtp.eu-west-2.amazonaws.com' }),
    SMTP_PORT: port({ choices: [25, 587, 2587, 465, 2465, 2525] }),
    SMTP_USER: str(),
    SMTP_PASS: str({}),
    SMTP_SENDFROM: str({ desc: 'The email address of the sender (your app)' })
});
