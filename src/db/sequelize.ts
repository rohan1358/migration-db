import { Sequelize } from 'sequelize';

const db1 = new Sequelize('stp', 'ec2', 'P@ssw0rd', {
    host: '46.137.250.66',
    dialect: 'mysql',
});
// const db2 = new Sequelize('STP Migration', 'ec2', 'P@ssw0rd', {
//     host: '46.137.250.66',
//     dialect: 'mysql',
// });

// const db2 = new Sequelize('protelindo', 'root', 'qwe123', {
//     host: 'localhost',
//     dialect: 'mysql',
// });

const db2 = new Sequelize('protelindo', 'protelindo', 'dSEWlF6anSiM3b3Q', {
    host: 'localhost',
    dialect: 'mysql',
});

export default {
    db1, db2
}