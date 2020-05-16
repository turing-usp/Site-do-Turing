let secrets = {
    MAILJET_PUBLIC_API_KEY: process.env.MAILJET_PUBLIC_API_KEY || "secret",
    MAILJET_SECRET_API_KEY: process.env.MAILJET_SECRET_API_KEY || "secret"
};

module.exports = { secrets }
