import { DataTypes, Model, Sequelize } from "sequelize";

export function defineCompanyWebPage(sequelize: Sequelize) {
    class CompanyWebPage extends Model {
        cwp_id: string | number | undefined;
    }
    CompanyWebPage.init({
        cwp_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        cwp_parent_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        cwp_c_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        cwp_code: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        cwp_name_ID: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        cwp_name_EN: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        cwp_url: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        cwp_url_isAbsolute: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
        cwp_isVisible: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
        cwp_order: {
            type: DataTypes.STRING(255),
            allowNull: true,
            defaultValue: '0.0',
        },
        cwp_desktop_img: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        cwp_mobile_img: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        cwp_meta_title_ID: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        cwp_meta_desc_ID: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        cwp_meta_title_EN: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        cwp_meta_desc_EN: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        cwp_footer_ID: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        cwp_footer_EN: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
    }, {
        tableName: 'companywebpage',
        sequelize,
        timestamps: false,
    });
    return CompanyWebPage
}
