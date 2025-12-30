const { createApp } = require("../src/app");
const { connectDb } = require("../src/helpers/db");
const { appConfig } = require("../src/helpers/settings");

const app = createApp();

// Ensure database connection is established before handling requests

module.exports = async (req, res) => {
    await connectDb(appConfig.MONGODB_URI);
    return app(req, res);
};
