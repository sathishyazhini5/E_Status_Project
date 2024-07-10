import express from 'express';
import { insertMetadata, getAllMetadata } from '../../controllers/Metadata/metadataController.js';

const router = express.Router();

router.post('/metadata', insertMetadata);
router.get('/metadata', getAllMetadata);

export { router as metadataRouter };
