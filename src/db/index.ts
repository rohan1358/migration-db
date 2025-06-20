import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './schema';

const poolConnection = mysql.createPool({
  host: '46.137.250.66',
  user: 'ec2',
  database: 'stp',
  password: 'P@ssw0rd',
});

const poolConnection2 = mysql.createPool({
  host: '46.137.250.66',
  user: 'ec2',
  database: 'STP Migration',
  password: 'P@ssw0rd',
});

export const db = drizzle({ client: poolConnection });
export const db2 = drizzle({ client: poolConnection2 });
