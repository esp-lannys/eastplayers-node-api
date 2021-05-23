const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const userRouter = require("./api/routes/user");
const taskRouter = require("./api/routes/task");

const app = express();
app.use(express.json());

// ROUTES
app.use(userRouter);
app.use(taskRouter);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task Management API",
      version: "1.0.0",
      description: "Use the following documentation to explore the API",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ['app.js'],
};
const specifications = swaggerJsDoc(options);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specifications));

module.exports = { app };
