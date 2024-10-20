import { Sequelize, DataTypes, Model } from "sequelize";

class Label extends Model {
    public name!: string;
    public userId!: string;

    public static initModel(sequelize: Sequelize): void {
        Label.init(
            {
                name: {
                    type: DataTypes.STRING(45),
                    primaryKey: true,
                },
                user_id: {
                    type: DataTypes.STRING,
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
