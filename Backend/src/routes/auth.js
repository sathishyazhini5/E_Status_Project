import { loginAdmin } from '../controllers/index.js';
import express from 'express';
const router = express.Router();

const path = '/auth';

router.post(`${path}/login`, loginAdmin);

export const authRouter = router;