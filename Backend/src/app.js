import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { LOG_FORMAT, NODE_ENV, PORT } from './config/index.js';
import { logger, stream } from './utils/logger.js';
import { indexRouter } from './routes/index.js';
import { metadataRouter } from './routes/metadata/routes.js';
import { errorMiddleware } from './middlewares/error.js';
import { quickcodeRouter } from './routes/quickcode.js';

const app = express();

// Load plugins
app.use(morgan(LOG_FORMAT, { stream }));
app.use(cors());
app.use(hpp());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Healthcheck
app.get('/healthcheck', (req, res) => {
  res.send('Online');
});

// Load routers
const rootPath = '/';
app.use(rootPath, indexRouter);
app.use(rootPath, metadataRouter);
app.use(rootPath, quickcodeRouter);

// Configure swagger
const options = {
  swaggerDefinition: {
    info: {
      title: 'REST API',
      version: '1.0.0',
      description: 'Example docs',
    },
    host: 'localhost:5000',
    schemes: ['http'],
  },
  apis: ['swagger.yaml'], // Path to your API docs
};
const specs = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Configure error handling
app.use(errorMiddleware);

// Error Handling for Uncaught Exceptions and Unhandled Rejections
process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error', err);
  process.exit(1); // Mandatory (as per the Node.js docs)
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

app.listen(PORT, () => {
  logger.info('=================================');
  logger.info(`======= ENV: ${NODE_ENV} =======`);
  logger.info(`🚀 App listening on the port ${PORT}`);
  logger.info('=================================');
});
