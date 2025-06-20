import { DataTypes, Model, Sequelize } from "sequelize";
import db from './sequelize'

export function defineAccessMenuAttribute(sequelize: Sequelize) {
    class AccessMenuAttribute extends Model {
        ama_id: string | number | undefined;
}

    AccessMenuAttribute.init({
        ama_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        ama_amat_id: { type: DataTypes.INTEGER, allowNull: false },
        ama_am_id: { type: DataTypes.INTEGER, allowNull: false },
        ama_name: { type: DataTypes.STRING(255), allowNull: false },
        ama_isSearchable: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        ama_group_code: DataTypes.STRING(255),
        ama_form_order: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        ama_preview_order: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        ama_isRequired: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
        ama_createdDate: { type: DataTypes.DATE, allowNull: false },
        ama_createdBy: { type: DataTypes.STRING(255), allowNull: false },
    }, {
        sequelize: sequelize,
        modelName: 'AccessMenuAttribute',
        tableName: 'accessmenuattribute',
        timestamps: false
    });
    return AccessMenuAttribute
}

