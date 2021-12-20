import { Router } from 'express';
import deviceService from '../services/device.service.js';

const router = Router();

router.get('/', deviceService.getAll);
router.post('/', deviceService.create);
router.delete('/:id', deviceService.remove);

export default router;
