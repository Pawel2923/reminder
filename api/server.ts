const express = require("express");
const app = express();

const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

// Serve Swagger UI
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
