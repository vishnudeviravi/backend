import express from 'express';
import Department from '../../db/models/departmentSchema.js';
import Doctor from '../../db/models/doctorSchema.js';
import checkToken from '../../middlewares/checkToken.js';

const router = express.Router();

// add department
router.post('/', checkToken(['DOCTOR']), async (req, res) => {
  const body = { ...req.body };
  await Department.create(body);
  res.status(201).json({ message: 'Department added successfully' });
});

// list all departments
router.get('/', checkToken(['DOCTOR', 'USER']), async (req, res) => {
  const departments = await Department.find();
  res.status(200).json(departments);
});

// list doctors by department
router.get('/doctor/:id', checkToken(['USER']), async (req, res) => {
  const { id } = req.params;
  const doctors = await Doctor.find({ department: id });
  res.status(200).json(doctors);
});

export default router;
