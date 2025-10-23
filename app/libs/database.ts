import mariadb from "mariadb";

class Database {
    private pool: mariadb.Pool;
    private connection: mariadb.Connection | null = null;

    public constructor() {
        this.pool = mariadb.createPool({
            host: process.env.DB_HOST || "localhost",
            user: process.env.DB_USER || "purquizz",
            password: process.env.DB_PASSWORD || "purquizz",
            database: process.env.DB_DATABASE || "purquizz"
        });
    }

    public async getConnection(): Promise<mariadb.Connection> {
        if(!this.connection) {
            this.connection = await this.pool.getConnection();
        } else {
            try {
                this.connection.ping()
            } catch {
                this.connection = await this.pool.getConnection();
            }
        }

        return this.connection;
    }

    public async close(): Promise<void> {
        if(this.connection) {
            await this.connection.close();
            this.connection = null;
        }

        await this.pool.end();
    }

    public async query<T = any>(sql: string, values: any[] = []): Promise<T[]> {
        const conn = await this.getConnection();
        try {
            const result = await conn.query(sql, values);
            return result as T[];
        } catch (e) {
            console.log(`[!][DATABASE][QUERY] - ${e}`);
            throw e;
        }
    }
}

const database = new Database();
export default database;