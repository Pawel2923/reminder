import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
    process.env["DB_NAME"] as string,
    process.env["DB_USER"] as string,
    process.env["DB_CRED"] as string,
    {
        host: process.env["DB_HOST"] as string,
        port: process.env["DB_PORT"] as unknown as number,
        dialect: "mysql",
    }
);

import User from "./User";
import Archive from "./Archive";
import Bin from "./Bin";
import Label from "./Label";
import Note from "./Note";

User.initModel(sequelize);
Archive.initModel(sequelize);
Bin.initModel(sequelize);
Label.initModel(sequelize);
Note.initModel(sequelize);

export { sequelize };
