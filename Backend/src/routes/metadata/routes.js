import express from 'express';
import { insertMetadata, getAllMetadata,getMetacodedata } from '../../controllers/Metadata/metadataController.js';

const router = express.Router();

router.post('/metadata', insertMetadata);
router.get('/metadata', getAllMetadata);
router.get('/metadata/meta_code_name', getMetacodedata);

export { router as metadataRouter };
