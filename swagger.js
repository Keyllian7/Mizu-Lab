const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Mizu-Lab API',
            version: '1.0.0',
            description: 'API para automatização e gestão de sistemas no laboratório da Mizu Cimentos',
            contact: {
                name: 'Keyllian Azevedo',
            },
            servers: ['http://localhost:8081'],
        },
    },
    apis: ['./routes/*.js', './models/*.js', './swagger/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};