module.exports = {
  apps: [
    {
      name: "vue app",
      script: "server.js",
      node_args: "--harmony",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
      output: "/dev/null",
      error: "./logs/error.log",
      log: "/dev/null",
      log_type: "json",
      log_date_format: "DD-MM-YYYY / HH:mm:ss",
    },
  ],
};
