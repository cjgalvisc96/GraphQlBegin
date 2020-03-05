import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import indexRoutes from './routes/indexRoutes';
import mongoose from 'mongoose';
import compression from 'compression';
import cors from 'cors';
import postsRoutes from './routes/postsRoutes';
import usersRoutes from './routes/usersRoutes';

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config() {
        // Db
        const mongo_uri: string = 'mongodb://mongo-db:27017/db_rest_api_ts';
        mongoose.set('useFindAndModify', true);
        mongoose.connect(mongo_uri, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true

        }).then(db => console.log("Db is connected"));
        // Server
        this.app.set('port', process.env.PORT || 3000);
        // Middlewars
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(helmet());
        this.app.use(compression()); // reduce the response weigth
        this.app.use(cors());
    }

    routes() {
        this.app.use(indexRoutes);
        this.app.use('/api/posts', postsRoutes);
        this.app.use('/api/users', usersRoutes);
    }

    start() {
        let serverPort = this.app.get('port')
        this.app.listen(serverPort, () => {
            console.log("Server on port => ", serverPort);
        });
    }
}

const server = new Server();
server.start();
