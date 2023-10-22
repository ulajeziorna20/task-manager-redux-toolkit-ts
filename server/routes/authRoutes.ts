
// const router = app.Router();
import { Router } from 'express'

import { jsonParser } from '../server';

const router = Router()

const authController = require('../controllers/authController.ts');

router.post('/signin', () => authController.signin());

// w callback przekazujesz tylko request
router.post('/register',   authController.register);

module.exports = router;