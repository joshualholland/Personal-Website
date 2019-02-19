import { Router } from 'express';
import apiRouter from './api';

let router = Router();

router.use('/api', apiRouter);

export default router;