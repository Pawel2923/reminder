import { Sequelize, DataTypes, Model } from "sequelize";

class Bin extends Model {
    public uid!: string;
    public type!: string;
    public title!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
    public label!: string;
    public content!: JSON;
    public userId!: string;

    public static initModel(sequelize: Sequelize): void {
        Bin.init(
            {
                uid: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                },
                type: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                title: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                created_at: {
                    type: DataTypes.DATE,
                },
                updated_at: {
                    type: DataTypes.DATE,
                },
                label: {
                    type: DataTypes.STRING(45),
                },
                content: {
                    type: DataTypes.JSON,
                },
                user_id: {
                    type: DataTypes.STRING,
                },
            },
            {
                sequelize,
                modelName: "Bin",
            }
        );
    }
}

export default Bin;
