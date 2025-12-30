const { createApp } = require("../src/app");
const { connectDb } = require("../src/helpers/db");
const { appConfig } = require("../src/helpers/settings");

const app = createApp();

// Ensure database connection is established before handling requests
let dbReady = false;

module.exports = async (req, res) => {
    if (!dbReady) {
        await connectDb(appConfig.MONGODB_URI);
        dbReady = true;
    }
    return app(req, res);
};
