import { Sequelize, DataTypes, Model } from "sequelize";

class User extends Model {
    public uid!: string;
    public email!: string;
    public passwordHash!: string;
    public salt!: string;
    public createdAt!: Date;

    public static initModel(sequelize: Sequelize): void {
        User.init(
            {
                uid: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    allowNull: false,
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
                created_at: {
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
