import express from 'express';
import { getquestions } from '../controller/questioncontroller';

const router = express.Router();

router.get('/:reference', getquestions);
export default router;
