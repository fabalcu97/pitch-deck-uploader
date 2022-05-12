export type DatabaseConfig = {
  uri: string;
};

export type ConfigType = {
  database: DatabaseConfig;
  port: number;
  mediaPath: string;
  env: string;
};

export default () => {
  const host = process.env.MONGODB_HOST;
  const user = process.env.MONGODB_USER;
  const isDocker = process.env.DOCKER;
  const password = process.env.MONGODB_PASSWORD;
  const dbName = process.env.MONGODB_DB_NAME;
  const dbPort = parseInt(process.env.MONGODB_PORT, 10);
  return {
    port: parseInt(process.env.PORT, 10) || 3000,
    mediaPath: process.env.MEDIA_PATH || '/src/../media',
    env: process.env.ENV || 'dev',
    database: {
      uri: `mongodb${isDocker ? '' : '+srv'}://${user}:${password}@${host}${
        dbPort ? ':' + dbPort : ''
      }/${dbName}`,
    } as DatabaseConfig,
  };
};
