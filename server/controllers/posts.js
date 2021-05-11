import PostQuote from '../models/postQuote.js';

//Declare functions for getting and posting data
export const getQuotes = async (req, res) => {
    try {
        //Fetch and return quotes
        const postQuotes = await PostQuote.find();
        res.status(200).json(postQuotes);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createQuotes = async (req, res) => {
    const quote = req.body;
    const newQuote = new PostQuote(quote);

    try {
        await newQuote.save();

        res.status(201).json(newQuote);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const deleteQuote = async (req, res) => {
    const { id } = req.params;

    //delete quote
    await PostQuote.findByIdAndRemove(id);
    res.json({message: 'Quote deleted successfully!'});
}