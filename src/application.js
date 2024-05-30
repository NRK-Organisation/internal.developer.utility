const express = require('express');
const cors = require('cors');
const { initializaSwagger } = require("./swagger");
const morgan = require('morgan');
const mongoose = require('mongoose');
const ServerBasicResponse = require('./utils/texts/serverBasicResponse');
const routers = require('./routers');
const EnterpriseRouter = require('./routers/EnterpriseRouter');

class DatabaseAccessLayerApplication {
    constructor(port) {
        this.PORT = port || this.PORT;
        this.app = express();
        this.startUtilities();
        this.configureMiddlewares();
        this.configureLogger();
        this.generateRouters();
    }

    configureMiddlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        initializaSwagger(this.app, this.ServerBasicResponse);
    }

    configureLogger() {
        if (process.env.DEPLOYMENT_ENV) {
            this.app.use(morgan('combined', {
                stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
            }));
        } else {
            this.app.use(morgan('dev'));    // Enable logging
        }
    }

    generateRouters() {
        routers.forEach(router => {
            this.app.use(router.path, router.router);
        });
    }

    startUtilities () {
        this.ServerBasicResponse = ServerBasicResponse;
    }

    defineHealthCheckRoutes() {
        this.app.get('/', (req, res) => {
            return res.status(200).json({ message: this.ServerBasicResponse.HEALTH_CHECK_RESPONSE });
        });
    }

    async connectToDatabase() {
        const db = await mongoose.connect(process.env.MONGODB_URI_CATALYST);

        if (db) {
            console.log(this.ServerBasicResponse.DATABASE_CONNECTED_MESSAGE);
        } else {
            console.log(this.ServerBasicResponse.DATABASE_CONNECTION_ERROR);
        }
    }

    async startServer() {
        this.defineHealthCheckRoutes();
        await this.connectToDatabase();
        this.app.listen(this.PORT, () => {
            console.log(`${this.ServerBasicResponse.SERVER_STARTED_MESSAGE} ${this.PORT}`);
            console.log(`API Documentation: http://localhost:${this.PORT}${this.ServerBasicResponse.SWAGGER_API_DOCS}`);
        });
    }
}

module.exports = DatabaseAccessLayerApplication;