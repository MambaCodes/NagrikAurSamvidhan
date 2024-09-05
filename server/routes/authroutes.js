import express from 'express';
import authController from '../controller/authcontroller.js';
//import authMiddleware from '../middleware/authmiddleware.js';
const router = express.Router();
router.post('/register', authController.register);
router.post('/login', authController.login);
//router.post('/logout', authMiddleware, authController.logout);
export default router;
