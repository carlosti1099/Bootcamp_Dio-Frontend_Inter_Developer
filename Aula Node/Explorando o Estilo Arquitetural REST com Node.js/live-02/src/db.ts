import { Pool } from 'pg';

const connectionString = 'postgres://tsjzywis:3zizFW5oPWqw81e9stIpZY_sc1gC6rgz@tuffi.db.elephantsql.com/tsjzywis';

const db = new Pool({ connectionString });

export default db;