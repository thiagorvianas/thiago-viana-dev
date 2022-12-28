import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'THIAGO_VIANA_DEV',
  host: process.env.DB_HOSTNAME,
  port: Number(process.env.DB_PORT),
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

export default config;
