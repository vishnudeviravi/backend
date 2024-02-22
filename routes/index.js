import express from 'express';
import doctorRoutes from './doctorRoutes/index.js';
import userRoutes from './userRoutes/index.js';
import departmentRoutes from './departmentRoutes/index.js';
import imageRoute from './imageRoute/index.js';
import slotRoutes from './slotRoutes/index.js';
import appointmentRoutes from './appointmentRoutes/index.js';

const router = express.Router();

router.use('/doctor', doctorRoutes);
router.use('/user', userRoutes);
router.use('/department', departmentRoutes);
router.use('/slot', slotRoutes);
router.use('/upload', imageRoute);
router.use('/appointment', appointmentRoutes);

export default router;
