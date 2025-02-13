const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      },
      env: {
        mongodb_username: process.env.mongodb_username,
        mongodb_password: process.env.mongodb_password,
        mongodb_clustername: process.env.mongodb_clustername,
        mongodb_database: process.env.mongodb_database,
      },
    };
  }

  return {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
    env: {
      mongodb_username: process.env.mongodb_username,
      mongodb_password: process.env.mongodb_password,
      mongodb_clustername: process.env.mongodb_clustername,
      mongodb_database: process.env.mongodb_database,
    },
  };
};
