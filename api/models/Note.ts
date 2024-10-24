import { Sequelize, DataTypes, Model } from "sequelize";

class Note extends Model {
    declare uid: string;
    declare type: string;
    declare title: string;
    declare createdAt: Date;
    declare updatedAt: Date;
    declare label: string;
    declare content: JSON;
    declare userId: string;

    public static initModel(sequelize: Sequelize): void {
        Note.init(
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
                createdAt: {
                    field: "created_at",
                    type: DataTypes.DATE,
                },
                updatedAt: {
                    field: "updated_at",
                    type: DataTypes.DATE,
                },
                label: {
                    type: DataTypes.STRING(45),
                },
                content: {
                    type: DataTypes.JSON,
                },
                userId: {
                    field: "user_id",
                    type: DataTypes.STRING,
                },
            },
            {
                sequelize,
                modelName: "Note",
            }
        );
    }
}

export default Note;
