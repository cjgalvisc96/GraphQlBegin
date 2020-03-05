import { Request, Response, NextFunction, Router } from 'express';
import Post from '../models/post';

class PostRoutes {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public async getPosts(req: Request, res: Response): Promise<void> {
        try {
            const posts = await Post.find();
            res.status(200);
            res.json({ "data": posts });
        } catch (error) {
            res.status(400);
            res.json({ "error": error });
        }
    }

    public async getPost(req: Request, res: Response): Promise<void> {
        try {
            const post = await Post.findById(req.params.post_id);
            res.status(200);
            res.json({ "data": post });
        } catch (error) {
            res.status(400);
            res.json({ "error": error });
        }

    }

    public async createPost(req: Request, res: Response): Promise<void> {
        try {
            const newPost = new Post(req.body);
            await newPost.save();
            res.status(200);
            res.json({ "data": newPost });
        } catch (error) {
            res.status(400);
            res.json({ "error": error });
        }
    }

    public async updatePost(req: Request, res: Response): Promise<void> {
        try {
            const post = await Post.findByIdAndUpdate(req.params.post_id, req.body, { new: true });
            res.status(200);
            res.json({ "data": post });
        } catch (error) {
            res.status(400);
            res.json({ "error": error });
        }
    }

    public async deletePost(req: Request, res: Response): Promise<void> {
        try {
            const post_id = req.params.post_id
            await Post.findByIdAndRemove(post_id);
            res.status(200);
            res.json({ "data": post_id });
        } catch (error) {
            res.status(400);
            res.json({ "error": error });
        }
    }

    public routes() {
        this.router.get('/', this.getPosts);
        this.router.post('/', this.createPost);
        this.router.get('/:post_id', this.getPost);
        this.router.put('/:post_id', this.updatePost);
        this.router.delete('/:post_id', this.deletePost);
    }


}

const postRoutes = new PostRoutes();
export default postRoutes.router;