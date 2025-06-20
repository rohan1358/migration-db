import { DataTypes, Model, Sequelize } from "sequelize";
import db from './sequelize'

export function defineContentDetail(sequelize: Sequelize) {
    class ContentDetail extends Model {

        ctd_id: string | number | undefined;
        ctd_ama_id: string | number | undefined;


    }

    ContentDetail.init({
        ctd_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ctd_value: {
            type: DataTypes.TEXT('long'),
            allowNull: false
        },
        ctd_updatedDate: DataTypes.DATE,
        ctd_updatedBy: DataTypes.STRING(255),
        ctd_rec_status: DataTypes.INTEGER,
        ctd_deletedDate: DataTypes.DATE,
        ctd_deletedBy: DataTypes.STRING(255),
        ctd_ct_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ctd_createdDate: DataTypes.DATE,
        ctd_createdBy: DataTypes.STRING(255),
        ctd_ama_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        sequelize: sequelize,
        modelName: 'ContentDetail',
        tableName: 'contentdetail',
        timestamps: false
    });
    return ContentDetail
}

