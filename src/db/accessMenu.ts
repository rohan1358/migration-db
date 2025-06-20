import { DataTypes, Model, Sequelize } from "sequelize";
import db from './sequelize'


export function defineAccessMenu(sequelize: Sequelize) {
    class AccessMenu extends Model {
        am_id: string | number | undefined;
    }

    AccessMenu.init({
        am_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        am_fet_id: DataTypes.INTEGER,
        am_amt_id: DataTypes.INTEGER,
        am_name: { type: DataTypes.STRING(255), allowNull: false },
        am_isRequired_contentDate: { type: DataTypes.INTEGER, allowNull: false },
        am_isRequired_SEO: { type: DataTypes.INTEGER, allowNull: false },
        am_rec_status: { type: DataTypes.INTEGER, allowNull: false },
        am_createdDate: { type: DataTypes.DATE, allowNull: false },
        am_createdBy: { type: DataTypes.STRING(255), allowNull: false },
        am_updatedDate: DataTypes.DATE,
        am_updatedBy: DataTypes.STRING(255),
        am_deletedDate: DataTypes.DATE,
        am_deletedBy: DataTypes.STRING(255),
    }, {
        sequelize: sequelize,
        modelName: 'AccessMenu',
        tableName: 'accessmenu',
        timestamps: false
    });

    return AccessMenu
}

