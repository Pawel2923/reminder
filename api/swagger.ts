import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
    openapi: "3.1.0",
    info: {
        title: "Reminder API Docs",
        version: "1.0.0",
        description: "API Documentation for Reminder App",
    },
};

const options = {
    swaggerDefinition,
    apis: ["./routes/*.ts"],
};

export default swaggerJSDoc(options);
