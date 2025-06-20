import { DataTypes, Model, Sequelize } from "sequelize";
import db from './sequelize'

export function defineContent(sequelize: Sequelize) {
    class Content extends Model {
        ct_id: string | number | undefined;
        ct_am_id: any;
    }

    Content.init({
        ct_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        ct_c_id: { type: DataTypes.INTEGER, allowNull: false },
        ct_am_id: { type: DataTypes.INTEGER, allowNull: false },
        ct_subject: { type: DataTypes.STRING(255), allowNull: false },
        ct_slug_ID: { type: DataTypes.STRING(500), allowNull: false },
        ct_slug_EN: { type: DataTypes.STRING(500), allowNull: false },
        ct_meta_title_ID: DataTypes.STRING(100),
        ct_meta_title_EN: DataTypes.STRING(100),
        ct_meta_description_ID: DataTypes.STRING(100),
        ct_meta_description_EN: DataTypes.STRING(100),
        ct_isPublished: { type: DataTypes.TINYINT, allowNull: false },
        ct_publishDate: DataTypes.DATE,
        ct_contentDate: DataTypes.DATE,
        ct_unpublishDate: DataTypes.DATE,
        ct_requestApprovalBy: DataTypes.STRING(255),
        ct_cts_id: { type: DataTypes.INTEGER, allowNull: false },
        ct_approver_token: DataTypes.STRING(500),
        ct_createdDate: DataTypes.DATE,
        ct_createdBy: DataTypes.STRING(255),
        ct_updatedDate: DataTypes.DATE,
        ct_updatedBy: DataTypes.STRING(255),
        ct_deletedDate: DataTypes.DATE,
        ct_deletedBy: DataTypes.STRING(255),
    }, {
        sequelize: sequelize,
        modelName: 'Content',
        tableName: 'content',
        timestamps: false
    });
    return Content
}

