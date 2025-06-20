import { DataTypes, Model, Sequelize } from "sequelize";
import db from './sequelize'


export function defineAccessList(sequelize: Sequelize) {
    class AccessList extends Model {
        al_id: string | number | undefined;
}

    AccessList.init({
        al_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        al_a_id: { type: DataTypes.INTEGER, allowNull: false },
        al_alt_id: { type: DataTypes.INTEGER, allowNull: false },
        al_ref_id: { type: DataTypes.INTEGER, allowNull: false },
        al_rec_status: { type: DataTypes.INTEGER, allowNull: false },
        al_createdDate: { type: DataTypes.DATE, allowNull: false },
        al_createdBy: { type: DataTypes.STRING(255), allowNull: false },
        al_updatedDate: DataTypes.DATE,
        al_updatedBy: DataTypes.STRING(255),
        al_deletedDate: DataTypes.DATE,
        al_deletedBy: DataTypes.STRING(255),
    }, {
        sequelize: sequelize,
        modelName: 'AccessList',
        tableName: 'accesslist',
        timestamps: false
    });
    return AccessList
}
