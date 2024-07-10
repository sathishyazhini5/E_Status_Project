import express from 'express';
import { insertQuickCode } from '../controllers/Metadata/quickcodeController.js'; // Corrected path

const router = express.Router();

router.post('/quickcode', insertQuickCode);

export { router as quickcodeRouter };
