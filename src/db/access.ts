import { DataTypes, Model, Sequelize } from "sequelize";
import db from './sequelize'

export function defineAccess(sequelize: Sequelize) {
    class Access extends Model {
        a_id: string | number | undefined;
}

    Access.init({
        a_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        a_code: { type: DataTypes.STRING(255), allowNull: false },
        a_name: { type: DataTypes.STRING(255), allowNull: false },
        a_am_id: { type: DataTypes.INTEGER, allowNull: false },
        a_view: { type: DataTypes.INTEGER, allowNull: false },
        a_add: { type: DataTypes.INTEGER, allowNull: false },
        a_edit: { type: DataTypes.INTEGER, allowNull: false },
        a_delete: { type: DataTypes.INTEGER, allowNull: false },
        a_rec_status: { type: DataTypes.INTEGER, allowNull: false },
        a_createdDate: { type: DataTypes.DATE, allowNull: false },
        a_createdBy: { type: DataTypes.STRING(255), allowNull: false },
        a_updatedDate: DataTypes.DATE,
        a_updatedBy: DataTypes.STRING(255),
        a_deletedDate: DataTypes.DATE,
        a_deletedBy: DataTypes.STRING(255),
    }, {
        sequelize: sequelize,
        modelName: 'Access',
        tableName: 'access',
        timestamps: false
    });
    return Access
}
