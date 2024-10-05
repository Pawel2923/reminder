const { Sequelize } = require("sequelize");

test("test sequelize connection", async () => {
    const sequelize = new Sequelize(
        process.env["DB_NAME"],
        process.env["DB_USER"],
        process.env["DB_CRED"],
        {
            host: process.env["DB_HOSTNAME"],
            port: process.env["DB_PORT"],
            dialect: "mysql",
        }
    );

    try {
        await sequelize.authenticate();
        console.log("Successfully connected to db");
    } catch (error) {
        console.error("Can't connect to db", error);
    }

    sequelize.close();
});
