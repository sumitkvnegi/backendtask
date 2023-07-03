import User from "../models/usersModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";

export const register = async (req, res, next) => {
    try{
        const {name, email, password} = req.body;
        const emailCheck = await User.findOne({email});
        if(emailCheck){
            return res.json({ msg: "Email already in use", status: false});
        }

        const hashedPassword = await hashPassword(password);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        delete user.password;
        return res.json({ status: true, user });
    } catch (err) {
        next(err);
    }
};

export const login = async (req, res, next) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user){
            return res.json({ msg: "incorrect username or password", status: false });
        }
        const isPasswordValid = await comparePassword(password, user.password);

        if(!isPasswordValid){
            return res.json({ msg: "incorrect username or password", status: false });
        }
        delete user.password;
        return res.json({ status: true, user });
    }catch(err){
        next(err);
    }
}

export const getAllUsers = async (req,res,next) => {
    try{
        const users = await User.find();
        return res.json(users);
    }catch(err){
        next(err);
    }
}