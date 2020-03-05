import { Request, Response, NextFunction, Router } from 'express';
import User from '../models/user';

class UserRoutes {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public async getUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await User.find();
            res.status(200);
            res.json({ "data": users });
        } catch (error) {
            res.status(400);
            res.json({ "error": error });
        }
    }

    public async getUser(req: Request, res: Response): Promise<void> {
        try {
            const user = await User.findById(req.params.user_id).populate('posts');
            res.status(200);
            res.json({ "data": user });
        } catch (error) {
            res.status(400);
            res.json({ "error": error });
        }

    }

    public async createUser(req: Request, res: Response): Promise<void> {
        try {
            const newUser = new User(req.body);
            await newUser.save();
            res.status(200);
            res.json({ "data": newUser });
        } catch (error) {
            res.status(400);
            res.json({ "error": error });
        }
    }

    public async updateUser(req: Request, res: Response): Promise<void> {
        try {
            const user = await User.findByIdAndUpdate(req.params.user_id, req.body, { new: true });
            res.status(200);
            res.json({ "data": user });
        } catch (error) {
            res.status(400);
            res.json({ "error": error });
        }
    }

    public async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            const user_id = req.params.user_id
            await User.findByIdAndRemove(user_id);
            res.status(200);
            res.json({ "data": user_id });
        } catch (error) {
            res.status(400);
            res.json({ "error": error });
        }
    }

    public routes() {
        this.router.get('/', this.getUsers);
        this.router.post('/', this.createUser);
        this.router.get('/:user_id', this.getUser);
        this.router.put('/:user_id', this.updateUser);
        this.router.delete('/:user_id', this.deleteUser);
    }


}

const userRoutes = new UserRoutes();
export default userRoutes.router;