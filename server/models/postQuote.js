import mongoose from 'mongoose';

//create mongoose schema
const postSchema = mongoose.Schema({
    userID: String,
    dot_number: String,
    nbr_of_pwr_units: String,
    val_of_pwr_units: String,
    premium_amount: String,
    premium_tax: String,
    premium_total: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    driver1_name: String,
    driver1_age: String,
    driver2_name: String,
    driver2_age: String,
    driver3_name: String,
    driver3_age: String,
    driver4_name: String,
    driver4_age: String,
    driver5_name: String,
    driver5_age: String,
    created_at: {
        type: Date,
        default: new Date()
    },
    updated_at: {
        type: Date,
        default: new Date()
    }
});

//Turn schema into model
const PostQuote = mongoose.model('PostQuote', postSchema);

export default PostQuote;