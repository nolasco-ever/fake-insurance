import express from 'express';

import { createUser, signInUser } from '../controllers/users.js';

//set up router
const router = express.Router();

//Add routes
router.post('/signup', createUser);
router.post('/signin', signInUser);

export default router;