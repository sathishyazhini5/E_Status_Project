import express from 'express';
import { insertMetadata } from '../../controllers/Metadata/metadataController.js';

const router = express.Router();

router.post('/metadata', insertMetadata);

export { router as metadataRouter };
