export type DatabaseConfig = {
  uri: string;
  host: string;
  user: string;
  password: string;
  dbName: string;
  port: number;
};

export default () => {
  const host = process.env.MONGODB_HOST;
  const user = process.env.MONGODB_USER;
  const password = process.env.MONGODB_PASSWORD;
  const dbName = process.env.MONGODB_DB_NAME;
  const dbPort = parseInt(process.env.MONGODB_PORT, 10) || 27017;
  return {
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      host,
      user,
      password,
      dbName,
      port: dbPort,
      uri: `mongodb://${user}:${password}@${host}${
        dbPort ? ':' + dbPort : ''
      }/${dbName}`,
    } as DatabaseConfig,
  };
};
