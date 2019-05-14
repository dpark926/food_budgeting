const appName = "food_budgeting";
const databaseName = "nextjs-express-boilerplate";
const serverPort = process.env.PORT || 3005;

const completeConfig = {
  default: {
    appName,
    serverPort,
    databaseUrl:
      process.env.MONGODB_URI || `mongodb://localhost/${databaseName}`,
    jsonOptions: {
      headers: {
        "Content-Type": "application/json"
      }
    }
  },

  development: {
    appUrl: `http://localhost:${serverPort}/`
  },

  production: {
    appUrl: `https://food-budgeting.herokuapp.com/`
  }
};

// Public API
module.exports = {
  config: {
    ...completeConfig.default,
    ...completeConfig[process.env.NODE_ENV]
  },
  completeConfig
};
