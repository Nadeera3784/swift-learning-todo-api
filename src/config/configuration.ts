export default () => ({
  app: {
    environment: process.env.ENV,
  },
  database: {
    mongodb: {
      uri: process.env.DATABASE_URL,
    },
  },
});
