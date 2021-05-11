import express from 'express';

import { getQuotes, createQuotes, deleteQuote } from '../controllers/posts.js';

//set up router
const router = express.Router();

//Add routes
router.get('/', getQuotes);
router.post('/', createQuotes);
router.delete('/:id', deleteQuote);

export default router;