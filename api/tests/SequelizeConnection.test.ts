import { Sequelize } from "sequelize";

test("test sequelize connection", async () => {
    const sequelize = new Sequelize(
        process.env["DB_NAME"] as string,
        process.env["DB_USER"] as string,
        process.env["DB_CRED"] as string,
        {
            host: process.env["DB_HOSTNAME"] as string,
            port: process.env["DB_PORT"] as unknown as number,
            dialect: "mysql",
        }
    );

    try {
        await sequelize.authenticate();
        console.log("Successfully connected to db");
    } catch (error) {
        console.error("Can't connect to db", error);
    }

    await sequelize.close();
});
