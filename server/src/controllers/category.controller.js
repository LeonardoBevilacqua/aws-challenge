import { Router } from 'express';
import categoryService from '../services/category.service.js';

const router = Router();

router.get('/', categoryService.getAll);
router.post('/', categoryService.create);
router.delete('/:id', categoryService.remove);

export default router;
