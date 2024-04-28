import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const port = DB_PORT ? parseInt(DB_PORT, 10) : undefined;

export const sequelize = new Sequelize({
  dialect: 'mysql',
  host: DB_HOST,
  port: port,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
