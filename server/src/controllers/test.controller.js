import { Router } from 'express';
import testService from '../services/test.service.js';

const router = Router();

router.get('/', testService.getAll);

export default router;
