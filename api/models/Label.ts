import { Sequelize, DataTypes, Model } from "sequelize";

class Label extends Model {
    declare id: number;
    declare labelName: string;
    declare userId: string;

    public static initModel(sequelize: Sequelize): void {
        Label.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                labelName: {
                    field: "label_name",
                    type: DataTypes.STRING(45),
                },
                userId: {
                    field: "user_id",
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            {
                sequelize,
                modelName: "Label",
            }
        );
    }
}

export default Label;
