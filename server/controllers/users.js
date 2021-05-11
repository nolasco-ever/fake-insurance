import Users from '../models/users.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signInUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        //Look for a matching email and find out if it exists in the database
        const existingUser = await Users.findOne({email});

        if(!existingUser){
            return res.status(404).json({message: 'User does not exist!'});
        }
        else{
            const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

            if(!isPasswordCorrect){
                return res.status(400).json({message: 'Incorrect Password'});
            }
            else{
                //Create a token for the user to keep the user signed in for 1 hour
                const token = jwt.sign({email: existingUser.email, id: existingUser._id}, 'test', {expiresIn: "1h"});

                res.status(200).json({result: existingUser, token});
            }
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const createUser = async (req, res) => {
    const {name, email, password, company_name, company_street, company_city, company_zipcode} = req.body;

    try {
        //Look for a matching email and find out if it exists in the database
        const existingUser = await Users.findOne({email});

        if(existingUser){
            return res.status(400).json({message: 'User already exists!'});
        }
        else{
            //hash password with salt: 12 before posting to database
            const hashedPassword = await bcrypt.hash(password, 12);

            const result = await Users.create({ name, email, password: hashedPassword, company_name, company_street, company_city, company_zipcode});
            const token = jwt.sign({email: result.email, id: result._id}, 'test', {expiresIn: "1h"});

            res.status(200).json({result, token});
        }
    } catch (error) {
        
    }
}