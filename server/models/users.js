import mongoose from 'mongoose';

//create mongoose schema
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    company_name: String,
    company_street: String,
    company_city: String,
    company_zipcode: String,
    created_at: {
        type: Date,
        default: new Date()
    }
});

//Turn schema into model
const Users = mongoose.model('Users', userSchema);

export default Users;