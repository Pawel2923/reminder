import { Sequelize, DataTypes, Model } from "sequelize";

class User extends Model {
    declare uid: string;
    declare email: string;
    declare passwordHash: string;
    declare salt: string;
    declare createdAt: Date;
    declare updatedAt: Date;

    public static initModel(sequelize: Sequelize): void {
        User.init(
            {
                uid: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                passwordHash: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                salt: {
                    type: DataTypes.STRING,
                },
                createdAt: {
                    field: "created_at",
                    type: DataTypes.DATE,
                },
                updatedAt: {
                    field: "updated_at",
                    type: DataTypes.DATE,
                },
            },
            {
                sequelize,
                modelName: "User",
            }
        );
    }
}

export default User;
