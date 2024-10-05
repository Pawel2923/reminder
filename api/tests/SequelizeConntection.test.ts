const { Sequelize } = require("sequelize");

test("test sequelize connection", async () => {
    const sequelize = new Sequelize("reminder", "root", "%wo#N6x!A%hk%j", {
        host: "127.0.0.1",
        port: 3307,
        dialect: "mysql",
    });

    try {
        await sequelize.authenticate();
        console.log("Successfully connected to db");
    } catch (error) {
        console.error("Can't connect to db", error);
    }

    sequelize.close();
});
