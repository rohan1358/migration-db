import { mysqlTable, varchar, int, timestamp, longtext, tinyint, unique } from 'drizzle-orm/mysql-core';

export const contentDetailSchema = mysqlTable('contentdetail', {
    ctd_id: int('ctd_id').primaryKey().autoincrement(),
    ctd_value: longtext('ctd_value').notNull(),
    ctd_updatedDate: timestamp('ctd_updatedDate'),
    ctd_updatedBy: varchar('ctd_updatedBy', { length: 255 }),
    ctd_rec_status: int('ctd_rec_status'),
    ctd_deletedDate: timestamp('ctd_deletedDate'),
    ctd_deletedBy: varchar('ctd_deletedBy', { length: 255 }),
    ctd_ct_id: int('ctd_ct_id').notNull(), // foreign key candidate
    ctd_createdDate: timestamp('ctd_createdDate', { mode: 'string' }),
    ctd_createdBy: varchar('ctd_createdBy', { length: 255 }),
    ctd_ama_id: int('ctd_ama_id').notNull(), // foreign key candidate
});

export const contentSchema = mysqlTable('content', {
    ct_id: int('ct_id').primaryKey().autoincrement(),
    ct_c_id: int('ct_c_id').notNull(),
    ct_am_id: int('ct_am_id').notNull(),
    ct_subject: varchar('ct_subject', { length: 255 }).notNull(),
    ct_slug_ID: varchar('ct_slug_ID', { length: 500 }).notNull(),
    ct_slug_EN: varchar('ct_slug_EN', { length: 500 }).notNull(),
    ct_meta_title_ID: varchar('ct_meta_title_ID', { length: 100 }),
    ct_meta_title_EN: varchar('ct_meta_title_EN', { length: 100 }),
    ct_meta_description_ID: varchar('ct_meta_description_ID', { length: 100 }),
    ct_meta_description_EN: varchar('ct_meta_description_EN', { length: 100 }),
    ct_isPublished: tinyint('ct_isPublished').notNull(),
    ct_publishDate: timestamp('ct_publishDate', { mode: 'string' }),
    ct_contentDate: timestamp('ct_contentDate', { mode: 'string' }),
    ct_unpublishDate: timestamp('ct_unpublishDate', { mode: 'string' }),
    ct_requestApprovalBy: varchar('ct_requestApprovalBy', { length: 255 }),
    ct_cts_id: int('ct_cts_id').notNull(),
    ct_approver_token: varchar('ct_approver_token', { length: 500 }),
    ct_createdDate: timestamp('ct_createdDate', { mode: 'string' }),
    ct_createdBy: varchar('ct_createdBy', { length: 255 }),
    ct_updatedDate: timestamp('ct_updatedDate', { mode: 'string' }),
    ct_updatedBy: varchar('ct_updatedBy', { length: 255 }),
    ct_deletedDate: timestamp('ct_deletedDate', { mode: 'string' }),
    ct_deletedBy: varchar('ct_deletedBy', { length: 255 }),
});

export const accessMenuSchema = mysqlTable("accessmenu", {
    am_id: int("am_id").primaryKey().autoincrement(),
    am_fet_id: int("am_fet_id"),
    am_amt_id: int("am_amt_id"),
    am_name: varchar("am_name", { length: 255 }).notNull(),
    am_isRequired_contentDate: int("am_isRequired_contentDate").notNull().default(0),
    am_isRequired_SEO: int("am_isRequired_SEO").notNull().default(1),
    am_rec_status: int("am_rec_status").notNull(),
    am_createdDate: timestamp("am_createdDate").notNull(),
    am_createdBy: varchar("am_createdBy", { length: 255 }).notNull(),
    am_updatedDate: timestamp("am_updatedDate"),
    am_updatedBy: varchar("am_updatedBy", { length: 255 }),
    am_deletedDate: timestamp("am_deletedDate"),
    am_deletedBy: varchar("am_deletedBy", { length: 255 }),
});

export const accessSchema = mysqlTable("access", {
    a_id: int("a_id").primaryKey().autoincrement(),
    a_code: varchar("a_code", { length: 255 }).notNull(),
    a_name: varchar("a_name", { length: 255 }).notNull(),
    a_am_id: int("a_am_id").notNull(),
    a_view: int("a_view").notNull(),
    a_add: int("a_add").notNull(),
    a_edit: int("a_edit").notNull(),
    a_delete: int("a_delete").notNull(),
    a_rec_status: int("a_rec_status").notNull(),
    a_createdDate: timestamp("a_createdDate").notNull(),
    a_createdBy: varchar("a_createdBy", { length: 255 }).notNull(),
    a_updatedDate: timestamp("a_updatedDate"),
    a_updatedBy: varchar("a_updatedBy", { length: 255 }),
    a_deletedDate: timestamp("a_deletedDate"),
    a_deletedBy: varchar("a_deletedBy", { length: 255 }),
});

export const accessListSchema = mysqlTable("accesslist", {
    al_id: int("al_id").primaryKey().autoincrement(),
    al_a_id: int("al_a_id").notNull(),
    al_alt_id: int("al_alt_id").notNull(),
    al_ref_id: int("al_ref_id").notNull(),
    al_rec_status: int("al_rec_status").notNull(),
    al_createdDate: timestamp("al_createdDate").notNull(),
    al_createdBy: varchar("al_createdBy", { length: 255 }).notNull(),
    al_updatedDate: timestamp("al_updatedDate"),
    al_updatedBy: varchar("al_updatedBy", { length: 255 }),
    al_deletedDate: timestamp("al_deletedDate"),
    al_deletedBy: varchar("al_deletedBy", { length: 255 }),
});

export const accessMenuAttributeSchema = mysqlTable("accessmenuattribute", {
    ama_id: int("ama_id").primaryKey().autoincrement(),
    ama_amat_id: int("ama_amat_id").notNull(),
    ama_am_id: int("ama_am_id").notNull(),
    ama_name: varchar("ama_name", { length: 255 }).notNull(),
    ama_isSearchable: int("ama_isSearchable").notNull().default(0),
    ama_group_code: varchar("ama_group_code", { length: 255 }),
    ama_form_order: int("ama_form_order").notNull().default(0),
    ama_preview_order: int("ama_preview_order").notNull().default(0),
    ama_isRequired: int("ama_isRequired").notNull().default(1),
    ama_createdDate: timestamp("ama_createdDate").notNull(),
    ama_createdBy: varchar("ama_createdBy", { length: 255 }).notNull(),
});