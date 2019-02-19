import { Router } from 'express';
import blogsRouter from './blogs';
import mailRouter from './contact';

let router = Router();

router.use('/blogs', blogsRouter);
router.use('/contact', mailRouter);

export default router;